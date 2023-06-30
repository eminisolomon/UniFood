import { IRole } from './Role';

interface Image {
  public_id: string;
  url: string;
}

export interface IUser {
  name: string;
  username: string;
  email: string;
  phone: string;
  role: IRole;
  avatar?: Image;
  token?: string;
  password: string;
}
