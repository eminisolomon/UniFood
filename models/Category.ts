import mongoose, { Document, Schema } from 'mongoose';
import { ICategory } from '../interfaces/Category';

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      url: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU',
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model<ICategoryModel>('Category', CategorySchema);
