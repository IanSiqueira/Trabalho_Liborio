import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products') // A tabela 'products' será mapeada no banco de dados
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  categoria: string;
}
