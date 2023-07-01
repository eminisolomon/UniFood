import { IUser } from "./User";

export interface IAddress {
  user: IUser;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}
