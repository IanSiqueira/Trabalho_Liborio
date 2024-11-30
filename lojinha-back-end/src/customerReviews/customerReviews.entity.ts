import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('customer_reviews')
export class CustomerReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column('text')
  feedback: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  name: string;
}

