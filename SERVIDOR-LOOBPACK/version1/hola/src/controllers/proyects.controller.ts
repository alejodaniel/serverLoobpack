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
import {Proyects} from '../models';
import {ProyectsRepository} from '../repositories';

export class ProyectsController {
  constructor(
    @repository(ProyectsRepository)
    public proyectsRepository : ProyectsRepository,
  ) {}

  @post('/proyects', {
    responses: {
      '200': {
        description: 'Proyects model instance',
        content: {'application/json': {schema: {'x-ts-type': Proyects}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyects, {exclude: ['id']}),
        },
      },
    })
    proyects: Omit<Proyects, 'id'>,
  ): Promise<Proyects> {
    return await this.proyectsRepository.create(proyects);
  }

  @get('/proyects/count', {
    responses: {
      '200': {
        description: 'Proyects model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Proyects)) where?: Where<Proyects>,
  ): Promise<Count> {
    return await this.proyectsRepository.count(where);
  }

  @get('/proyects', {
    responses: {
      '200': {
        description: 'Array of Proyects model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Proyects}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Proyects)) filter?: Filter<Proyects>,
  ): Promise<Proyects[]> {
    return await this.proyectsRepository.find(filter);
  }

  @patch('/proyects', {
    responses: {
      '200': {
        description: 'Proyects PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyects, {partial: true}),
        },
      },
    })
    proyects: Proyects,
    @param.query.object('where', getWhereSchemaFor(Proyects)) where?: Where<Proyects>,
  ): Promise<Count> {
    return await this.proyectsRepository.updateAll(proyects, where);
  }

  @get('/proyects/{id}', {
    responses: {
      '200': {
        description: 'Proyects model instance',
        content: {'application/json': {schema: {'x-ts-type': Proyects}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Proyects> {
    return await this.proyectsRepository.findById(id);
  }

  @patch('/proyects/{id}', {
    responses: {
      '204': {
        description: 'Proyects PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proyects, {partial: true}),
        },
      },
    })
    proyects: Proyects,
  ): Promise<void> {
    await this.proyectsRepository.updateById(id, proyects);
  }

  @put('/proyects/{id}', {
    responses: {
      '204': {
        description: 'Proyects PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proyects: Proyects,
  ): Promise<void> {
    await this.proyectsRepository.replaceById(id, proyects);
  }

  @del('/proyects/{id}', {
    responses: {
      '204': {
        description: 'Proyects DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proyectsRepository.deleteById(id);
  }
}
