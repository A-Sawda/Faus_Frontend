import { Component, HostListener, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.user.roles = ['USER'];
    this.authService.signUp(this.user);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.code === "Enter") {
      this.signUp();
    }
  }

}
