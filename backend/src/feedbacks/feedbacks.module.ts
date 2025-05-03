import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksService,PrismaClient],
})
export class FeedbacksModule {}
