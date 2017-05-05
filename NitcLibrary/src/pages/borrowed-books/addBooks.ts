import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
    selector: 'addBooks',
    templateUrl: 'addBooks.html'
})

export class AddBooks {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alerCtrl: AlertController, public platform: Platform) {

        platform.registerBackButtonAction(() => {
            console.log("Back hard button clicked!");
            this.dismiss('nil');
        });

    }

    confirmAdd(BookTitle, BorrowedDate, DueDate) {
        // console.log("Got in alert", BookTitle);

        if (BookTitle && BorrowedDate && DueDate) {

            var book = {
                bookTitle: BookTitle,
                borrowedDate: BorrowedDate,
                dueDate: DueDate
            }
            let confirm = this.alerCtrl.create({
                title: 'Add this book to your Borrowed Books?',
                subTitle: BookTitle,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Add',
                        handler: () => {
                            // console.log('Add clicked', book);
                            this.dismiss(book);
                        }
                    }
                ]
            });
            confirm.present()

        }
        else {

            alert("Please enter all the fields");

        }

    }

    public dismiss(item) {
        let data = { item };
        this.viewCtrl.dismiss(data);
    }

}