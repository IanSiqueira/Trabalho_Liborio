import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)  // Certifique-se de que está injetando corretamente o repositório Product
    private readonly productRepository: Repository<Product>,
  ) {}

  // Função para buscar todos os produtos
  async getProducts(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Função para criar um novo produto
  async createProduct(productData: { name: string; price: number; imageUrl?: string }): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return await this.productRepository.save(newProduct);
  }

  // Função para atualizar um produto
  async updateProduct(id: number, updatedProduct: any): Promise<Product> {
    await this.productRepository.update(id, updatedProduct);
    return this.productRepository.findOneBy({ id });
  }

  // Função para deletar um produto
  async deleteProduct(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
