import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton, IonText, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  templateUrl: './quote-form.component.html',
  imports: [CommonModule, FormsModule, IonInput, IonButton, IonText, IonItem],
})
export class QuoteFormComponent {
  text: string = '';
  author: string = '';

  @Output() addQuote = new EventEmitter<{ text: string, author: string }>();

  submitQuote() {
    // Ahora validamos correctamente
    if (
      this.text && this.text.length >= 5 &&
      this.author && this.author.length >= 2
    ) {
      this.addQuote.emit({ text: this.text, author: this.author });
      this.text = '';
      this.author = '';
    }
  }
}
