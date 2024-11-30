import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    if (!createProductDto.name || !createProductDto.price) {
      throw new BadRequestException('O nome e o preço são obrigatórios.');
    }
    return this.productsService.createProduct(createProductDto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updatedProduct: CreateProductDto,
  ) {
    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      throw new BadRequestException('ID inválido.');
    }
    return await this.productsService.updateProduct(productId, updatedProduct);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      throw new BadRequestException('ID inválido.');
    }
    await this.productsService.deleteProduct(productId);
    return { message: 'Produto deletado com sucesso' };
  }
}
