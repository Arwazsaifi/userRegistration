import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user: User;
}
