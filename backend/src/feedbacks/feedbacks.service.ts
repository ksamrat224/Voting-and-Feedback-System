import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    return this.prisma.feedback.findMany();
  }

 async findOne(id: number) {
 const feedback = await this.prisma.feedback.findUnique({
      where: { id },
    });
    if (!feedback) {
      throw new NotFoundException('Feedback not found');
    }
    return feedback;
}

  update(id: number, updateFeedbackDto: UpdateFeedbackDto) {
    return `This action updates a #${id} feedback`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedback`;
  }
}
