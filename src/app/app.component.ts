import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatToolbarModule,MatIconModule,RouterLink,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ImagePath: string;
  showToolbar: boolean = true;

  constructor(private router: Router) {
    this.ImagePath = "/assets/logoWiCMic-removebg-preview.png";

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showToolbar = !(router.url === '/login' || router.url === '/')
      }
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}