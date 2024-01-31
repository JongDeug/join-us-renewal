import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { UsersModel } from './users.entity';
import { SkillModel } from './skill.entity';

@Entity()
export class ProfileModel {
  @PrimaryColumn()
  id: number;

  @OneToOne(() => UsersModel, (user) => user.profile)
  @JoinColumn()
  users: UsersModel;

  @Column()
  greetings: string;

  @ManyToMany(() => SkillModel, (skill) => skill.profiles)
  @JoinTable()
  skills: SkillModel[];

  @Column()
  freeForm: string;
}