import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { IMessage } from 'src/app/shared/models/message';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponentComponent implements OnChanges {

  @Input() message: IMessage;
  @Output() messageReceived: EventEmitter<IMessage>;

  ngOnChanges(changes: SimpleChanges): void {
    this.messageReceived.emit({
      data: `SomeComponent1Component: ${this.message.data}`
    });
  }

  constructor() {
    this.messageReceived = new EventEmitter<IMessage>();
  }
}
