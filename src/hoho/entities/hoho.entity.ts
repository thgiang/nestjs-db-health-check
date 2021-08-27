import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
@Entity('hoho')
export class Hoho {
  @PrimaryGeneratedColumn()
  id: number;

  @Index('INDEX_UUID', { unique: true })
  @Column()
  uuid: string;
}
