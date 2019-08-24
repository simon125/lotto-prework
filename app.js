const setup = () => {
  console.log(123);
};

document.addEventListener("DOMContentLoaded", setup);

/*
Opis zadania
Zadanie polega na tym, aby:

Wypełnić tablicę 6-cioma losowymi liczbami od 1 do 49
Zaprezentować na stronie internetowej
Liczby powinny być posortowane alfanumerycznie rosnąco
Krok po kroku footprints
Stwórz katalog lotto.
Wewnątrz katalogu stwórz pliki index.html oraz scripts/main.js.
W pliku scripts/main.js zrób funkcję setup
Uruchom funkcję setup po załadowaniu DOMa (zdarzenie DOMContentLoaded)
Stwórz funkcję buildArrayWithRandomNumbers
Przypisz wynik funkcji buildArrayWithRandomNumbers do zmiennej numbers
Stwórz funkcję render
Uruchom funkcję render w funkcji setup przekazując jej tablicę z liczbami
Stwórz funkcję getRandomNumber, która będzie zwracać losową liczbę
Stwórz funkcję template, która będzie zwracać strukturę HTML dla pojedynczej liczby - będzie to funkcja zdefiniowana wewnątrz funkcji render
Dołącz plik CSS i zamień dodaj wygląd kulki do każdego elementu zawierającego losową liczbę
Zadanie dodatkowe
Wybieranie kolejnych liczb powinno być zaprezentowane w formie animacji z użyciem https://github.com/coderitual/bounty
Dodaj w CSS cień wewnętrzny, aby uzyskać efekt przestrzeni*/
