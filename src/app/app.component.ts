import { Component } from '@angular/core';
import { ToolboxComponent } from "./shared";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'muzbeats';
}
