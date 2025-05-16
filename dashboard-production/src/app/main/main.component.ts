import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { MatIcon } from '@angular/material/icon';
import { ChartModule } from 'primeng/chart';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [CardsComponent, MatIcon, ChartModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  data: any;
  options: any;
  data_1: any;

  options_1: any;

  ngOnInit() {

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {

      },

    };
    //Doughnut 
    this.data_1 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                     }
            ]
        };


    this.options_1 = {
      

    responsive: true,
    maintainAspectRatio: false,

            cutout: '70%',
            plugins: {
                legend: {
                
                }
            }
        };
  }
}


