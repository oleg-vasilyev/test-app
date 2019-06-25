import { Component, OnInit, Input } from '@angular/core';
import { FormDataItem } from 'src/app/shared/models/form-data-item';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  @Input() data: FormDataItem[];

  private _sortedData: FormDataItem[];
  public get sortedData(): FormDataItem[] {
    return this._sortedData;
  }

  constructor() { }

  ngOnInit() {
    this._sortedData = this.data;
  }

  public sortData(sort: Sort): void {
    const values = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this._sortedData = values;
      return;
    }

    this._sortedData = values.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'field': return compare(a.field, b.field, isAsc);
        default: return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

}
