import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { CustomerReviewsService } from './customerReviews.service';
import { CustomerReview } from './customerReviews.entity';

@Controller('customer-reviews')
export class CustomerReviewsController {
  constructor(private readonly customerReviewsService: CustomerReviewsService) {}

  @Get()
  getCustomerReviews() {
    return this.customerReviewsService.findAll();
  }

  @Post()
  addCustomerReview(@Body() review: Partial<CustomerReview>) {
    return this.customerReviewsService.create(review);
  }

  @Patch(':id')
  updateCustomerReview(@Param('id') id: string, @Body() review: Partial<CustomerReview>) {
    return this.customerReviewsService.update(Number(id), review);
  }

  @Delete(':id')
  removeCustomerReview(@Param('id') id: string) {
    return this.customerReviewsService.remove(Number(id));
  }
}
