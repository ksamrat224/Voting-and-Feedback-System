import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class FeedbacksService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createFeedbackDto: CreateFeedbackDto) {
    return this.prisma.feedback.create({
      data: createFeedbackDto,
    });
  }

  findAll() {
    return `This action returns all feedbacks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedback`;
  }

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
