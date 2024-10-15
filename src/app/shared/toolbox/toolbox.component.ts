import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-toolbox',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({featherSearch})
  ],
  templateUrl: './toolbox.component.html',
  styleUrl: './toolbox.component.scss'
})
export class ToolboxComponent {

}
