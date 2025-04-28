import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotes = [
    { text: 'La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.', author: 'John Lennon' },
    { text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.', author: 'Robert Collier' }
  ];

  private allowDeleteOnHome = false; // ⭐ opción para borrar citas en Home

  constructor() { }

  getQuotes() {
    return [...this.quotes];
  }

  addQuote(quote: { text: string; author: string }) {
    this.quotes.push(quote);
  }

  deleteQuote(index: number) {
    if (index >= 0 && index < this.quotes.length) {
      this.quotes.splice(index, 1);
    }
  }

  getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }

  // ⭐ Obtener el valor actual de la opción
  getAllowDeleteOnHome() {
    return this.allowDeleteOnHome;
  }

  // ⭐ Cambiar el valor de la opción
  setAllowDeleteOnHome(value: boolean) {
    this.allowDeleteOnHome = value;
  }
}
