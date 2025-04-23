import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  controllers: [PollsController],
  providers: [PollsService,PrismaClient],
})
export class PollsModule {}
