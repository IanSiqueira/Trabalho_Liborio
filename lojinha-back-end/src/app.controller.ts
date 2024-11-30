import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products/products.service'; // Importando o ProductsService

@Controller() // Controlador principal (raiz)
export class AppController {
  constructor(private readonly productsService: ProductsService) {}

  // Método para pegar todos os produtos
  @Get('products') // Define o caminho para "/products"
  getAllProducts() {
    return this.productsService.getProducts(); // Chama o serviço para pegar os produtos
  }
}
