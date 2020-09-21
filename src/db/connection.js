import env from 'env';
import mongoose from 'mongoose';
import './models';

const collections = new Promise(resolve => {
  mongoose
    .connect(env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      log('Connected to MongoDB!');
      resolve(Object.keys(mongoose.connection.collections).map(c => mongoose.connection.collections[c].name));
    });
});

export const getCollections = () => collections;
