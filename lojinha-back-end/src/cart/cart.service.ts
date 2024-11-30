import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartRepository: Repository<CartItem>,
  ) {}

  // Adicionar um item ao carrinho
  async addItem(item: CartItem): Promise<CartItem[]> {
    const existingItem = await this.cartRepository.findOneBy({ productId: item.productId });

    if (existingItem) {
      existingItem.quantity += item.quantity || 1;
      existingItem.totalPrice = existingItem.price * existingItem.quantity;
      await this.cartRepository.save(existingItem);
    } else {
      const newItem = this.cartRepository.create({
        ...item,
        totalPrice: item.price * (item.quantity || 1),
      });
      await this.cartRepository.save(newItem);
    }

    return this.cartRepository.find(); // Retorna todos os itens do carrinho
  }
}
