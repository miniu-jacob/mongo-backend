import mongoose from 'mongoose';

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.SchemaTypes.Decimal128,
    required: true,
    validate: (v) => v >= 10
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
});

// Creating Model
const MovieModel = mongoose.model('Movie', movieSchema, 'movie');

const updateById = async (id) => {
  try {
    // 특정 데이터 업데이트하기
    // updateOne (filter, whatToChange?)
    const result = await MovieModel.findByIdAndDelete(id);
    console.clear();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { updateById };
