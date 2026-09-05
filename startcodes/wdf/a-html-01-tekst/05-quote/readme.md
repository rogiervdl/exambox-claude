## Theorie

De uitgebreide uitleg vind je vanaf [https://rogiervdl.github.io/HTML-course/02_tekst.html#blockquote](https://rogiervdl.github.io/HTML-course/02_tekst.html#blockquote)

- `<blockquote>` – een **bloktekst**: een blok tekst die eruit springt, zoals een citaat van iemand anders of een pullquote in een artikel
- `<cite>` – een **bronvermelding**: bron waarnaar je refereert (boek, schilderij, rechtspraak, film, paper, song...), niet de naam van een persoon!
- `<address>` – de belangrijkste **contactgegevens** op een webpagina, meestal onderaan de pagina

Let op: `<address>` betekent dus niet "adres" maar "contactgegevens". Er hoeft zelfs geen echt adres in te staan; e-mail en telefoon is voldoende bv. Staan op meerdere plaatsen contactgegevens, kies dan de meest logische, meestal onderaan: `<address>` mag dus hooguit één keer per pagina voorkomen (net zoals `<h1>` en nog andere elementen).

```html
<p>
   Steve Jobs vond dat design niet over het uitzicht van een product gaat,
   maar over de manier waarop het werkt.
</p>
<blockquote>
   <p>Design is how it works.</p>
</blockquote>
<p>Steve Jobs in <cite>The New York Times Magazine</cite></p><!-- de bronvermelding, niet de spreker -->

<address>
   Studio Lumen<br>
   tel: 0467/12.34.56<br>
   email: hallo@studiolumen.be
</address>
```

Resultaat:

<img src="img/theorie.png" alt="" width="700">

## Opdracht

Hieronder staat een interview uit een tijdschrift, als kale tekst. Structureer het met HTML, naar voorbeeld van de screenshot. Let op: niet alles wat schuin staat is hetzelfde element.

### Screenshot

<img src="img/screenshot.png" alt="" width="550">

### Teksten

Alle teksten van de pagina staan hieronder, zonder opmaak, zodat je ze kan kopiëren.

```
Een dorp herken je aan zijn bakker

Interview met Anne Vermeire, door Karel Dendooven

Anne Vermeire debuteerde twee jaar geleden met haar roman Het laatste deeg over een dorp
dat langzaam leegloopt, verteld door de laatste bakker die er zijn oven nog aansteekt.
Zelf groeide ze op boven de bakkerij van haar grootouders, en ze werkte er drie zomers
mee. Ze leerde er bakken met desem, het natuurlijke zuurdeeg dat brood zijn smaak en zijn
houdbaarheid geeft.

Een dorp zonder bakker is een dorp dat zijn ochtenden kwijt is.

Een dorp zonder bakker is een dorp dat zijn ochtenden kwijt is, zegt ze daarover. Wie er
's morgens niet meer binnenloopt, verneemt ook niet meer wie ziek is of wie verhuist. De
bakkerij van haar grootouders sloot in 2019; het pand staat sindsdien leeg.

Drie jaar wachten

Tussen dat idee en het eerste hoofdstuk zaten drie jaar. Vermeire wilde het ambacht eerst
zelf in de vingers hebben voor ze er iets over op papier zette.

"Ik heb drie jaar in die bakkerij gestaan voor ik er een zin over durfde te schrijven. Je
moet het deeg eerst in je handen voelen, anders schrijf je over een decor in plaats van
over een vak."

Anne Vermeire in De Lezer, jaargang 12, 2025

En nu?

Haar debuut is intussen aan een vierde druk toe en wordt volgend jaar verfilmd onder de
naam De laatste bakker. Aan een tweede roman werkt ze nog niet: eerst wil ze een winter
lang niets doen, zegt ze, en dan pas kijken of er nog een dorp in haar hoofd zit.

Redactie De Lezer
redactie@delezer.be / 0456 12 34 56
```
