import { Injectable } from '@nestjs/common';
import { Todo } from './app.dto';

@Injectable()
export class AppService {
  todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo() {
    return 'Created todo!';
  }

  updateTodo() {
    return 'Updated todo!';
  }

  deleteTodo() {
    return 'Deleted todo!';
  }
}
