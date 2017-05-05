import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeLayoutsPage } from './see-layouts';

@NgModule({
  declarations: [
    SeeLayoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeeLayoutsPage),
  ],
  exports: [
    SeeLayoutsPage
  ]
})
export class SeeLayoutsPageModule {}
