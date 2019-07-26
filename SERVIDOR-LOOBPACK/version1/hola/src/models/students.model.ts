import {Entity, model, property,hasOne, belongsTo} from '@loopback/repository';
import { Users, UsersWithRelations } from '.';
import { Proyects, ProyectsWithRelations } from './proyects.model';

@model({settings: {}})
export class Students extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'boolean',
    required: true,
    defaul: 1,
  })
  state: boolean;

  @belongsTo(() => Users)
  studentsId: number;

  @hasOne(() => Proyects)
  proyects?: Proyects;

  constructor(data?: Partial<Students>) {
    super(data);
  }
}

export interface StudentsRelations {
  users?: UsersWithRelations;
  proyects?: ProyectsWithRelations;
}

export type StudentsWithRelations = Students & StudentsRelations;
