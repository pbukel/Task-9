/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      console.log(`${this.title} biudžetas viršijo 100 mln. USD`);
    } else {
      console.log(`${this.title} biudžetas neviršijo 100 mln. USD`);
    }
  }
}

let movie = new Movie("Avengers: Endgame", "Thomas Philips", 100000001);
movie.wasExpensive();
let movie2 = new Movie("Mr. Nobody", "Thomas Philips", 99999999);
movie2.wasExpensive();
