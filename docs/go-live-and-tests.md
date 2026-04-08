# Go-Live und Testplan

## Test 1: Kauf physischer Produkte

1. Eine Produktseite oeffnen, z. B. `product-cocktail-maschine.html`.
2. Auf `Jetzt kaufen` klicken.
3. Checkout mit Versandadresse abschliessen (Testmodus, wenn verfuegbar).
4. Pruefen:
   - Adresse korrekt erfasst
   - Versandkosten korrekt berechnet (falls vorgesehen)
   - Bestaetigungs-Mail angekommen

## Test 2: Website und Rechtliches

1. Footer-Links pruefen:
   - Impressum
   - Datenschutz
   - AGB
   - Widerruf
2. Kontaktdaten und E-Mail-Adresse pruefen.

## Test 3: Sicherheit und Performance

1. Header aus `_headers` mit Browser DevTools pruefen.
2. Caching fuer Dateien unter `/assets/` pruefen.
3. HTTPS-Erzwingung und Domain-Weiterleitung pruefen.

## Test 4: SEO-Basis

1. `robots.txt` aufrufbar.
2. `sitemap.xml` aufrufbar.
3. Seitentitel und Beschreibungen in den Hauptseiten vorhanden.
