import {Entity, model, property,belongsTo, hasMany} from '@loopback/repository';
import { Users, UsersWithRelations } from './users.model';
import { Proyects, ProyectsWithRelations } from './proyects.model';

@model({settings: {}})
export class Teachers extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Users)
  teachersId: number;

  @hasMany(() => Proyects)
  proyects?: Proyects[];

  constructor(data?: Partial<Teachers>) {
    super(data);
  }
}

export interface TeachersRelations {
  users?: UsersWithRelations;
  proyects?: ProyectsWithRelations;
}

export type TeachersWithRelations = Teachers & TeachersRelations;
