import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeFeatureRoutingModule } from './some-feature-routing.module';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SomeFeatureComponent } from './some-feature.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SomeFeatureComponent,
    SomeComponentComponent,
  ],
  imports: [
    CommonModule,
    SomeFeatureRoutingModule,
    SharedModule
  ]
})
export class SomeFeatureModule { }
