# Go-Live und Testplan

## Test 1: Digitaler Kauf

1. Produktseite `product-notion-template-bundle.html` oeffnen.
2. Auf `Jetzt kaufen` klicken.
3. Checkout abschliessen (Testmodus, wenn verfuegbar).
4. Pruefen:
   - Zahlung erfolgreich
   - Bestaetigungs-E-Mail angekommen
   - Download-Auslieferung funktioniert

## Test 2: Physischer Kauf

1. Produktseite `product-creator-starter-kit.html` oeffnen.
2. Checkout mit Versandadresse abschliessen.
3. Pruefen:
   - Adresse korrekt erfasst
   - Versandkosten korrekt berechnet
   - Bestaetigungs-Mail angekommen

## Test 3: Website und Rechtliches

1. Footer-Links pruefen:
   - Impressum
   - Datenschutz
   - AGB
   - Widerruf
2. Kontaktdaten und E-Mail-Adresse pruefen.

## Test 4: Sicherheit und Performance

1. Header aus `_headers` mit Browser DevTools pruefen.
2. Caching fuer Dateien unter `/assets/` pruefen.
3. HTTPS-Erzwingung und Domain-Weiterleitung pruefen.

## Test 5: SEO-Basis

1. `robots.txt` aufrufbar.
2. `sitemap.xml` aufrufbar.
3. Seitentitel und Beschreibungen in den Hauptseiten vorhanden.
