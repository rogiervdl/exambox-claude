## Theorie

De uitleg vind ook je op [https://rogiervdl.github.io/HTML-course/02_tekst.html#details](https://rogiervdl.github.io/HTML-course/02_tekst.html#details)

Met `<details>` maak je een uitklapbaar blok. De zichtbare titel zet je in `<summary>`; de rest verschijnt bij het openklappen.

```html
<details>
   <summary>Lees meer</summary>
   <p>Verborgen inhoud die verschijnt bij het openklappen.</p>
</details>
```

Geef je meerdere blokken hetzelfde `name`, dan vormen ze samen een **accordeon**: er kan er dan maar één tegelijk openstaan, want zodra je er een opent klapt de vorige dicht. Zonder `name` staan de blokken los van elkaar en mogen ze allemaal tegelijk openstaan. Wil je dat een blok al open is bij het laden van de pagina, dan zet je er `open` bij.

```html
<details name="faq" open><!-- staat meteen open -->
   <summary>Hoe lang blijft het brood vers?</summary>
   <p>Twee tot drie dagen, in een linnen zak.</p>
</details>
<details name="faq"><!-- zelfde name: sluit het vorige -->
   <summary>Kan ik het invriezen?</summary>
   <p>Ja, in sneden, tot drie maanden.</p>
</details>
```

Resultaat:

<img src="img/theorie.png" alt="" width="250">

## Opdracht

Maak van de vier vragen hieronder een minikwis: het antwoord verschijnt pas als je op de vraag klikt, er kan er maar één tegelijk openstaan, en de eerste vraag staat al open wanneer de pagina laadt.

### Screenshot

<img src="img/screenshot.png" alt="" width="550">

### Teksten

Alle teksten van de pagina staan hieronder, zonder opmaak, zodat je ze kan kopiëren.

```
Minikwis: de geschiedenis van het web

Klik op een vraag om het antwoord te zien.

Wanneer stelde Tim Berners-Lee het World Wide Web voor?
In 1989. Hij schreef bij het CERN een voorstel voor een systeem om documenten aan elkaar
te knopen met hyperlinks, zodat onderzoekers elkaars werk konden terugvinden.

Wanneer ging de eerste website online?
In 1991. Die pagina stond op een computer bij het CERN en legde uit wat het World Wide
Web was en hoe je er zelf een pagina op kon zetten.

Wanneer verscheen de eerste CSS-standaard?
In 1996. Tot dan bepaalde de browser zelf hoe een pagina eruitzag; met CSS kwam de opmaak
in een apart bestand, los van de inhoud.

Wanneer werd HTML5 een officiele standaard?
In 2014, na jaren van discussie tussen browserbouwers. Elementen als details, video en
article horen daarbij.
```
