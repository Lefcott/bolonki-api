import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    maps: [Map]
  }

  type Polygon {
    Sides: Int!
    AdjacentPolygons: [Int!]!
  }

  type Map {
    id: ID!
    Name: String!
    Polygons: [Polygon!]!
  }

  type Mutation {
    createMap(Name: String!): Map!
  }
`;
