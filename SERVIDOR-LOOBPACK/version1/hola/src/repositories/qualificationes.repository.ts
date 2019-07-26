import {DefaultCrudRepository} from '@loopback/repository';
import {Qualificationes, QualificationesRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QualificationesRepository extends DefaultCrudRepository<
  Qualificationes,
  typeof Qualificationes.prototype.id,
  QualificationesRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Qualificationes, dataSource);
  }
}
