<<<<<<< HEAD
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router/';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
   email: string;
   password: string;
  constructor(private authService: AuthService, private route: Router) { }
=======

  constructor() { }
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8

  ngOnInit() {
  }

<<<<<<< HEAD
  onRegister() {
    this.authService.register(this.email, this.password);
    this.route.navigate(['/login']);
  }
=======
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
}
