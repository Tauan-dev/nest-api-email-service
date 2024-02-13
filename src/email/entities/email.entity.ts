import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('email')
export class Email {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  sender: string;

  @Column()
  emailToSend: string;

  @Column()
  subject: string;

  @Column()
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;
}
