import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  isUserLogged(): boolean {
    if (sessionStorage.getItem('currentUser') != null) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    sessionStorage.removeItem('currentUser');
    

  }

=======
>>>>>>> 9d5619f5451d873a05fd1bbd283e0d8ff48b8fc8
}
