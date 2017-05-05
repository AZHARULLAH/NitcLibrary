import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { NativeStorage } from '@ionic-native/native-storage';

import { AddBooks } from './addBooks';

/**
 * Generated class for the BorrowedBooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-borrowed-books',
	templateUrl: 'borrowed-books.html',
})

export class BorrowedBooksPage {

	borrowedBooks: Array<{ title: string, borrowedDate: Date, dueDate: Date }>;
	result: any;
	userID: string;
	url: string;
	bookslength: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams, public nativeStorage: NativeStorage, public modalCtrl: ModalController) {
		this.borrowedBooks = [];
	}

	addBooksModal() {
		let contactModal = this.modalCtrl.create(AddBooks);
		contactModal.onDidDismiss(book => {
			console.log("Modal closed and got", book);

			if (book['item'] != 'nil') {
				console.log("Still going into this");
				var newItem = {
					title: book['item'].bookTitle,
					borrowedDate: book['item'].borrowedDate,
					dueDate: book['item'].dueDate
				};
				console.log("New Item is ", newItem);
				this.borrowedBooks.push(newItem);
				this.bookslength = true;
				this.nativeStorage.setItem('borrowedBooks', this.borrowedBooks)
					.then(
					error => {
						console.log("Error", error);
					}
					)
			}
			else {
				console.log("Got nothing from modal");
				console.log("Book is", book);
			}

			console.log("Updated array is ", this.borrowedBooks);

		});
		contactModal.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BorrowedBooksPage');

		// this.nativeStorage.clear();

		this.nativeStorage.getItem('borrowedBooks')
			.then(
			data => {
				if(data.length == 0){
					this.bookslength = false;
					this.borrowedBooks = data;
				}
				else{
					this.borrowedBooks = data;
					this.bookslength = true;
				}
				console.log("data in NS isnt null", data);
			},
			error => {
				console.log("Error", error);
				this.bookslength = false;
			}
			);

	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

	deleteBook(book) {

		this.nativeStorage.getItem('borrowedBooks')
			.then(
			data => {
				this.borrowedBooks = data;
				console.log("data in NS isnt null");
			},
			error => {
				console.log("Error", error);
			}
			);

		var index = this.borrowedBooks.indexOf(book);
		this.borrowedBooks.splice(index, 1);

		// this.ionViewDidLoad();

		this.nativeStorage.setItem('borrowedBooks', this.borrowedBooks)
			.then(
			error => {
				console.log("Error", error);
			}
			)

	}

}
