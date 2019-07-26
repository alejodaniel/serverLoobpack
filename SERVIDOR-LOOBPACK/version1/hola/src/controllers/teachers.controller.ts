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
import {Teachers} from '../models';
import {TeachersRepository} from '../repositories';

export class TeachersController {
  constructor(
    @repository(TeachersRepository)
    public teachersRepository : TeachersRepository,
  ) {}

  @post('/teachers', {
    responses: {
      '200': {
        description: 'Teachers model instance',
        content: {'application/json': {schema: {'x-ts-type': Teachers}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teachers, {exclude: ['id']}),
        },
      },
    })
    teachers: Omit<Teachers, 'id'>,
  ): Promise<Teachers> {
    return await this.teachersRepository.create(teachers);
  }

  @get('/teachers/count', {
    responses: {
      '200': {
        description: 'Teachers model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Teachers)) where?: Where<Teachers>,
  ): Promise<Count> {
    return await this.teachersRepository.count(where);
  }

  @get('/teachers', {
    responses: {
      '200': {
        description: 'Array of Teachers model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Teachers}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Teachers)) filter?: Filter<Teachers>,
  ): Promise<Teachers[]> {
    return await this.teachersRepository.find(filter);
  }

  @patch('/teachers', {
    responses: {
      '200': {
        description: 'Teachers PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teachers, {partial: true}),
        },
      },
    })
    teachers: Teachers,
    @param.query.object('where', getWhereSchemaFor(Teachers)) where?: Where<Teachers>,
  ): Promise<Count> {
    return await this.teachersRepository.updateAll(teachers, where);
  }

  @get('/teachers/{id}', {
    responses: {
      '200': {
        description: 'Teachers model instance',
        content: {'application/json': {schema: {'x-ts-type': Teachers}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Teachers> {
    return await this.teachersRepository.findById(id);
  }

  @patch('/teachers/{id}', {
    responses: {
      '204': {
        description: 'Teachers PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Teachers, {partial: true}),
        },
      },
    })
    teachers: Teachers,
  ): Promise<void> {
    await this.teachersRepository.updateById(id, teachers);
  }

  @put('/teachers/{id}', {
    responses: {
      '204': {
        description: 'Teachers PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() teachers: Teachers,
  ): Promise<void> {
    await this.teachersRepository.replaceById(id, teachers);
  }

  @del('/teachers/{id}', {
    responses: {
      '204': {
        description: 'Teachers DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.teachersRepository.deleteById(id);
  }
}
