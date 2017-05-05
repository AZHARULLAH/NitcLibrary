import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowedBooksPage } from './borrowed-books';

@NgModule({
  declarations: [
    BorrowedBooksPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowedBooksPage),
  ],
  exports: [
    BorrowedBooksPage
  ]
})
export class BorrowedBooksPageModule {}
