interface Image {
  url: string;
}

export interface IFood {
  name: string;
  description: string;
  images: Image[];
  category: string;
  price: number;
}
