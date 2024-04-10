import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AiToolsComponent } from "./ai-tools/ai-tools.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterLink, AiToolsComponent]
})
export class DashboardComponent {

  isDark: boolean = true;

  logout() {
    throw new Error('Method not implemented.');
  }

  modeChange() {
    this.isDark = !this.isDark
  }


}
