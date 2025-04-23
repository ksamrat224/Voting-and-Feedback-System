import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PolloptionsService } from './polloptions.service';
import { CreatePolloptionDto } from './dto/create-polloption.dto';
import { UpdatePolloptionDto } from './dto/update-polloption.dto';

@Controller('polloptions')
export class PolloptionsController {
  constructor(private readonly polloptionsService: PolloptionsService) {}

  @Post()
  create(@Body() createPolloptionDto: CreatePolloptionDto) {
    return this.polloptionsService.create(createPolloptionDto);
  }

  @Get()
  findAll() {
    return this.polloptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.polloptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePolloptionDto: UpdatePolloptionDto) {
    return this.polloptionsService.update(+id, updatePolloptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.polloptionsService.remove(+id);
  }
}
