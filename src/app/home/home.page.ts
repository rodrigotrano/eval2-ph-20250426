import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';  
import { RouterModule } from '@angular/router';
import { QuotesService } from '../services/quotes.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,   
    RouterModule
  ],
})
export class HomePage implements OnInit {
  quote: { text: string, author: string } | undefined;
  allowDeleteOnHome: boolean = false;

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.quote = this.quotesService.getRandomQuote();
    this.allowDeleteOnHome = this.quotesService.getAllowDeleteOnHome();
  }

  ionViewWillEnter(): void { 
    this.getRandomQuote();
  }

  deleteQuote() {
    if (this.quote) {
      this.quotesService.deleteQuoteByText(this.quote.text);
      this.getRandomQuote(); 
    }
  }
  
}
