import mongoose from 'mongoose';

export const Map = mongoose.model(
  'Map',
  {
    Name: { type: String, required: true },
    Polygons: [
      {
        Sides: { type: Number, required: true },
        AdjacentPolygons: {}
      }
    ]
  },
  'Maps'
);
