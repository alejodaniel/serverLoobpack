import {Entity, model, property, hasOne} from '@loopback/repository';
import { Proyects } from '.';
import { ProyectsWithRelations } from './proyects.model';

@model({settings: {}})
export class Qualificationes extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  note1: number;

  @property({
    type: 'number',
    required: true,
  })
  note2: number;

  @property({
    type: 'number',
    required: true,
  })
  note3: number;

  @property({
    type: 'number',
    required: true,
  })
  noteEnd: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @hasOne(() => Proyects)
  proyects?: Proyects;

  constructor(data?: Partial<Qualificationes>) {
    super(data);
  }
}

export interface QualificationesRelations {
  
  proyects?: ProyectsWithRelations;
}

export type QualificationesWithRelations = Qualificationes & QualificationesRelations;
