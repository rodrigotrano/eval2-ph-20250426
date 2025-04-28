import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  templateUrl: './quote-list.component.html',
  imports: [CommonModule, IonItem, IonList, IonLabel, IonButton],
})
export class QuoteListComponent {
  @Input() quotes: { text: string; author: string }[] = [];
  @Output() deleteQuote = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteQuote.emit(index);
  }
}
