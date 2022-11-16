import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID, InputType } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  pseudo: string;

  @Column()
  @Field()
  created_at: Date;

  @Column()
  @Field()
  updated_at: Date;

  @OneToMany(() => Challenge, 'member')
  @Field(() => [Challenge])
  challenges: Challenge[];
}
