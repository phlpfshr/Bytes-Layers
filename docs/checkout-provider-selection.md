# Checkout Provider Auswahl (digital + physisch)

## Empfehlung fuer den Start: Stripe Payment Links

Warum:

- Einfache Einrichtung ohne eigene Shop-Backend-Entwicklung
- Unterstuetzt digitale und physische Produkte in einem einheitlichen Checkout
- Kann Versandadresse und Versandkosten fuer physische Artikel erfassen
- Gute Integrationen und stabile Zahlungsabwicklung

## Konkrete Einrichtung

1. Stripe Account erstellen und verifizieren.
2. Zwei Produkte in Stripe anlegen:
   - `Notion Template Bundle` (digital)
   - `Creator Starter Kit` (physisch, mit Versand)
3. Pro Produkt einen Payment Link erzeugen.
4. Die Platzhalter-URLs in den Produktseiten ersetzen:
   - `product-notion-template-bundle.html`
   - `product-creator-starter-kit.html`
5. E-Mail-Bestaetigungen in Stripe aktivieren.
6. Fuer digitale Produkte Download-Auslieferung ueber Tool wie `SendOwl`, `Lemon Squeezy` oder automatisierte E-Mail-Workflows ergaenzen, falls benoetigt.

## Alternative Anbieter (bei anderen Anforderungen)

- Lemon Squeezy: sehr stark fuer digitale Produkte
- Shopify: gut fuer umfangreicheren physischen Shop
