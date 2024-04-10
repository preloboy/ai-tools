import { Component } from '@angular/core';
import { DataService } from '../../../services/database/data.service';

@Component({
  selector: 'app-ai-tools',
  standalone: true,
  imports: [],
  templateUrl: './ai-tools.component.html',
  styleUrl: './ai-tools.component.css'
})
export class AiToolsComponent {

  constructor(private dataServices: DataService) { }

  ngOnInit(): void {
    this.listDocuments()
  }

  listDocuments() {
    console.log("loaded")
    this.dataServices.listDocuments('6613cc158018cb4d1b05', '6613cc40e6b7a3af060d')
      .then((response) => {
        console.log(response)
      })
  }

}
