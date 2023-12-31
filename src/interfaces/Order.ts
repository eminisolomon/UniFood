import { Food } from './Food';

interface OrderFood {
  food: Food;
  quantity: number;
}

interface Image {
  url: string;
}

export interface Order {
  _id?: string;
  user?: string;
  tableNumber?: number;
  paymentReference?: string;
  isGuest: boolean;
  foods: OrderFood[];
  totalAmount: number;
  qrCode: Image;
}
