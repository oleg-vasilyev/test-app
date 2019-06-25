import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Output() clicked;

  constructor() {
    this.clicked = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  public onClick(): void {
    this.clicked.emit();
  }

}
