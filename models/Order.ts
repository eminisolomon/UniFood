import mongoose, { Document, Schema } from 'mongoose';
import { IOrder } from '../interfaces/Order';

export interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    tableNumber: {
      type: Number,
    },
    isGuest: {
      type: Boolean,
      required: true,
    },
    foods: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    qrCode: {
        url: { type: String },
    },
  },
  { timestamps: true },
);

export default mongoose.model<IOrderModel>('Order', OrderSchema);
