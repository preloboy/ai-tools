import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  // isLoggedIn: any = false;
  email: string = '';
  password: string = '';

  constructor(private appService: AppService, private router:Router) { }

  ngOnInit() {
    // this.isLoggedIn = this.appService.session();
  }

  login(email: string, password: string) {
    this.appService.login(email, password)
      .then((loggedInUser) => {
        // console.log("Login successful!", loggedInUser);
        sessionStorage.setItem('token', JSON.stringify(loggedInUser));
        this.router.navigate(['dashboard']); // Redirect to dashboard route
      }).catch((error) => {
        console.error("Login error:", error);
      })
  }
}

