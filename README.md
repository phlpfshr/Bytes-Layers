# Bytes & Layers Website (Cloudflare Pages)

Statische Website mit Produktseiten fuer digitale und physische Produkte.

## 1) Lokal testen

Da es eine statische Seite ist, reicht ein einfacher Webserver:

```bash
python3 -m http.server 8080
```

Dann im Browser `http://localhost:8080` aufrufen.

## 2) Checkout-Links setzen

Aktuell sind Platzhalter in folgenden Dateien gesetzt:

- `product-notion-template-bundle.html`
- `product-creator-starter-kit.html`

Ersetze `https://checkout.example.com/...` durch deine echten Checkout-Links.

## 3) Deploy auf Cloudflare Pages

1. GitHub-Repository erstellen und dieses Projekt pushen.
2. In Cloudflare: `Workers & Pages -> Create -> Pages -> Connect to Git`.
3. Repository auswaehlen.
4. Build-Konfiguration:
   - Framework preset: `None`
   - Build command: leer
   - Build output directory: `/`
5. Deploy starten und die `*.pages.dev` URL pruefen.

## 4) Eigene Domain verbinden

1. Im Pages-Projekt `Custom domains` oeffnen.
2. `www.deinedomain.tld` (und optional Root-Domain) hinzufuegen.
3. SSL/TLS auf `Full (strict)` setzen, falls moeglich.
4. `Always Use HTTPS` aktivieren.

## 5) Cloudflare-Dateien in diesem Repo

- `_headers`: Security-Header und Caching-Regeln
- `_redirects`: Host-Weiterleitung (bitte auf echte Domain anpassen)
- `robots.txt` und `sitemap.xml`: SEO-Basis (Domain anpassen)

## 6) Go-Live Checkliste

- Testkauf digital erfolgreich (inkl. Download/Email)
- Testkauf physisch erfolgreich (inkl. Adresse/Versand)
- Pflichtseiten final juristisch geprueft
- Kontaktmail und Footer-Links geprueft
- Analytics aktiv (optional Cloudflare Web Analytics)
