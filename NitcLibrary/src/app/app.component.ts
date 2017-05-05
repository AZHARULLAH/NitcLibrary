import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { BLE } from '@ionic-native/ble';

import { Diagnostic } from '@ionic-native/diagnostic';

import { NativeStorage } from '@ionic-native/native-storage';

import { LocalNotifications } from 'ionic-native';
import * as moment from 'moment';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {

	rootPage: any = TabsPage;
	devices: any;
	notifyTime: any;
	notifications: any[] = [];
	chosenHours: number;
	chosenMinutes: number;
	borrowedBooks: Array<{ title: string, borrowedDate: Date, dueDate: Date }>;
	diff: Date;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public ble: BLE, public diagnostic: Diagnostic, public nativeStorage: NativeStorage) {

		this.devices = [];

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.

			// this.diagnostic.getBluetoothState()
			// 	.then((state) => {
			// 		if (state == this.diagnostic.bluetoothState.POWERED_ON) {
			// 			// do something
			// 		} else {
			// 			// do something else
			// 			this.diagnostic.requestBluetoothAuthorization()
			// 				.then((res) => {
			// 					console.log("Inside res", res);
			// 				},
			// 				(e) => {
			// 					console.log(e);
			// 				}
			// 				)
			// 		}
			// 	})

			// this.diagnostic.requestBluetoothAuthorization()
			// 	.then((res) => {
			// 		console.log("Inside res", res);
			// 	},
			// 	(e) => {
			// 		console.log(e);
			// 	}
			// 	)

			// ble.startScan([]).subscribe(device => {
			// 	console.log("Device is", device);
			// 	this.devices.push(device);
			// });

			// Notification about the due books

			// this.nativeStorage.getItem('borrowedBooks')
			// 	.then(
			// 	data => {
			// 		if (data.length == 0) {
			// 			this.borrowedBooks = data;
			// 		}
			// 		else {
			// 			this.borrowedBooks = data;
			// 			console.log("data in NS isnt null", data);
			// 			for(var i=0; i<data.length; i++){
			// 				var dueDate = data[i].dueDate;
			// 				// var actDueDate = new Date(dueDate.year, dueDate.month, dueDate.day);
			// 				// console.log(actDueDate);
			// 				// var today = new Date();
			// 				// console.log("Today", today);
			// 				// this.diff = today - actDueDate;
			// 				var tzoffset = (new Date(dueDate.year, dueDate.month, dueDate.day)).getTimezoneOffset() * 60000; //offset in milliseconds
			// 				var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-1);
			// 				console.log(localISOTime);

			// 		}
			// 		}
			// 	},
			// 	error => {
			// 		console.log("Error", error);
			// 	}
			// 	);

			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
}
