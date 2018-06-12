import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   email: string;
   password: string;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.register(this.email, this.password);
    this.route.navigate(['/login']);
  }
}
