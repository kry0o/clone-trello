Voraussetzungen
Stelle sicher, dass du die folgenden Tools installiert hast:

Node.js und npm: Node.js
MongoDB: MongoDB Community Edition
Git: Git
Heroku CLI: Heroku CLI

Schritt 1: Backend mit Node.js und Express einrichten
Erstelle ein neues Verzeichnis f�r dein Projekt und navigiere dorthin:

mkdir trello-clone
cd trello-clone



Initialisiere ein neues Node.js-Projekt:
npm init -y



Installiere die notwendigen Abh�ngigkeiten:
npm install express mongoose body-parser cors



Erstelle die grundlegende Verzeichnisstruktur:
mkdir models routes
touch server.js



Erstelle ein einfaches Express-Server-Setup in server.js:
Liegt dem Git bei


Schritt 2: Datenbankmodelle erstellen
Liegt dem Git bei


Erstelle das List-Modell:
Liegt dem Git bei



Erstelle das Card-Modell:
Liegt dem Git bei


Schritt 3: API-Routen einrichten
Erstelle Routen f�r Boards:
Liegt dem Git bei



Erstelle Routen f�r Listen:
Liegt dem Git bei



Erstelle Routen f�r Karten:
Liegt dem Git bei



Schritt 4: Frontend mit React einrichten
Erstelle eine neue React-App:
npx create-react-app client
cd client



Installiere Axios f�r API-Anfragen:
npm install axios



Erstelle eine einfache Oberfl�che in App.js:
Liegt dem Git bei



�ndere die Proxy-Einstellungen in package.json von React:
// client/package.json
"proxy": "http://localhost:5000",



Schritt 5: Backend und Frontend integrieren
Gehe in das Hauptverzeichnis (trello-clone) und �ndere server.js, um das Frontend zu bedienen



Schritt 6: Auf Heroku bereitstellen
Erstelle ein Git-Repository und initialisiere es:

bash
git init
git add .
git commit -m "Initial commit"
Melde dich bei Heroku an:

bash
heroku login
Erstelle eine neue Heroku-App:

bash
heroku create trello-clone
F�ge eine MongoDB-Instanz hinzu (zum Beispiel mit mLab):

bash
heroku addons:create mongolab:sandbox
Konfiguriere die Umgebungsvariablen in Heroku:

bash
heroku config:set NODE_ENV=production
Deploy auf Heroku:

bash
git push heroku master
�ffne die Heroku-App:

bash
heroku open