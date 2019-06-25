import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeFeatureRoutingModule } from './some-feature-routing.module';
import { SomeFeatureComponent } from './some-feature.component';
import { SharedModule } from '../shared/shared.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    SomeFeatureComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
  ],
  imports: [
    CommonModule,
    SomeFeatureRoutingModule,
    SharedModule
  ]
})
export class SomeFeatureModule { }
