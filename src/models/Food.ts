import { model, Document, Schema } from 'mongoose';
import { Food } from '../interfaces/Food';

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

export const FoodModel =model<Food & Document>('Food', FoodSchema);
