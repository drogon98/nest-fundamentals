import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './app.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'cye',
      database: 'todos',
      entities: [Todo],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Todo]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
