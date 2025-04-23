import { Injectable } from '@nestjs/common';
import { CreatePolloptionDto } from './dto/create-polloption.dto';
import { UpdatePolloptionDto } from './dto/update-polloption.dto';

@Injectable()
export class PolloptionsService {
  create(createPolloptionDto: CreatePolloptionDto) {
    return 'This action adds a new polloption';
  }

  findAll() {
    return `This action returns all polloptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} polloption`;
  }

  update(id: number, updatePolloptionDto: UpdatePolloptionDto) {
    return `This action updates a #${id} polloption`;
  }

  remove(id: number) {
    return `This action removes a #${id} polloption`;
  }
}
