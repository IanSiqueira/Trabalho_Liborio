import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';  // Importe a entidade Product
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),  // Registra o repositório da entidade Product
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
