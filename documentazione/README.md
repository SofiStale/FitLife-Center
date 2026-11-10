# Documentazione del workflow

Questa cartella raccoglie la documentazione richiesta dalla consegna.

## Schermate da inserire

Salvare qui le schermate reali effettuate durante il lavoro:

1. `01-repository-issues.png` — repository pubblico, README, Issues e collaboratori.
2. `02-branch-sezione-a.png` — branch `sezione-a` e commit.
3. `03-pr-sezione-a-review.png` — PR #7 con richiesta di correzione.
4. `04-pr-sezione-a-corretta.png` — PR #7 aggiornata dopo il nuovo commit.
5. `05-pr-merge.png` — merge delle PR #7, #8 e #9.
6. `06-conflitto-titolo-a-b.png` — PR #11 in conflitto dopo il merge della PR #10.
7. `07-conflitto-risolto.png` — risoluzione del conflitto e merge della PR #11.

## Prova di conflitto effettuata

- PR #10 (`titolo-a`) è stata integrata per prima.
- Il tentativo di integrare PR #11 (`titolo-b`) ha restituito un errore di merge conflict.
- Il branch `titolo-b` è stato risolto con un merge commit dedicato.
- Commit di risoluzione: `c0fb62fa1e89463668b0aaea64c28b1dc481fa47`.
- PR #11 è stata poi integrata in `main`.
- Il titolo definitivo lasciato in `index.html` è `Benvenuti nel nostro sito`.

## Verifica finale

- [x] `index.html` con tre collegamenti separati
- [x] `sezione-a.html` con almeno 5 corsi
- [x] `sezione-b.html` con almeno 3 istruttori
- [x] `sezione-c.html` con abbonamenti e orari
- [x] README principale aggiornato
- [x] Issues #4, #5, #6 create e completate tramite PR
- [x] PR #7, #8, #9 integrate
- [x] Correzione documentata nella PR #7
- [x] Conflitto reale provocato e risolto
- [ ] Screenshot reali da aggiungere nella cartella prima della consegna al docente

## Regola

Gli screenshot devono essere reali e prodotti dal gruppo durante il lavoro. Non devono essere inventati o modificati per simulare operazioni GitHub.