import {DefaultCrudRepository} from '@loopback/repository';
import {Forms, FormsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FormsRepository extends DefaultCrudRepository<
  Forms,
  typeof Forms.prototype.id,
  FormsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Forms, dataSource);
  }
}
