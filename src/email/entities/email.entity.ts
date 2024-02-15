import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('emails')
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

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
