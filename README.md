# FitLife-Center

## Gruppo 5 — FitLife Center

Sito web scolastico per una palestra, realizzato con **HTML, CSS e JavaScript**. Il progetto è organizzato secondo il workflow Git/GitHub richiesto dalla consegna.

### Struttura del sito

- `index.html` — home page con collegamenti alle tre sezioni.
- `sezione-a.html` — **Corsi**, con 6 corsi.
- `sezione-b.html` — **Istruttori**, con 3 istruttori e relative specializzazioni.
- `sezione-c.html` — **Abbonamenti e orari**, con 3 piani e orari settimanali.
- `style.css` — stile condiviso del progetto.
- `script.js` — interazioni JavaScript della home.
- `documentazione/` — documentazione del workflow e spazio per le schermate richieste.

### Contenuti

**Sezione A — Corsi**
1. Functional Training
2. Yoga Flow
3. HIIT Burn
4. Boxe Fitness
5. Strength Lab
6. Pilates Core

**Sezione B — Istruttori**
- Marco Riva — Strength Coach
- Giulia Bianchi — Performance Coach
- Elena Conti — Mobility Coach

**Sezione C — Abbonamenti e orari**
- START — €29/mese
- PRO — €49/mese
- ELITE — €69/mese
- Orari completi dal lunedì alla domenica.

Le immagini delle sezioni sono caricate da Unsplash tramite URL pubblici e sono accompagnate da testo alternativo descrittivo.

## Workflow Git/GitHub

### Branch
- `main` — branch principale e versione integrata.
- `sezione-a` — sviluppo della Sezione A.
- `sezione-b` — sviluppo della Sezione B.
- `sezione-c` — sviluppo della Sezione C.
- `titolo-a` e `titolo-b` — branch usati per la prova obbligatoria di conflitto.

### Commit
Ogni sezione è stata sviluppata con almeno due commit significativi. Per la Sezione A è stata inoltre effettuata una correzione successiva alla revisione PM: aggiunta di `loading="lazy"` alle immagini.

### Issues
- Issue #4 — Sezione A: Corsi
- Issue #5 — Sezione B: Istruttori
- Issue #6 — Sezione C: Abbonamenti e orari

### Pull Request
- PR #7 — Sezione A: corsi FitLife — **integrata**.
- PR #8 — Sezione B: istruttori FitLife — **integrata**.
- PR #9 — Sezione C: abbonamenti e orari — **integrata**.

La PR della Sezione A contiene anche la richiesta di correzione documentata nei commenti e il successivo commit di correzione.

## Prova di conflitto

È prevista una prova reale con due branch che modificano la stessa riga di `index.html`. Dopo l'integrazione del primo branch, il secondo viene aggiornato e risolto scegliendo il testo definitivo. Le schermate della procedura devono essere inserite in `documentazione/` prima della consegna finale.

> Nota: i contenuti della palestra sono dimostrativi e non rappresentano un'attività commerciale reale.

## Ruoli

Il **Project Manager** prepara la home, gestisce Issues, Pull Request, revisioni e merge. Gli **sviluppatori A, B e C** lavorano sui rispettivi branch senza modificare direttamente `main`. In un gruppo di tre, il PM assume anche il ruolo dello sviluppatore C.

Ogni studente deve usare il proprio account GitHub e la propria copia locale. Non inserire password, token, dati personali o altri segreti nel repository.

## Comandi principali

```bash
git clone https://github.com/SofiStale/FitLife-Center.git
cd FitLife-Center
git switch main
git pull origin main
git switch -c sezione-a
git status
git add -A
git commit -m "Creata struttura sezione A"
git push -u origin sezione-a
```

Per controllare la cronologia finale:

```bash
git switch main
git pull origin main
git log --oneline -8
```
