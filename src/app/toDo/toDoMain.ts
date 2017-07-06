import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chats } from 'api/collections/chats';
import { Messages } from 'api/collections/messages';
import * as moment from 'moment';


 
@Component({
  selector: 'toDoMain',
  templateUrl: 'toDoMain.html'
})
export class toDoMain implements OnInit{

chats;

  constructor() {
    }

  ngOnInit() {

    this.chats = Chats
      .find({}).zone();


/*

      .mergeMap((chats: any) =>
        Observable.combineLatest(
          ...chats.map((chat: any) =>
            Messages
              .find({chatId: chat._id})
              .startWith(null)
              .map(messages => {
                if (messages) chat.lastMessage = messages[0];
                return chat;
              })
          )
        )
      ).zone();*/

      /*
    this.chats = Chats
      .find({})
      .mergeMap((chats: any) =>
        Observable.combineLatest(
          ...chats.map((chat: any) =>
            Messages
              .find({chatId: chat._id})
              .startWith(null)
              .map(messages => {
                if (messages) chat.lastMessage = messages[0];
                return chat;
              })
          )
        )
      ).zone();*/

  }

 removeChat(chat: any): void {
    Chats.remove({_id: chat._id}).subscribe(() => {
    });
  }

}