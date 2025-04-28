import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createVoteDto: CreateVoteDto) {
    return this.prisma.vote.create({
      data: createVoteDto,
    });
  }

  async findAll() {
    return this.prisma.vote.findMany();
  }

  async findOne(id: number) {
    const vote = await this.prisma.vote.findUnique({
      where: { id },
    });
    if (!vote) {
      throw new NotFoundException('vote not found');
    }
    return vote;
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
