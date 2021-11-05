import {MessagesRepo} from "./messages.repository"

export class MessagesService {

messagesRepo: MessagesRepo

constructor(){

    this.messagesRepo = new MessagesRepo();
}

findOne(id: string){

return this.messagesRepo.findOne(id);

}

findAll(id: string){

return this.messagesRepo.findAll();

}


create(content: string){

return this.messagesRepo.createMessage(content);


}


}