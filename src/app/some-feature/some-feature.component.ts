import { Component, OnInit } from '@angular/core';
import { FormDataItem } from '../shared/models/form-data-item';

@Component({
  selector: 'app-some-feature',
  templateUrl: './some-feature.component.html',
  styleUrls: ['./some-feature.component.scss']
})
export class SomeFeatureComponent implements OnInit {

  private _isFirstComponentClicked: boolean;
  public get isFirstComponentClicked(): boolean {
    return this._isFirstComponentClicked;
  }

  private _thirdComponentData: FormDataItem[];
  public get thirdComponentData(): FormDataItem[] {
    return this._thirdComponentData;
  }

  constructor() { }

  ngOnInit() {
    this._isFirstComponentClicked = false;
  }

  public onFirstComponentClicked(): void {
    this._isFirstComponentClicked = true;
  }

  public onDataFromSecondComponentSubmitted(data: FormDataItem[]) {
    this._thirdComponentData = data;
  }
}
