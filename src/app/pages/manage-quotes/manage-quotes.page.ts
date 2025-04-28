import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonList } from '@ionic/angular/standalone';
import { QuotesService } from '../../services/quotes.service';
import { QuoteFormComponent } from '../../components/quote-form/quote-form.component';
import { QuoteListComponent } from '../../components/quote-list/quote-list.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-quotes',
  templateUrl: './manage-quotes.page.html',
  styleUrls: ['./manage-quotes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonList, QuoteFormComponent, QuoteListComponent, RouterModule]
})
export class ManageQuotesPage {
  quotes = this.quotesService.getQuotes();

  constructor(
    private quotesService: QuotesService,
    private router: Router
  ) {}

  handleNewQuote(quote: { text: string, author: string }) {
    this.quotesService.addQuote(quote);
    this.quotes = this.quotesService.getQuotes();
  }

  handleDeleteQuote(index: number) {
    this.quotesService.deleteQuote(index);
    this.quotes = this.quotesService.getQuotes();
  }

  goHome() { 
    this.router.navigate(['/']);
  }
}
