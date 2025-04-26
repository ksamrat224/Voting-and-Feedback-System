import { Module } from '@nestjs/common';
import { PollOptionsService } from './poll-options.service';
import { PollOptionsController } from './poll-options.controller';

@Module({
  controllers: [PollOptionsController],
  providers: [PollOptionsService],
})
export class PollOptionsModule {}
