import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/User';

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU',
      },
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
    token: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUserModel>('User', UserSchema);
