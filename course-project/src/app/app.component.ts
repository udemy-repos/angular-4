import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDbr8iVcH_h-1alvh-2aY8fueIKaSn_g1k',
      authDomain: 'ng-recipe-book-83a52.firebaseapp.com',
    });
  }
}
