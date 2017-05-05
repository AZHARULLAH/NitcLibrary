import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookMap } from './book-map';

@NgModule({
  declarations: [
    BookMap,
  ],
  imports: [
    IonicPageModule.forChild(BookMap),
  ],
  exports: [
    BookMap
  ]
})
export class BookMapModule {}
