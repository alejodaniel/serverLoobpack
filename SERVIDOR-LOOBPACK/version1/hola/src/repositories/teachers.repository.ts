import {DefaultCrudRepository} from '@loopback/repository';
import {Teachers, TeachersRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TeachersRepository extends DefaultCrudRepository<
  Teachers,
  typeof Teachers.prototype.id,
  TeachersRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Teachers, dataSource);
  }
}
