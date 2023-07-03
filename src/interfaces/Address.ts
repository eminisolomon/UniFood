import { User } from "./User";

export interface Address {
  user: User;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}
