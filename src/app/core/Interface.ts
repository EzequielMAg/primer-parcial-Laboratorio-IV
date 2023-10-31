export interface IProduct {
  id:          number | null;
  description: string;
  price:       string;
  stock:       string;
}

export interface IUser {
  id:       number | null;
  email:    string;
  password: string;
}
