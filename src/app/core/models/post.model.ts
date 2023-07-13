import { User } from './user.model';

export interface Post {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  author: User;
}
