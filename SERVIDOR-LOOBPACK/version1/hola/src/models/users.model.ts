import { Entity, model, property, hasOne } from '@loopback/repository';
import { Teachers, TeachersWithRelations } from './teachers.model';
import { Students, StudentsWithRelations } from '.';



@model({ settings: {} })
export class Users extends Entity {
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
  first_name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;


  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  @property({
    type: 'string',
    required: false,
  })
  phone: string;

 // @property({
   // type: 'string',
    //required: true,
  //})
  //api_token: string;

  @property({
    type: 'string',
    required: true,
  })
  state: string;

  @property({
    type: 'string',
    required: true,
  })
  created_at: string;

  @property({
    type: 'string',
    required: true,
  })
  updated_at: string;

  @hasOne(() => Teachers)
  teachers?: Teachers;

  @hasOne(() => Students)
  students?: Students;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
 teachers?: TeachersWithRelations;
 students?: StudentsWithRelations;
}

export type UsersWithRelations = Users & UsersRelations;
