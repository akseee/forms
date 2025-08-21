// user

export type TUserForm = {
  name: string;
  age: number;
  email: string;
  gender: 'man' | 'woman' | string;
  country: string;
  avatar?: string;
  terms: boolean;
  isNew: boolean;
};

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
