
export interface User {
  id: number;
  userName: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  city: string;
  country: string;
  roles?: string[];
}
