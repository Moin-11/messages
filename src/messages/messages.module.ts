import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepo } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepo]
})
export class MessagesModule {}
