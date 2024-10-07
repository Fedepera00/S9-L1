interface Smartphone {
  credito: number; // CRED RESIDUO SIM
  numeroChiamate: number; // MINUTI CHIAMATE EFFETTUATI
}

// CLASSE USER IMPLEMENTA INTERFACCIA DELLO SMARTPHONE
class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number;
  numeroChiamate: number;

  // Costruttore per inizializzare i dati dell'utente (nome, cognome e credito iniziale)
  constructor(nome: string, cognome: string, creditoIniziale: number = 0) {
    this.nome = nome; // Assegna il nome passato come argomento
    this.cognome = cognome; // Assegna il cognome passato come argomento
    this.credito = creditoIniziale; // Imposta il credito iniziale (di default a 0 se non specificato)
    this.numeroChiamate = 0; // Inizializza i minuti di chiamata a 0
  }
  // AGGIUNGO SOLDI AL TELEFONO
  ricarica(ammontare: number): void {
    this.credito += ammontare;
    console.log(`Ricarica effettuata: +${ammontare}€. Credito attuale: ${this.credito}€`);
  }

  // FACCIO UNA CHIAMATA
  chiamata(minuti: number): void {
    const costoChiamata = 0.2 * minuti; // LO 0.20 STA A SIGNIFICARE IL COSTO DI 20 CENTSSIMI
    if (this.credito >= costoChiamata) {
      // Controlla se l'utente ha abbastanza credito per la chiamata
      this.credito -= costoChiamata; // Sottrae il costo della chiamata dal credito
      this.numeroChiamate += minuti; // Aggiunge i minuti alla variabile che tiene traccia delle chiamate totali
      console.log(`Chiamata di ${minuti} minuti. Costo: ${costoChiamata}€. Credito rimanente: ${this.credito}€`); // Mostra un messaggio con il costo della chiamata e il credito rimanente
    } else {
      console.log("Credito insufficiente."); // Mostra un messaggio se il credito è insufficiente
    }
  }
  chiama404(): number {
    console.log(`Credito disponibile: ${this.credito}€`);
    return this.credito;
  }
  // QUI TORNO AI MINUTI EFFETTUATI
  getNumeroChiamata(): number {
    console.log(`Minuti effettuati: ${this.numeroChiamate}`);
    return this.numeroChiamate;
  }
  // AZZERO LE CHIAMATE CHE HO FATTO
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Numero di chiamate cancellato.");
  }
}
const utente1 = new User("Fede", "Pera", 500);
// Aggiunge 20€ di credito all'utente
utente1.ricarica(20);
// Effettua una chiamata di 1500 minuti
utente1.chiamata(1500);
// Mostra il credito residuo dell'utente
utente1.chiama404();
// Mostra i minuti totali delle chiamate effettuate dall'utente
utente1.getNumeroChiamata();
// Azzera il conteggio dei minuti di chiamata dell'utente
utente1.azzeraChiamate();
