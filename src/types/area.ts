import { Process } from './process';

export interface Area {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  title?: String;
  processes?: Process[];
}
