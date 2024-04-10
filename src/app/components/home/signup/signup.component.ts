import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../services/app-service/app.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private appService: AppService) { }

  email: string = '';
  password: string = '';
  name: string = '';

  createAccount() {
    this.appService.register(this.email, this.password, this.name);
    console.log("createAccount() Clicked", this.name)
  }

}
