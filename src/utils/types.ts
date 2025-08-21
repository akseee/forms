// user
//forms

export interface TUserFormInputs {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  // avatar: FileList | null;
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

export interface TUserData {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  terms: boolean;
  // avatar: string | null;
  country: string;
}

export type TUserCard = {
  id: string;
  name: string;
  age: number;
  email: string;
  gender: 'man' | 'woman' | string;
  country: string;
  avatarBase64: string;
  tags?: string[];
  isNew?: boolean;
};
