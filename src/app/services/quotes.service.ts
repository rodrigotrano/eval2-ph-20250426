import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {


  private quotes = [
    { text: 'La vida es aquello que te va sucediendo mientras estás ocupado haciendo otros planes.', author: 'John Lennon' },
    { text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.', author: 'Robert Collier' }
  ];

  private allowDeleteOnHome = false; 


  sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  db!: SQLiteConnection;
  plataforma: string      = ""

  DB_NAME: string         = "list_quotes";
  DB_ENCRIPTADA: boolean  = false;
  DB_MODE: string         = "no-encryption";
  DB_VERSION: number      = 1;
  DB_READ_ONLY: boolean   = false;
  DB_SQL_TABLAS: string   = `
          CREATE TABLE IF NOT EXISTS quotes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            author TEXT NOT NULL
          );
        `;
  DB_TABLE_NAME: any;

  constructor() { }

  private async _iniciarPluginWeb(): Promise<void> {    
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null ) {      
      await this.sqlite.initWebStore()            
    }
  }


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

  getAllowDeleteOnHome() {
    return this.allowDeleteOnHome;
  }

  setAllowDeleteOnHome(value: boolean) {
    this.allowDeleteOnHome = value;
  }

  deleteQuoteByText(text: string) {
    this.quotes = this.quotes.filter((q) => q.text !== text);
  }
  
}
