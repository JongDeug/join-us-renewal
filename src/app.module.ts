import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env['DB_PORT']),
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_DATABASE'],
      entities: [],
      // 개발할 때만 true, 실제 프로덕션은 false
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
