import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from './cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addItem(@Body() item: CartItem): Promise<CartItem[]> {
    // Verifique se o item é um objeto do tipo CartItem
    if (!item.productId || !item.price || !item.quantity) {
      throw new Error('Campos obrigatórios: productId, price e quantity');
    }

    return this.cartService.addItem(item); // Chama o método do serviço para adicionar o item
  }
}
