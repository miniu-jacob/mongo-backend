import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('[Database Connected] ...');
  } catch (error) {
    console.log('Error happened during connecting : ', error);
  }
};

export default connectDB;
