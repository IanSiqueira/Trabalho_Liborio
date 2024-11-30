import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerReview } from './customerReviews.entity';

@Injectable()
export class CustomerReviewsService {
  constructor(
    @InjectRepository(CustomerReview)
    private readonly customerReviewsRepository: Repository<CustomerReview>,
  ) {}

  // Buscar todas as avaliações
  async findAll(): Promise<CustomerReview[]> {
    return this.customerReviewsRepository.find();
  }

  // Criar uma nova avaliação
  async create(data: Partial<CustomerReview>): Promise<CustomerReview> {
    const { rating, feedback, name } = data;

    if (!rating || !feedback || !name) {
      throw new Error('Os campos rating, feedback e name são obrigatórios.');
    }

    const newReview = this.customerReviewsRepository.create({ rating, feedback, name });
    return this.customerReviewsRepository.save(newReview);
  }

  // Atualizar uma avaliação existente
  async update(id: number, data: Partial<CustomerReview>): Promise<CustomerReview> {
    const review = await this.customerReviewsRepository.findOneBy({ id });

    if (!review) {
      throw new NotFoundException(`Avaliação com ID ${id} não encontrada.`);
    }

    const updatedReview = Object.assign(review, data);
    return this.customerReviewsRepository.save(updatedReview);
  }

  // Remover uma avaliação
  async remove(id: number): Promise<void> {
    const review = await this.customerReviewsRepository.findOneBy({ id });

    if (!review) {
      throw new NotFoundException(`Avaliação com ID ${id} não encontrada.`);
    }

    await this.customerReviewsRepository.remove(review);
  }
}
