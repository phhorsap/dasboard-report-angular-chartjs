import { Component, inject, OnInit } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [MatIcon,MatIconModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

}
