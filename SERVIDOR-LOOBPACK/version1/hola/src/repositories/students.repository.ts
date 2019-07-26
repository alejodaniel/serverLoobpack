import {DefaultCrudRepository} from '@loopback/repository';
import {Students, StudentsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StudentsRepository extends DefaultCrudRepository<
  Students,
  typeof Students.prototype.id,
  StudentsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Students, dataSource);
  }
}
