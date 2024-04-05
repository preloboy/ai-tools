import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app-service/app.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'ai-tools';

}
