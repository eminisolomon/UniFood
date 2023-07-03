import mongoose, { Document, Schema } from 'mongoose';
import { IAddress } from '../interfaces/Address';

export interface IAddressModel extends IAddress, Document {}

const AddressSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IAddressModel>('Address', AddressSchema);
