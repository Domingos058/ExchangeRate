import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateComponent } from './rate.component';

const routes: Routes = [{ path: '', component: RateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateRoutingModule { }
