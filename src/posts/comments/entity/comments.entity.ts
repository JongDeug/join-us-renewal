import { Column, Entity, ManyToOne } from 'typeorm';
import { PostsModel } from '../../entity/posts.entity';
import { BaseModel } from '../../../common/entity/base.entity';
import { UsersModel } from '../../../users/entity/users.entity';

@Entity()
export class CommentsModel extends BaseModel {

  @ManyToOne(() => UsersModel, (user) => user.comments)
  author: UsersModel;

  @ManyToOne(() => PostsModel, (post) => post.comments)
  post: PostsModel;

  @Column()
  content: string;

  @Column()
  likeCount: number;
}