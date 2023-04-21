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
import { CreateTodoDTO, Todo } from './app.dto';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.appService.getTodos();
  }

  @Post()
  async createTodo(@Body() payload: CreateTodoDTO): Promise<string> {
    console.log('payload', payload);
    return this.appService.createTodo();
  }

  @Put(':id/:name')
  @HttpCode(201)
  async updateTodo(
    @Param('id') id: string,
    @Param('name') name: string,
  ): Promise<string> {
    console.log(id);
    console.log(name);
    return this.appService.updateTodo();
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTodo(): Promise<string> {
    return this.appService.deleteTodo();
  }
}
