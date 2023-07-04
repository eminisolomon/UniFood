export interface Restaurant {
  _id?: string;
  name: string;
  location: string;
  state: string;
  country: string;
  uniqueCode: string;
  isActive: boolean;
  openingTime: string;
  closingTime: string;
  daysOpened: string[];
}
