import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient],
})
export class UsersModule {}
