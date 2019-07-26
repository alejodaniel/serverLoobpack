import {Entity, model, property, hasOne} from '@loopback/repository';
import { Proyects, ProyectsWithRelations } from './proyects.model';

@model({settings: {}})
export class Forms extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name_proyect: string;

  @property({
    type: 'string',
    required: true,
  })
  members: string;

  @property({
    type: 'string',
    required: true,
  })
  group_leader: string;

  @property({
    type: 'string',
    required: true,
  })
  link: string;

  @property({
    type: 'string',
    required: true,
  })
  topic: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  scope: string;

  @property({
    type: 'string',
    required: true,
  })
  tools: string;

  @property({
    type: 'string',
    required: true,
  })
  objetive: string;

  @property({
    type: 'string',
    required: true,
  })
  level: string;
  @property({
    type: 'string',
    required: true,
  })
  area: string;
  
  @property({
    type: 'boolean',
    required: true,
    defaul: 1,
  })
  state: boolean;

  @property({
    type: 'boolean',
    required: true,
    defaul: 1,
  })
  aceptation: boolean;
  
  @hasOne(() => Proyects)
  proyects?: Proyects;


  constructor(data?: Partial<Forms>) {
    super(data);
  }
}

export interface FormsRelations {
  proyects?: ProyectsWithRelations;
}

export type FormsWithRelations = Forms & FormsRelations;
