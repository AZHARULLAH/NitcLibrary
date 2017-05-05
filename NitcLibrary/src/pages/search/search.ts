import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchResults } from '../../pages/search-results/search-results';

/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-search',
	templateUrl: 'search.html',
})

export class Search {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Search');
	}

	getSearchQuery(searchQuery){
		console.log(searchQuery);
		if(!searchQuery){
			alert("Please enter a valid search query");
		}
		var searchInput = searchQuery.split(' ').join('+');
		this.navCtrl.push(SearchResults, {
			searchQuery: searchInput
		});
	}

}
