import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app-service/app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoggedIn: any = false;
  email: string = '';
  password: string = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.isLoggedIn = this.appService.session();
  }

  // alogin(email: string, password: string) {
  //   this.appService.login(email, password)
  //   console.log("clicked Login", email, password)
  // }
  login(email: string, password: string) {
    this.appService.login(email, password)
      .then((loggedInUser) => {
        // Handle successful login (e.g., redirect to another page)
        console.log("Login successful!", loggedInUser);
        this.isLoggedIn = true; // Update login status
      }).catch((error) => {
        // Handle login errors (e.g., display error message)
        console.error("Login error:", error);
        this.isLoggedIn = false;
      })
  }


}

