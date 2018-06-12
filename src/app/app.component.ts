<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
=======
import { Component } from '@angular/core';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {


  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }
=======
export class AppComponent {
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
}
