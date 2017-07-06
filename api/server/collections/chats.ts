import { MongoObservable } from 'meteor-rxjs';
 
export const Chats = new MongoObservable.Collection<any>('chats');
