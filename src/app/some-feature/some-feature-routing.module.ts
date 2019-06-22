import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeFeatureComponent } from './some-feature.component';

const routes: Routes = [
  {
    path: '',
    component: SomeFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SomeFeatureRoutingModule { }
