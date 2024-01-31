import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommonModule } from './common/common.module';
import { ReportsModule } from './reports/reports.module';
import { TeamsModule } from './teams/teams.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './posts/comments/comments.module';
import { UsersModel } from './users/entity/users.entity';
import { ConfigModule } from '@nestjs/config';
import { ProfileModel } from './users/entity/profile.entity';
import { SkillModel } from './users/entity/skill.entity';
import { PostsModel } from './posts/entity/posts.entity';
import { CommentsModel } from './posts/comments/entity/comments.entity';
import { FollowsModel } from './users/entity/follows.entity';

@Module({
  imports: [
    // ENV
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // TypeORM
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DB_HOST'],
      port: parseInt(process.env['DB_PORT']),
      username: process.env['DB_USERNAME'],
      password: process.env['DB_PASSWORD'],
      database: process.env['DB_DATABASE'],
      entities: [
        UsersModel,
        ProfileModel,
        SkillModel,
        PostsModel,
        CommentsModel,
        FollowsModel,
      ],
      // 개발할 때만 true, 실제 프로덕션은 false
      synchronize: true,
    }),
    UsersModule,
    PostsModule,
    CommonModule,
    ReportsModule,
    TeamsModule,
    MessagesModule,
    AuthModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
