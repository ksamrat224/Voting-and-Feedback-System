import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PollsModule } from './polls/polls.module';
import { PolloptionsModule } from './polloptions/polloptions.module';
import { PollOptionsModule } from './poll-options/poll-options.module';

@Module({
  imports: [UsersModule, PollsModule, PolloptionsModule, PollOptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
