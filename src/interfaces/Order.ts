import { Food } from './Food';

interface OrderFood {
  food: Food;
  quantity: number;
}

interface Image {
  url: string;
}

export interface Order {
  user?: string;
  tableNumber?: number;
  isGuest: boolean;
  foods: OrderFood[];
  totalAmount: number;
  qrCode: Image;
}
