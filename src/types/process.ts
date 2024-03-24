import { Area } from './area';

export interface Process {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  title?: String;
  areaId?: number;
  area?: Area;
  parentId?: number;
  parentProcess?: Process;
  childProcess?: Process[];
  toolLink?: String;
}
