import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index } from 'typeorm';

@Entity()
export class Word extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Index({ fulltext: true })
  @Column()
  word: string;
}
