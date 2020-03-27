import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonesPage } from './phones.page';

const routes: Routes = [
  {
    path: '',
    component: PhonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonesPageRoutingModule {}
