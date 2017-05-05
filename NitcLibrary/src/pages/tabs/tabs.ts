import { Component } from '@angular/core';

import { Updates } from '../updates/updates';
import { Search } from '../search/search';
import { Other } from '../other/other';

@Component({
	templateUrl: 'tabs.html'
})

export class TabsPage {

	// tab1Root = Updates;
	// tab2Root = Search;
	tab1Root = Updates;
	tab2Root = Search;
	tab3Root = Other;

	constructor() {

	}
}
