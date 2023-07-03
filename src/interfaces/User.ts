interface Image {
  public_id: string;
  url: string;
}

export interface User {
  _id?: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  avatar?: Image;
  token?: string;
  password: string;
}
