import { Component, OnInit } from '@angular/core';
import { MatDialog as MatDialog } from '@angular/material/dialog';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, throttleTime } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
