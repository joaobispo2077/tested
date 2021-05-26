import { IMessaging } from '../classes/interfaces/messaging';

export class Messaging implements IMessaging {
  send(message: string): void {
    console.log('Sent message: ', message);
  }
}
