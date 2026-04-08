# Cloudflare Pages Deployment Schritt fuer Schritt

## A. Repository vorbereiten

1. Neues GitHub-Repository erstellen.
2. Projektdateien committen und pushen.

## B. Cloudflare Pages Projekt erstellen

1. Cloudflare Dashboard oeffnen.
2. `Workers & Pages -> Create -> Pages -> Connect to Git`.
3. GitHub verbinden und das Repository auswaehlen.

## C. Build-Einstellungen fuer statische Website

- Framework preset: `None`
- Build command: leer lassen
- Build output directory: `/`

## D. Deploy testen

1. Deploy starten.
2. Die generierte `*.pages.dev` URL oeffnen.
3. Startseite, Produktseiten und Legal-Seiten durchklicken.

## E. Eigene Domain verbinden

1. Im Pages-Projekt `Custom domains` oeffnen.
2. `www.deinedomain.tld` hinzufuegen.
3. Optional Root-Domain `deinedomain.tld` hinzufuegen.
4. DNS-Eintraege von Cloudflare automatisch anlegen lassen.

## F. SSL und Redirects

1. `SSL/TLS` auf `Full (strict)` setzen (falls Zertifikatskette passt).
2. `Always Use HTTPS` aktivieren.
3. Weiterleitungen (apex/www, http→https) unter **Rules → Redirect Rules** einrichten, nicht über `_redirects` (Workers-Static-Deploy).

## G. Nach jedem Push

- Cloudflare Pages baut automatisch neu.
- Deployment-Status in `Workers & Pages` pruefen.
