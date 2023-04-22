import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpCode,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDTO } from './app.dto';
import { Todo } from './app.entity';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.appService.getTodos();
  }

  @Post()
  async createTodo(@Body() payload: CreateTodoDTO) {
    return this.appService.createTodo(payload);
  }

  @Put(':id')
  @HttpCode(201)
  async updateTodo(@Param('id') id: string, @Body() payload: CreateTodoDTO) {
    return this.appService.updateTodo(parseInt(id), payload);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(parseInt(id));
  }
}
