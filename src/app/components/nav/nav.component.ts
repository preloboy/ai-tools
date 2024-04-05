import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  // constructor(private appService: AppService) { }

  @Output() isToggled = new EventEmitter<boolean>();

  toggle() {
    this.isToggled.emit()
    // throw new Error('Method not implemented.');
  }



}
