## Opis projektu

### Cel:

Projekt "Prosty sklep internetowy" ma na celu dostarczenie użytkownikom platformy do przeglądania, dodawania produktów do koszyka, sumowania zamówienia oraz przesyłania informacji o zamówieniach do serwera bazodanowego XAMPP w MySQL. Sklep umożliwia użytkownikom wygodne zakupy online oraz zapewnia prosty i intuicyjny interfejs.

### Opis funkcji:

- **Przeglądanie produktów:** Użytkownicy mogą przeglądać dostępne produkty w sklepie.
- **Dodawanie do koszyka:** Możliwość dodawania wybranych produktów do koszyka zakupów.
- **Sumowanie zamówienia:** Automatyczne sumowanie koszyka i wyświetlanie końcowej kwoty zamówienia.
- **Przesyłanie informacji o zamówieniach:** Dane o zamówieniach są przesyłane do serwera bazodanowego XAMPP w MySQL.

## Analiza wymagań:

### Wymagania funkcjonalne:

- **Przeglądanie produktów:** Użytkownik może przeglądać listę dostępnych produktów w sklepie.
- **Dodawanie do koszyka:** Możliwość dodawania produktów do koszyka zakupów.
- **Sumowanie zamówienia:** Automatyczne sumowanie wartości produktów w koszyku.
- **Przesyłanie informacji o zamówieniach:** Dane o zamówieniach są przekazywane do serwera bazodanowego.

### Wymagania niefunkcjonalne:

- **Responsywność interfejsu:** Interfejs użytkownika powinien być responsywny i dostosowany do różnych urządzeń.
- **Bezpieczeństwo danych:** Zapewnienie bezpiecznego przesyłania danych użytkowników do serwera.
- **Wydajność:** Sklep powinien być wydajny i szybko działać nawet przy dużej liczbie produktów i użytkowników.

## Projekt interfejsu:

### Szkice/wizualizacje interfejsu:

- _Strona główna:_ Wyświetlanie listy produktów i koszyka zakupów.
- _Karta produktu:_ Szczegółowe informacje o produkcie oraz opcja dodania do koszyka.
- _Koszyk zakupów:_ Wyświetlanie dodanych produktów oraz końcowej sumy zamówienia.

### Mapa strony:

- _Strona główna_
  - Lista produktów
  - Koszyk zakupów
- _Karta produktu_
  - Szczegóły produktu
  - Przycisk dodawania do koszyka
- _Koszyk zakupów_
  - Lista produktów w koszyku
  - Suma zamówienia

## Architektura systemu:

### Opis struktury danych:

Sklep przechowuje dane o produktach oraz zamówieniach w bazie danych MySQL na serwerze XAMPP.

### Diagramy architektury:

Architektura oparta jest na modelu klient-serwer, gdzie:

- **Klient:** Interfejs użytkownika przeglądarki.
- **Serwer:** Aplikacja serwerowa obsługująca żądania klienta i komunikująca się z bazą danych.

## Implementacja:

### Opis technologii:

- **Frontend:** HTML, CSS, JavaScript.
- **Backend:** PHP (obsługa żądań klienta i komunikacja z bazą danych MySQL).
- **Baza danych:** MySQL (serwer XAMPP).

### Struktura kodu:

- _Katalogi/pliki_: Oddzielne pliki dla frontendu, backendu oraz konfiguracji bazy danych.
- _Style pisania kodu_: Zastosowanie modularności, czytelności i bezpiecznych praktyk programistycznych.

### Szczegóły implementacji:

1. **Frontend:** Interfejs użytkownika zostanie zaprojektowany z myślą o prostocie i intuicyjności. Wykorzystamy HTML, CSS i JavaScript do stworzenia responsywnego interfejsu.
2. **Backend:** Aplikacja serwerowa napisana w PHP będzie obsługiwać żądania klienta, takie jak dodawanie produktów do koszyka i przesyłanie zamówień do bazy danych MySQL.
3. **Baza danych:** Wykorzystamy bazę danych MySQL na serwerze XAMPP do przechowywania informacji o produktach oraz zamówieniach.

## Testowanie:

### Plan testów:

- **Testy jednostkowe:** Sprawdzenie poprawności funkcji dodawania produktów do koszyka oraz sumowania zamówienia.
- **Testy integracyjne:** Upewnienie się, że frontend i backend współpracują ze sobą poprawnie.
- **Testy interfejsu użytkownika:** Sprawdzenie interakcji z użytkownikiem na różnych urządzeniach.
- **Testy wydajnościowe:** Ocena wydajności sklepu pod obciążeniem.

### Procedury testowania:

- Opracowanie zestawu przypadków testowych dla każdej funkcji aplikacji.
- Ustalenie procedur raportowania i naprawiania znalezionych błędów.

## Wdrożenie i konserwacja:

### Plan wdrożenia:

- **Etapy wdrażania:** Testowanie, poprawki, publikacja na serwerze hostingowym lub lokalnym serwerze XAMPP.
- **Terminy:** Określenie dat planowanych etapów.

### Procedury konserwacji:

- **Wsparcie techniczne:** Ustanowienie kanałów komunikacji z użytkownikami w celu zgłaszania problemów.
- **Aktualizacje:** Planowanie regularnych aktualizacji w zależności od potrzeb i feedbacku użytkowników.

### Kosztorys:

### Szacunkowe koszty:

- **Rozwój aplikacji:** Wg godzin pracy lub zespołu programistów.
- **Koszty utrzymania:** Opłaty za hosting, serwer XAMPP, wsparcie techniczne.

---

[English](/README.md)
