import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  templateUrl: './quote-form.component.html',
  imports: [CommonModule, FormsModule, IonInput, IonButton],
})
export class QuoteFormComponent {
  text: string = '';
  author: string = '';

  @Output() addQuote = new EventEmitter<{ text: string, author: string }>();

  submitQuote() {
    if (this.text && this.author) {
      this.addQuote.emit({ text: this.text, author: this.author });
      this.text = '';
      this.author = '';
    }
  }
}
