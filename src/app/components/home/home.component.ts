import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { AppService } from '../../services/app-service/app.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavComponent]
})
export class HomeComponent {

    // constructor(private appService: AppService) { }

    isDark: boolean = true;

    modeChange(){
        this.isDark = !this.isDark
    }

}
