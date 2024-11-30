import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { CustomerReviewsModule } from './customerReviews/customerReviews.module';
import { Product } from './products/product.entity';
import { CartItem } from './cart/cart.entity';
import { CustomerReview } from './customerReviews/customerReviews.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexão com o banco de dados utilizando TypeORM
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, // Carrega a variável do banco de dados
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER, // Carrega o usuário do banco de dados
      password: process.env.DB_PASSWORD, // Carrega a senha do banco de dados
      database: process.env.DB_DATABASE, // Carrega o nome do banco de dados
      entities: [Product, CartItem, CustomerReview], // Adiciona as entidades que utilizam o TypeORM
      synchronize: true, // Define se as tabelas devem ser sincronizadas (cuidado em produção)
    }),

    // Importação dos módulos
    ProductsModule,
    CartModule,
    CustomerReviewsModule,
  ],
})
export class AppModule {}
