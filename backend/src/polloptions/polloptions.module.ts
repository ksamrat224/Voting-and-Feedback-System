import { Module } from '@nestjs/common';
import { PolloptionsService } from './polloptions.service';
import { PolloptionsController } from './polloptions.controller';

@Module({
  controllers: [PolloptionsController],
  providers: [PolloptionsService],
})
export class PolloptionsModule {}
