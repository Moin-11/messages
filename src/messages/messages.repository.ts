import {readFile, writeFile} from "fs/promises"

import {Injectable} from "@nestjs/common"
import {CreateMessageDto} from "./dtos/create-message.dto"

@Injectable()
export class MessagesRepo {

async findOne(id: string) {

const contents = await readFile('messages.json', 'utf8');
const messages = JSON.parse(contents);

return messages[id];
}


async findAll() {

    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
    }
    


async createMessage(message: string | CreateMessageDto) {

    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    

    const id = Math.floor(Math.random() * 999);


    messages[id] = {id, content:message};

    await writeFile('messages.json', JSON.stringify(messages))

    }
    
}