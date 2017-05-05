import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Other } from './other';

@NgModule({
  declarations: [
    Other,
  ],
  imports: [
    IonicPageModule.forChild(Other),
  ],
  exports: [
    Other
  ]
})
export class OtherModule {}
