import { Restaurant } from "./Restaurant";

interface Image {
  url: string;
}

export interface Food {
  name: string;
  description: string;
  images: Image[];
  category: string;
  price: number;
  restaurant: Restaurant;
}
