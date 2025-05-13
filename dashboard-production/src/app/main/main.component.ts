import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [CardsComponent,MatIcon],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
