import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private appService: AppService) { }

  // loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  createAccount() {
    this.appService.register(this.email, this.password, this.name);
    console.log("createAccount() Clicked", this.name)
  }

}
