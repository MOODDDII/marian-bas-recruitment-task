📊 Zadanie rekrutacyjne — Data Visualization (Frontend)
=======================================================

📌 Kontekst
-----------

Dane w pliku data.json pochodzą z platformy e-commerce i zawierają informacje o zamówieniach, m.in.:

*   czas złożenia zamówienia,
    
*   lokalizację (kraj, miasto, współrzędne),
    
*   kategorie produktów,
    
*   ilości i ceny,
    
*   dodatkowe metadane (metoda płatności, typ klienta, urządzenie, czas dostawy).
    

Celem zadania było zrozumienie struktury danych, wybranie najistotniejszych informacji oraz przedstawienie ich w czytelnej i sensownej formie wizualnej.

🎯 Podejście do analizy danych
==============================

Podczas analizy danych skupiłem się na perspektywie biznesowej.Zamiast prezentować wszystkie dostępne informacje, wybrałem te, które w mojej ocenie dają największą wartość analityczną.

Wybrałem trzy główne obszary:

1️⃣ Revenue over time (Przychód w czasie)
-----------------------------------------

### Dlaczego te dane są kluczowe?

Trend przychodów w czasie jest jednym z najważniejszych wskaźników w e-commerce.Pozwala zrozumieć:

*   dynamikę sprzedaży,
    
*   ewentualne wzrosty i spadki,
    
*   ogólną kondycję biznesu w czasie.
    

### Agregacja danych

*   Przychód został obliczony jako:quantity × unitPrice
    
*   Dane zostały pogrupowane po dacie (YYYY-MM-DD).
    
*   Posortowane chronologicznie.
    

### Dlaczego wykres liniowy?

Wykres liniowy najlepiej pokazuje zmiany wartości w czasie oraz pozwala łatwo zauważyć trendy i odchylenia.

2️⃣ Revenue by country (Przychód według kraju)
----------------------------------------------

### Dlaczego te dane są kluczowe?

Geograficzna dystrybucja przychodów pozwala:

*   zidentyfikować najmocniejsze rynki,
    
*   wskazać potencjalne obszary do rozwoju,
    
*   porównać efektywność sprzedaży między krajami.
    

### Agregacja danych

*   Dane zostały pogrupowane według pola country.
    
*   Obliczono sumę przychodów dla każdego kraju.
    
*   Posortowano malejąco, aby wyróżnić najbardziej dochodowe rynki.
    

### Dlaczego wykres słupkowy?

Wykres słupkowy umożliwia czytelne porównanie wartości pomiędzy kategoriami dyskretnymi (krajami).

3️⃣ Orders by device (Zamówienia według urządzenia)
---------------------------------------------------

### Dlaczego te dane są kluczowe?

Podział zamówień według urządzenia daje wgląd w:

*   zachowanie użytkowników (mobile vs desktop),
    
*   potencjalne potrzeby optymalizacji UX,
    
*   kontekst marketingowy.
    

### Agregacja danych

*   Dane zostały pogrupowane według pola device.
    
*   Zliczono liczbę zamówień dla każdego typu urządzenia.
    

### Dlaczego wykres kołowy?

Wykres kołowy pozwala w przejrzysty sposób przedstawić udział procentowy poszczególnych segmentów w całości.

🧠 Dlaczego właśnie te trzy wizualizacje?
=========================================

Celem było wybranie trzech wizualizacji, które:

*   pokazują trend (czas),
    
*   pokazują porównanie (kraje),
    
*   pokazują strukturę (urządzenia).
    

Razem tworzą one spójny i czytelny obraz sprzedaży z trzech różnych perspektyw analitycznych.

🛠️ Technologia
===============

*   React
    
*   Recharts (biblioteka do wizualizacji danych)
    
*   JavaScript (agregacja i przetwarzanie danych)
    
*   CSS Grid (layout)
    

Technologia nie była kluczowym kryterium, dlatego wybrałem rozwiązanie, które pozwala szybko i czytelnie zaprezentować dane.

▶️ Uruchomienie projektu
========================

Wymagania
---------

*   Node.js (zalecana wersja 18+)
    
*   npm
    

Instalacja
----------

npm install

Uruchomienie projektu
---------------------

npm run dev

Następnie otworzyć w przeglądarce:

http://localhost:5173

Projekt powinien uruchomić się lokalnie bez dodatkowej konfiguracji.
