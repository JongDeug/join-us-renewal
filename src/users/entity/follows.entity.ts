import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../common/entity/base.entity';
import { UsersModel } from './users.entity';

@Entity()
export class FollowsModel extends BaseModel {

  @ManyToOne(() => UsersModel, (user) => user.fromUser)
  fromUser: UsersModel;

  @ManyToOne(() => UsersModel, (user) => user.toUser)
  toUser: UsersModel;

  @Column()
  isConfirmed: boolean;
}