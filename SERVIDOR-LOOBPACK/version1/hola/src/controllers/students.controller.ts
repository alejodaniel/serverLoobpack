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
import {Students} from '../models';
import {StudentsRepository} from '../repositories';

export class StudentsController {
  constructor(
    @repository(StudentsRepository)
    public studentsRepository : StudentsRepository,
  ) {}

  @post('/students', {
    responses: {
      '200': {
        description: 'Students model instance',
        content: {'application/json': {schema: {'x-ts-type': Students}}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Students, {exclude: ['id']}),
        },
      },
    })
    students: Omit<Students, 'id'>,
  ): Promise<Students> {
    return await this.studentsRepository.create(students);
  }

  @get('/students/count', {
    responses: {
      '200': {
        description: 'Students model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Students)) where?: Where<Students>,
  ): Promise<Count> {
    return await this.studentsRepository.count(where);
  }

  @get('/students', {
    responses: {
      '200': {
        description: 'Array of Students model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Students}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Students)) filter?: Filter<Students>,
  ): Promise<Students[]> {
    return await this.studentsRepository.find(filter);
  }

  @patch('/students', {
    responses: {
      '200': {
        description: 'Students PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Students, {partial: true}),
        },
      },
    })
    students: Students,
    @param.query.object('where', getWhereSchemaFor(Students)) where?: Where<Students>,
  ): Promise<Count> {
    return await this.studentsRepository.updateAll(students, where);
  }

  @get('/students/{id}', {
    responses: {
      '200': {
        description: 'Students model instance',
        content: {'application/json': {schema: {'x-ts-type': Students}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Students> {
    return await this.studentsRepository.findById(id);
  }

  @patch('/students/{id}', {
    responses: {
      '204': {
        description: 'Students PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Students, {partial: true}),
        },
      },
    })
    students: Students,
  ): Promise<void> {
    await this.studentsRepository.updateById(id, students);
  }

  @put('/students/{id}', {
    responses: {
      '204': {
        description: 'Students PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() students: Students,
  ): Promise<void> {
    await this.studentsRepository.replaceById(id, students);
  }

  @del('/students/{id}', {
    responses: {
      '204': {
        description: 'Students DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.studentsRepository.deleteById(id);
  }
}
