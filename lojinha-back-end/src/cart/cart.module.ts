import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartItem } from './cart.entity';  // Importando a entidade CartItem

@Module({
  imports: [
    TypeOrmModule.forFeature([CartItem]),  // Registrando o repositório da entidade CartItem
  ],
  controllers: [CartController],  // Controlador responsável pelas rotas
  providers: [CartService],  // Serviço que contém a lógica de negócios
})
export class CartModule {}
