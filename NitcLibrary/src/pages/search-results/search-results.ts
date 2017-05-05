import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SearchResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-search-results',
	templateUrl: 'search-results.html',
})

export class SearchResults {

	searchQuery: any;
	searchResults: any;
	resultsLength: any = true;
	baseURL: string = "http://minerva.nitc.ac.in/libraryapp/liblayouts/";
	completeURL: string;
	selectedRack: string = "";
	selectedPage: number = -1;

constructor(public navCtrl: NavController, private navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public iab: InAppBrowser) {

	this.selectedPage = -1;
	this.selectedRack = "";

}

ionViewDidLoad() {
	console.log('ionViewDidLoad SearchResults');
	this.searchQuery = this.navParams.get('searchQuery');
	console.log("SearchQuery in results page", this.searchQuery);

	var url = "http://minerva.nitc.ac.in/libraryapp/search/?q=" + this.searchQuery;
	// var url = "http://192.168.40.187:5000/" + this.searchQuery;
	console.log("$$$$$$URL is", url);
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
			// console.log("Res is ", res);
			if (res.length == 0) {
				console.log("Search result is null");
				// this.Search = [];
				this.resultsLength = false;
				// Close the loader
				loading.dismiss();
			}
			else if (!res) {
				console.log("Search result is null");
				// this.Search = [];
				this.resultsLength = false;
				// Close the loader
				loading.dismiss();
			}
			else {
				console.log("Search result is not null");
				console.log(res);
				this.searchResults = res;
				this.resultsLength = true;
				// Close the loader
				loading.dismiss();
			}
		});
}

showMap(book) {

	console.log("called showMap with", book.bookRack);

	this.selectedPage = -1;
	this.selectedRack = "";

	var page1Racks = [
		{ no: '1', id1: '621.3', id2: '621.3' },
		{ no: '2', id1: '621.301', id2: '621.31239' },
		{ no: '3', id1: '621.3124', id2: '621.3189' },
		{ no: '4', id1: '621.319', id2: '621.31921' },
		{ no: '5', id1: '621.31921', id2: '621.369' },
		{ no: '6', id1: '621.37', id2: '621.384022' },
		{ no: '69', id1: '001.4', id2: '001.64' },
		{ no: '68', id1: '001.64', id2: '001.642' },
		{ no: '67', id1: '001.6424', id2: '003.4' },
		{ no: '66', id1: '003.01', id2: '004.649' },
		{ no: '65', id1: '004.6', id2: '005.299' },
		{ no: '64', id1: '005.2', id2: '005.8' },
		{ no: '63', id1: '005.8', id2: '005.99' },
		{ no: '62', id1: '621.38195', id2: '621.381957' },
		{ no: '61', id1: '621.381958', id2: '621.3829' },
		{ no: '60', id1: '621.3801', id2: '621.38819' },
		{ no: '59', id1: '620.0', id2: '621.3999' },
		{ no: '13', id1: '629.8', id2: '629.836' },
		{ no: '14', id1: '629.836', id2: '569.9' },
		{ no: '15', id1: '551.0', id2: '620.109' },
		{ no: '16', id1: '620.101', id2: '620.11299' },
		{ no: '17', id1: '620.1123', id2: '623.889' },
		{ no: '18', id1: '624.0', id2: '624.151' },
		{ no: '19', id1: '624.15101', id2: '624.171' },
		{ no: '20', id1: '624.171', id2: '624.176' },
		{ no: '21', id1: '624.176', id2: '624.183' },
		{ no: '22', id1: '624.1834', id2: '627.0' },
		{ no: '23', id1: '627.0', id2: '628.09' },
		{ no: '24', id1: '628.1', id2: '690.0' },
		{ no: '25', id1: '690.01', id2: '720.99' },
		{ no: '26', id1: '720.0', id2: '743.99' },
		{ no: '27', id1: '744.0', id2: '799.0' },
		{ no: '46', id1: '510.0', id2: '510.69' },
		{ no: '47', id1: '510.1', id2: '512.0' },
		{ no: '48', id1: '512.0', id2: '515.0' },
		{ no: '49', id1: '515.0', id2: '515.69' },
		{ no: '50', id1: '515.7', id2: '519.2' },
		{ no: '51', id1: '519.2', id2: '519.99' },
		{ no: '52', id1: '530.0', id2: '530.15' },
		{ no: '53', id1: '530.15', id2: '531.59' },
		{ no: '54', id1: '531.38', id2: '533.99' },
		{ no: '55', id1: '533.2', id2: '538.0' },
		{ no: '56', id1: '538.3', id2: '610.0' },
		{ no: '8', id1: '621.38102', id2: '621.3814' },
		{ no: '7', id1: '621.380422', id2: '621.38' },
		{ no: '10', id1: '621.381502', id2: '621.38152' },
		{ no: '9', id1: '621.3815', id2: '621.381502' },
		{ no: '11', id1: '621.381528', id2: '621.38172' },
		{ no: '12', id1: '621.38173', id2: '629.8' },
		{ no: '58', id1: '620.004', id2: '620.4699' },
		{ no: '57', id1: '600.0', id2: '619.99' }
	];

	var page2Racks = [
		{ no: '34', id1: '629.13', id2: '657.0' },
		{ no: '35', id1: '657.0', id2: '658.0' },
		{ no: '36', id1: '658.0', id2: '658.15' },
		{ no: '37', id1: '658.15', id2: '658.2' },
		{ no: '38', id1: '658.201', id2: '658.4034' },
		{ no: '39', id1: '658.4035', id2: '658.5' },
		{ no: '40', id1: '658.5001', id2: '658.8' },
		{ no: '32', id1: '621.81502', id2: '621.989' },
		{ no: '31', id1: '621.7', id2: '621.815' },
		{ no: '30', id1: '621.4361', id2: '621.69' },
		{ no: '29', id1: '621.4021', id2: '621.436' },
		{ no: '28', id1: '621.0', id2: '621.4021' },
		{ no: '41', id1: '658.8', id2: '660.2841' },
		{ no: '42', id1: '660.28', id2: '660.289' },
		{ no: '43', id1: '660.29', id2: '669.0' },
		{ no: '44', id1: '669.01', id2: '671.49' },
		{ no: '45', id1: '671.5', id2: '688.99' },
		{ no: '33', id1: '621.99', id2: '621.139' },
	]

	var page3Racks = [
		{ no: '70', id1: '330.0', id2: '330.99' },
		{ no: '71', id1: '330.99', id2: '338.9' },
		{ no: '72', id1: '339.0', id2: '399.9' },
		{ no: '73', id1: '399.99', id2: '541.0' },
		{ no: '74', id1: '541.0', id2: '543.99' },
		{ no: '75', id1: '544.0', id2: '547.49' },
		{ no: '76', id1: '547.49', id2: '576.99' },
		{ no: '77', id1: '576.0', id2: '649.0' },
		{ no: '78', id1: '800.0', id2: '823.899' },
		{ no: '79', id1: '823.899', id2: '999.0' }
	]

	for (var i = 0; i < page3Racks.length; i++) {
		// console.log(page3Racks[i].id1 + " - " + page3Racks[i].id2)
		// console.log("comparing " + parseFloat(bookRack) + " with " + parseFloat(page3Racks[i].id1) + " and " + parseFloat(page3Racks[i].id2))
		if ((parseFloat(book.bookRack) >= parseFloat(page3Racks[i].id1)) && (parseFloat(book.bookRack) <= parseFloat(page3Racks[i].id2))) {
			console.log("Selected Range is ", (parseFloat(page3Racks[i].id1)) + " - " + parseFloat(page3Racks[i].id2));
			this.selectedPage = 3;
			if ((parseFloat(book.bookRack) - parseFloat(page3Racks[i].id1)) >= (parseFloat(book.bookRack) - parseFloat(page3Racks[i].id2))) {
				this.selectedRack = page3Racks[i].id2;
			}
			else {
				this.selectedRack = page3Racks[i].id1;
			}
			this.completeURL = this.baseURL + "page3/page3.php?rackno=" + this.selectedRack;
			alert("The book is in the first floor right side stack room");
			const browser = this.iab.create(this.completeURL);
			browser.show();
			break;
		}
	}

	console.log("First iteration complete");

	if (this.selectedPage == -1) {

		for (var i = 0; i < page2Racks.length; i++) {
			// console.log(page2Racks[i].id1 + " - " + page2Racks[i].id2)
			// console.log("comparing " + parseFloat(bookRack) + " with " + parseFloat(page2Racks[i].id1) + " and " + parseFloat(page2Racks[i].id2))
			if ((parseFloat(book.bookRack) >= parseFloat(page2Racks[i].id1)) && (parseFloat(book.bookRack) <= parseFloat(page2Racks[i].id2))) {
				console.log("Selected Range is ", (parseFloat(page2Racks[i].id1)) + " - " + parseFloat(page2Racks[i].id2));
				this.selectedPage = 2;
				if ((parseFloat(book.bookRack) - parseFloat(page2Racks[i].id1)) >= (parseFloat(book.bookRack) - parseFloat(page2Racks[i].id2))) {
					this.selectedRack = page2Racks[i].id2;
				}
				else {
					this.selectedRack = page2Racks[i].id1;
				}
				this.completeURL = this.baseURL + "page2/page2.php?rackno=" + this.selectedRack;
				alert("The book is in the first floor left side stack room");
				const browser = this.iab.create(this.completeURL);
				browser.show();
				break;
			}
		}

	}

	console.log("Second iteration complete");

	if (this.selectedPage == -1) {

		for (var i = 0; i < page1Racks.length; i++) {
			// console.log(page1Racks[i].id1 + " - " + page1Racks[i].id2)
			// console.log("comparing " + parseFloat(bookRack) + " with " + parseFloat(page1Racks[i].id1) + " and " + parseFloat(page1Racks[i].id2))
			if ((parseFloat(book.bookRack) >= parseFloat(page1Racks[i].id1)) && (parseFloat(book.bookRack) <= parseFloat(page1Racks[i].id2))) {
				console.log("Selected Range is ", (parseFloat(page1Racks[i].id1)) + " - " + parseFloat(page1Racks[i].id2));
				this.selectedPage = 1;
				if ((parseFloat(book.bookRack) - parseFloat(page1Racks[i].id1)) >= (parseFloat(book.bookRack) - parseFloat(page1Racks[i].id2))) {
					this.selectedRack = page1Racks[i].id2;
				}
				else {
					this.selectedRack = page1Racks[i].id1;
				}
				this.completeURL = this.baseURL + "page1/page1.php?rackno=" + this.selectedRack;
				alert("The book is in the ground floor stack room");
				const browser = this.iab.create(this.completeURL);
				browser.show();
				break;
			}
		}

	}

	console.log("Third iteration complete");

	if (this.selectedPage == -1) {
		alert("Sorry...cannot find the rack");
	}

}

}
