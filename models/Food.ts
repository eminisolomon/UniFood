import mongoose, { Document, Schema } from 'mongoose';
import { IFood } from '../interfaces/Food';

export interface IFoodModel extends IFood, Document {}

const FoodSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IFoodModel>('Food', FoodSchema);
