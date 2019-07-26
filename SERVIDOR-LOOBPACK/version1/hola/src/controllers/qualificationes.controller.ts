import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Qualificationes} from '../models';
import {QualificationesRepository} from '../repositories';

export class QualificationesController {
  constructor(
    @repository(QualificationesRepository)
    public qualificationesRepository : QualificationesRepository,
  ) {}

  @post('/qualificationes', {
    responses: {
      '200': {
        description: 'Qualificationes model instance',
        content: {'application/json': {schema: {'x-ts-type': Qualificationes}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qualificationes, {exclude: ['id']}),
        },
      },
    })
    qualificationes: Omit<Qualificationes, 'id'>,
  ): Promise<Qualificationes> {
    return await this.qualificationesRepository.create(qualificationes);
  }

  @get('/qualificationes/count', {
    responses: {
      '200': {
        description: 'Qualificationes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Qualificationes)) where?: Where<Qualificationes>,
  ): Promise<Count> {
    return await this.qualificationesRepository.count(where);
  }

  @get('/qualificationes', {
    responses: {
      '200': {
        description: 'Array of Qualificationes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Qualificationes}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Qualificationes)) filter?: Filter<Qualificationes>,
  ): Promise<Qualificationes[]> {
    return await this.qualificationesRepository.find(filter);
  }

  @patch('/qualificationes', {
    responses: {
      '200': {
        description: 'Qualificationes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qualificationes, {partial: true}),
        },
      },
    })
    qualificationes: Qualificationes,
    @param.query.object('where', getWhereSchemaFor(Qualificationes)) where?: Where<Qualificationes>,
  ): Promise<Count> {
    return await this.qualificationesRepository.updateAll(qualificationes, where);
  }

  @get('/qualificationes/{id}', {
    responses: {
      '200': {
        description: 'Qualificationes model instance',
        content: {'application/json': {schema: {'x-ts-type': Qualificationes}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Qualificationes> {
    return await this.qualificationesRepository.findById(id);
  }

  @patch('/qualificationes/{id}', {
    responses: {
      '204': {
        description: 'Qualificationes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Qualificationes, {partial: true}),
        },
      },
    })
    qualificationes: Qualificationes,
  ): Promise<void> {
    await this.qualificationesRepository.updateById(id, qualificationes);
  }

  @put('/qualificationes/{id}', {
    responses: {
      '204': {
        description: 'Qualificationes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() qualificationes: Qualificationes,
  ): Promise<void> {
    await this.qualificationesRepository.replaceById(id, qualificationes);
  }

  @del('/qualificationes/{id}', {
    responses: {
      '204': {
        description: 'Qualificationes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.qualificationesRepository.deleteById(id);
  }
}
