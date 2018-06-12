<<<<<<< HEAD
import { Router } from '@angular/router/';
import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginEntry } from './loginEntry.model';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent implements OnInit {
   email: string;
   password: string;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.email, this.password);
  }
=======
export class LoginComponent {
  reactiveForm: FormGroup;
  loginEntry = new LoginEntry();
  formAlert = 'This field is required.';

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'email': [
        null,
        Validators.compose([Validators.email])
      ],
      'password': [
        null,
        Validators.compose([Validators.required])
      ]
    });
  }

  ngOninit() { }

>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
}
