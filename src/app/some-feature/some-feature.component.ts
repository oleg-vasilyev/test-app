import { Component, OnInit } from '@angular/core';
import { IMessage } from '../shared/models/message';

@Component({
  selector: 'app-some-feature',
  templateUrl: './some-feature.component.html',
  styleUrls: ['./some-feature.component.scss']
})
export class SomeFeatureComponent implements OnInit {

  private _message: IMessage;
  public get message(): IMessage {
    return this._message;
  }

  constructor() { }

  ngOnInit() {
    this._message = {
      data: null
    } as IMessage;
  }

  public onSendMessage(): void {
    this._message = {
      data: 'hello from parent'
    } as IMessage;
  }

  public onMessageReceived(message: IMessage): void {
    console.log(message);
  }
}
