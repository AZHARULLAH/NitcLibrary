import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Updates } from '../pages/updates/updates';

import { Search } from '../pages/search/search';
import { SearchResults } from '../pages/search-results/search-results';
import { BookMap } from '../pages/book-map/book-map';

import { Other } from '../pages/other/other';
import { TabsPage } from '../pages/tabs/tabs';

import { SeeLayoutsPage } from '../pages/see-layouts/see-layouts';

import { BorrowedBooksPage } from '../pages/borrowed-books/borrowed-books';
import { AddBooks } from '../pages/borrowed-books/addBooks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule, Headers } from '@angular/http';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NativeStorage } from '@ionic-native/native-storage';
import {BLE} from '@ionic-native/ble';
import { Diagnostic } from '@ionic-native/diagnostic';

@NgModule({
  declarations: [
    MyApp,
    Updates,
    Search,
    SearchResults,
    BookMap,
    Other,
    TabsPage,
    SeeLayoutsPage,
    BorrowedBooksPage,
    AddBooks
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Updates,
    Search,
    SearchResults,
    BookMap,
    Other,
    TabsPage,
    SeeLayoutsPage,
    BorrowedBooksPage,
    AddBooks
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    NativeStorage,
    BLE,
    Diagnostic,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
