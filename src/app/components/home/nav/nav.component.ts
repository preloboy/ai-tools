import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, RouterLink],
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
