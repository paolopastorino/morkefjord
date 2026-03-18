# Mørkefjord Kommune — Website

Sito istituzionale dell'isola di Mørkefjord.  
HTML/CSS/JS statico, pronto per GitHub Pages.

## Deploy su GitHub Pages (gratuito, HTTPS incluso)

### 1. Crea un repository GitHub
- Vai su [github.com/new](https://github.com/new)
- Nome: `morkefjord` (o quello che preferisci)
- Pubblico
- Non inizializzare con README

### 2. Carica i file
```bash
cd morkefjord-site
git init
git add .
git commit -m "Mørkefjord Kommune website"
git branch -M main
git remote add origin https://github.com/TUOUSERNAME/morkefjord.git
git push -u origin main
```

### 3. Attiva GitHub Pages
- Vai su Settings → Pages
- Source: "Deploy from a branch"
- Branch: `main` / `/ (root)`
- Salva

### 4. Il sito sarà live su
```
https://TUOUSERNAME.github.io/morkefjord/
```
HTTPS automatico, certificato SSL incluso.

## Struttura
```
morkefjord-site/
├── index.html       (Home)
├── about.html       (History & Culture)
├── cities.html      (Three Cities)
├── tourism.html     (Tourism & Nature)
├── culture.html     (Culture & Education)
├── economy.html     (Economy & Work)
├── services.html    (Public Services)
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Lingua
Toggle EN/NO in alto a destra. La preferenza viene salvata in localStorage.

## Aggiungere immagini
Crea una cartella `images/` e sostituisci i placeholder gradient nelle card con:
```html
<div class="card-img" style="background:url('images/tuafoto.jpg') center/cover"></div>
```
