import {DefaultCrudRepository} from '@loopback/repository';
import {Proyects, ProyectsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProyectsRepository extends DefaultCrudRepository<
  Proyects,
  typeof Proyects.prototype.id,
  ProyectsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Proyects, dataSource);
  }
}
