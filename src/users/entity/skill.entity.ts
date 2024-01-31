import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { ProfileModel } from './profile.entity';

@Entity()
export class SkillModel {
  @PrimaryColumn()
  name: string;

  @ManyToMany(() => ProfileModel, (profile) => profile.skills)
  profiles: ProfileModel[];
}