import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Output() dataSubmitted: EventEmitter<string[]>;

  private _form: FormGroup;
  public get form(): FormGroup {
    return this._form;
  }

  public get formControls(): FormGroup[] {
    return (<FormArray>this._form.get('items')).controls as FormGroup[];
  }

  private readonly _FORM_FIELDS: FormGroup[];

  constructor(private _formBuilder: FormBuilder) {
    this.dataSubmitted = new EventEmitter();

    this._FORM_FIELDS = [
      this._formBuilder.group({
        field: ['', Validators.required]
      }),
      this._formBuilder.group({
        field: ['', Validators.required]
      })
    ];
  }

  ngOnInit() {

    this._form = this._formBuilder.group({
      items: this._formBuilder.array(this._FORM_FIELDS)
    });
  }

  public getArrayControl(index: string): AbstractControl {
    return (<FormArray>this._form.controls.items).controls[index];
  }

  public onSubmit() {
    const data = [];
    for (let i = 0; i < this._FORM_FIELDS.length; i++) {
      const value = this.getArrayControl(String(i)).value;
      data.push(value);
    }
    this.dataSubmitted.emit(data);
  }
}
