export interface TUserFormInputs {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  country: string;
}

export interface TUserData {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  terms: boolean;
  country: string;
}

export interface TFormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  terms?: string;
  avatar?: string;
  country?: string;
}
