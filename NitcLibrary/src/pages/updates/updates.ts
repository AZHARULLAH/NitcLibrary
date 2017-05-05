import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Updates page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-updates',
	templateUrl: 'updates.html',
})

export class Updates {

	type: string = "news";
	newsList: any;
	booksList: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

		this.newsList = [];
		this.booksList = [];

	}

	showItem(news) {
		
		let confirm = this.alertCtrl.create({
            title: news.title,
            subTitle: news.body,
            message: "Updated on: " + news.datentime,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: () => {
                        console.log('dismiss clicked');
                    }
                }
            ]
        });
        confirm.present()

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Updates');

		var url = "http://minerva.nitc.ac.in/libraryapp/admin/php/get_news.php";

		var headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Credentials', 'true');
		headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
		headers.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");
		let options = new RequestOptions({ headers: headers });

		// Define the loader
		let loading = this.loadingCtrl.create({
			content: 'Loading the books...'
		});

		// Start the loader
		loading.present();

		this.http.get(url, options)
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				this.newsList = res;
			},
			err => {
				console.log("Error is ", JSON.stringify(err));
			});

		var url2 = "http://minerva.nitc.ac.in/libraryapp/admin/php/get_book.php";

		this.http.get(url2, options)
			.map(res => res.json())
			.subscribe(
			res => {
				console.log("Res is ", res);
				this.booksList = res;
				// Close the loader
				loading.dismiss();
			},
			err => {
				console.log("Error is ", JSON.stringify(err));
				// Close the loader
				loading.dismiss();
			});

	}

	expand(dept) {

		if (dept == "ece") {
			dept = "Electronics Engineering";
		}
		if (dept == "eee") {
			dept = "Electrical Engineering";
		}
		if (dept == "coe") {
			dept = "Control Engineering";
		}
		if (dept == "cie") {
			dept = "Civil Engineering";
		}
		if (dept == "arc") {
			dept = "Architechture";
		}
		if (dept == "cse") {
			dept = "Computer Engineering";
		}
		if (dept == "mat") {
			dept = "Mathematics";
		}
		if (dept == "comm") {
			dept = "Communication Engineering";
		}
		if (dept == "phy") {
			dept = "Physics";
		}
		if (dept == "gen") {
			dept = "General";
		}
		if (dept == "auto") {
			dept = "Automobile Engineering";
		}
		if (dept == "mech") {
			dept = "Mechanical Engineering";
		}
		if (dept == "mana") {
			dept = "Management";
		}
		if (dept == "che") {
			dept = "Chemical Engineering";
		}
		if (dept == "manu") {
			dept = "Manufacturing Engineering";
		}
		if (dept == "eco") {
			dept = "Economics";
		}
		if (dept == "chem") {
			dept = "Chemistry";
		}
		if (dept == "bio") {
			dept = "Biotechnology Engineering";
		}
		if (dept == "nano") {
			dept = "Nanotechnology Engineering";
		}
		if (dept == "lit") {
			dept = "Literature";
		}
		if (dept == "geo") {
			dept = "Geography";
		}
		return dept;
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		this.ionViewDidLoad();
		refresher.complete();
	}

}
