import { model, Document, Schema } from 'mongoose';
import { Category } from '@interfaces/Category';

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

export const CategoryModel = model<Category & Document>('Category', CategorySchema);
