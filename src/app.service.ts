import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './app.entity';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  getTodos(): Promise<Todo[]> {
    return this.todoRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  createTodo(input: CreateTodoDTO) {
    return this.todoRepository.save(input);
  }

  updateTodo(id: number, input: CreateTodoDTO) {
    return this.todoRepository.update(id, input);
  }

  deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
