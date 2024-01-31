import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from '../../common/entity/base.entity';
import { RolesEnum } from '../const/roles.const';
import { ProfileModel } from './profile.entity';
import { PostsModel } from '../../posts/entity/posts.entity';
import { CommentsModel } from '../../posts/comments/entity/comments.entity';
import { FollowsModel } from './follows.entity';

@Entity()
export class UsersModel extends BaseModel {
  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column()
  role: RolesEnum;

  @OneToOne(() => ProfileModel, (profile) => profile.users)
  profile: ProfileModel;

  @OneToMany(() => PostsModel, (post) => post.author)
  posts: PostsModel[];

  // images
  // messages

  @OneToMany(() => CommentsModel, (comment) => comment.author)
  comments: CommentsModel[];

  // 팔로우를 요청하는 사람
  @OneToMany(() => FollowsModel, (fm) => fm.fromUser)
  fromUser: FollowsModel[];

  // 요청에 의해 관계가 생성되는 사람
  @OneToMany(() => FollowsModel, (fm) => fm.toUser)
  toUser: FollowsModel[];

  @Column()
  followerCount: number;

  @Column()
  followingCount: number;
}