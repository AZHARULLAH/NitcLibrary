import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SeeLayoutsPage } from '../see-layouts/see-layouts';
import { BorrowedBooksPage } from '../borrowed-books/borrowed-books';

/**
 * Generated class for the Other page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-other',
	templateUrl: 'other.html',
})

export class Other {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Other');
	}

	layoutsPage() {
		this.navCtrl.push(SeeLayoutsPage);
	}

	borrowedBooksPage() {
		this.navCtrl.push(BorrowedBooksPage);
	}

}
