import { IFood } from './Food';

interface IOrderFood {
  food: IFood;
  quantity: number;
}

interface Image {
  url: string;
}

export interface IOrder {
  user?: string;
  tableNumber?: number;
  isGuest: boolean;
  foods: IOrderFood[];
  totalAmount: number;
  qrCode: Image;
}
