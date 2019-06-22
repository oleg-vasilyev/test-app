import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendService } from './backend/backend.service';
import { HttpClientModule } from '@angular/common/http';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

const SHARED_MODULES = [
  ...MATERIAL_MODULES,
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ],
  providers: [
    BackendService
  ]
})
export class SharedModule { }
