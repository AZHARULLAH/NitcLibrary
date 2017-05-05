import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SeeLayoutsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-see-layouts',
	templateUrl: 'see-layouts.html',
})

export class SeeLayoutsPage {

	baseURL: string = "http://minerva.nitc.ac.in/libraryapp/liblayouts/";
	completeURL: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public iab: InAppBrowser) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SeeLayoutsPage');
	}

	showLayout(index){

		if(index == 1){
			this.completeURL = this.baseURL + "page1/page1.php?rackno=000";
			const browser = this.iab.create(this.completeURL);
			browser.show();
		}
		else if(index == 2){
			this.completeURL = this.baseURL + "page2/page2.php?rackno=000";
			const browser = this.iab.create(this.completeURL);
			browser.show();
		}
		else if(index == 3){
			this.completeURL = this.baseURL + "page3/page3.php?rackno=000";
			const browser = this.iab.create(this.completeURL);
			browser.show();
		}

	}

}
