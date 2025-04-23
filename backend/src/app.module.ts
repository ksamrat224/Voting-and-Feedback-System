import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PollsModule } from './polls/polls.module';
import { PolloptionsModule } from './polloptions/polloptions.module';

@Module({
  imports: [UsersModule, PollsModule, PolloptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
