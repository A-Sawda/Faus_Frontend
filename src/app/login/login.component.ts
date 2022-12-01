import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur = 0;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.signIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      console.log("mach",this.authService.users);
      this.erreur = 1;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.code === "Enter") {
      this.onLoggedin();
    }
  }

}
