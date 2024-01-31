import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../common/entity/base.entity';
import { UsersModel } from '../../users/entity/users.entity';
import { CommentsModel } from '../comments/entity/comments.entity';

@Entity()
export class PostsModel extends BaseModel {

  @ManyToOne(() => UsersModel, (user) => user.posts)
  author: UsersModel;

  title: string;

  content: string;

  // image

  @OneToMany(() => CommentsModel, (comment) => comment.post)
  comments: CommentsModel[];

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}