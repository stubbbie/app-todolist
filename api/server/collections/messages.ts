import { MongoObservable  } from 'meteor-rxjs';

export const Messages = new MongoObservable.Collection<any>('messages');

