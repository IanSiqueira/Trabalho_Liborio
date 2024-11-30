import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerReviewsController } from './customerReviews.controller';
import { CustomerReviewsService } from './customerReviews.service';
import { CustomerReview } from './customerReviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerReview])],
  controllers: [CustomerReviewsController],
  providers: [CustomerReviewsService],
})
export class CustomerReviewsModule {}
