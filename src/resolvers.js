import { Map } from './db/models/Map';

export const resolvers = {
  Query: {
    maps: () => Map.find()
  },
  Mutation: {
    createMap: async (_, { Name, Polygons }) => {
      const map = new Map({ Name, Polygons });
      await map.save();
      return map;
    }
  }
};
