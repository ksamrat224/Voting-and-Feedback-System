import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePollOptionDto } from './dto/create-poll-option.dto';
import { UpdatePollOptionDto } from './dto/update-poll-option.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PollOptionsService {
  constructor(private readonly prisma: PrismaClient) {}
  async create(createPollOptionDto: CreatePollOptionDto) {
    return this.prisma.pollOption.create({
      data: createPollOptionDto,
    });
  }

  async findAll() {
    return this.prisma.pollOption.findMany();
  }

  async findOne(id: number) {
    const pollOption = await this.prisma.pollOption.findUnique({
      where: { id },
    });
    if (!pollOption) {
      throw new NotFoundException('Poll option not found');
    }
    return pollOption;
  }

  update(id: number, updatePollOptionDto: UpdatePollOptionDto) {
    return `This action updates a #${id} pollOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollOption`;
  }
}
