import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('cart') // Nome da tabela no banco de dados
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number; // Identificador único do item no carrinho

  @Column()
  productId: number; // ID do produto associado ao item no carrinho

  @Column('int')
  quantity: number; // Quantidade do produto no carrinho

  @Column('decimal', { precision: 10, scale: 2 })
  price: number; // Preço unitário do produto

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number; // Preço total (quantidade * preço unitário)

  @CreateDateColumn()
  createdAt: Date; // Data e hora de criação do item no carrinho
}
