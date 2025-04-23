import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PollsService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createPollDto: CreatePollDto) {
    return this.prisma.poll.create({
      data: createPollDto,
    });
  }

  async findAll() {
    return this.prisma.poll.findMany();
  }

  async findOne(id: number) {
    const poll = await this.prisma.poll.findUnique({
      where: { id },
    });
    if (!poll) {
      throw new NotFoundException('poll not found');
    }
    return poll;
  }

  async update(id: number, updatePollDto: UpdatePollDto) {
    await this.findOne(id);
    return this.prisma.poll.update({
      where: { id },
      data: updatePollDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.poll.delete({
      where: { id },
    });
  }
}
