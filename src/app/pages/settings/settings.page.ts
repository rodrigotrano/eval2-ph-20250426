import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar, IonToggle } from '@ionic/angular/standalone';
import { QuotesService } from '../../services/quotes.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';



@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.page.html',
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonToggle,
    IonButtons,
    IonButton,
    RouterModule,
    IonIcon
  ]
  ,
})
export class SettingsPage implements OnInit {
  allowDeleteOnHome: boolean = false;

  constructor(
    private quotesService: QuotesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allowDeleteOnHome = this.quotesService.getAllowDeleteOnHome();
  }

  toggleAllowDelete() {
    this.quotesService.setAllowDeleteOnHome(this.allowDeleteOnHome);
  }

  goHome() { 
    this.router.navigate(['/']);
  }
}