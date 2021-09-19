import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];


  //add messages
  add(msg: string) {
    this.messages.push(msg);
  }

  //clear all mesasges
  clear() {
    this.messages = [];
  }
}