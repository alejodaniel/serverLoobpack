import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Students, StudentsWithRelations, Forms } from '.';
import { FormsWithRelations } from './forms.model';
import { Qualificationes, QualificationesWithRelations } from './qualificationes.model';
import { Teachers, TeachersWithRelations } from './teachers.model';

@model({settings: {}})
export class Proyects extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @belongsTo(() => Students)
  studentsId: number;

  @belongsTo(() => Forms)
 formsId: number;

 @belongsTo(() => Forms)
 qualificaionesId: number;

 @belongsTo(() => Teachers)
 teachersId: number;


  constructor(data?: Partial<Proyects>) {
    super(data);
  }
}

export interface ProyectsRelations {
  students?: StudentsWithRelations;
  forms?: FormsWithRelations;
  qualificationes?: QualificationesWithRelations;
  teacher?: TeachersWithRelations;
}

export type ProyectsWithRelations = Proyects & ProyectsRelations;
