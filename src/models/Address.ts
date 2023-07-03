import mongoose, { model, Document, Schema } from 'mongoose';
import { Address } from '@interfaces/Address';

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

export const AddressModel = model<Address & Document>('Address', AddressSchema);
