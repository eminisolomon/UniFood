import { model, Document, Schema } from 'mongoose';
import { Restaurant } from '@/interfaces/Restaurant';

const RestaurantSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    uniqueCode: {
      type: String,
      required: true,
      unique: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    openingTime: {
      type: String,
      required: true,
    },
    closingTime: {
      type: String,
      required: true,
    },
    daysOpened: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export const RestaurantModel = model<Restaurant & Document>('Restaurant', RestaurantSchema);
