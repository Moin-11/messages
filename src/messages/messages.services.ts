
import {Injectable} from "@nestjs/common"
import { CreateMessageDto } from "./dtos/create-message.dto";
import {MessagesRepo} from "./messages.repository"


@Injectable()
export class MessagesService {


constructor(public messagesRepo: MessagesRepo){

}

findOne(id: string){

return this.messagesRepo.findOne(id);

}

findAll(){

return this.messagesRepo.findAll();

}


create(content: string | CreateMessageDto){

return this.messagesRepo.createMessage(content);


}


}