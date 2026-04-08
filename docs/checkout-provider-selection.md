# Checkout Provider Auswahl (physisch)

## Empfehlung fuer den Start: Stripe Payment Links

Warum:

- Einfache Einrichtung ohne eigene Shop-Backend-Entwicklung
- Versandadresse und Versandkosten fuer physische Artikel erfassbar
- Gute Integrationen und stabile Zahlungsabwicklung

## Konkrete Einrichtung

1. Stripe Account erstellen und verifizieren.
2. Produkte in Stripe anlegen, z. B.:
   - Cocktail Maschine
   - Racer
   - Kochbox
3. Pro Produkt einen Payment Link erzeugen.
4. Die Platzhalter-URLs in den Produktseiten ersetzen:
   - `product-cocktail-maschine.html`
   - `product-racer.html`
   - `product-kochbox.html`
5. E-Mail-Bestaetigungen in Stripe aktivieren.

## Alternative Anbieter (bei anderen Anforderungen)

- Shopify: gut fuer umfangreicheren physischen Shop
- WooCommerce / andere Shop-Systeme mit eigenem Hosting
