import 'jest';
import 'globals';
import 'babel-polyfill';
import * as util from 'util';
import rp from 'request-promise';
import { wait } from 'utils/wait';
import { exec, spawn } from 'child_process';
import projectDir from 'utils/projectDir';
import { gql } from 'apollo-server-express';
import { print } from 'graphql';

const pExec = util.promisify(exec);

const API = 'http://localhost:4000/graphql';
const CMD_SEED_DATABASE = `${projectDir}/scripts/seed.sh Maps`;
let api;

describe('Getting map items', () => {
  beforeAll(async () => {
    log('Spawning API');
    api = spawn('npm', ['start']);
    await wait(2000);
    await pExec(CMD_SEED_DATABASE);
  });
  afterAll(async () => {
    log('Killing API');
    await api.kill();
    log('API killed');
  });

  it('Retrieves the maps', async () => {
    const query = gql`
      query {
        maps {
          Name
          Polygons {
            Sides
            AdjacentPolygons
          }
        }
      }
    `;

    const response = await rp({ method: 'POST', uri: API, body: { query: print(query) }, json: true });
    expect(response).toMatchSnapshot();
  });
});
