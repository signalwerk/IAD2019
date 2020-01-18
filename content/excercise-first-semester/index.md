---
title: Semesterprüfung · IAD2019
description: Semesterprüfung · IAD2019
---

# Semesterprüfung · IAD2019
<small>Durchführung 18. 1. 2020</small>

---

## Ablauf
**12:45 – 13:00** · Einführung  
**13:00 – 14:15** · Aufgabe lösen  
**14:15 – 14:45** · Pause  
**14:45 – 15:55** · Aufgabe lösen  
**15:55 – 16:15** · Review  

<br />

---

## Thema
Anmeldung für Online-Dienst

## Umfeld
Sobald eine Webseite oder ein Online-Dienst personalisierte Informationen bereit hält, muss der User sich gegenüber dem Service autentifizieren. Klassisch geschieht dies mittels Account. Somit haben viele Websites ein Anmeldeformular für eben solches.

## Aufgabestellung
Entwickeln Sie eine Seite (ohne sonstigen Inhalt), mit der sich ein Benutzer für einen Service anmelden kann. Dabei ist darauf zu acheten, dass neue Benutzer, wie auch Benutzer mit bestehenden Accounts sich schnell beim Service anmelden können. Es muss ein klassisches Anmeldeverfahren mit Username und Passwort umgesetzt werden.

Folgende Informationen müssen für den Betreiber des Services in der Anmeldung abgefragt werden:


* **E-Mail-Adresse** – Verifizierung erforderlich
* **Username** – werden auf dem Dienst intensiv zur Identitätsbildung verwendet (@-Handle)
* **Passwort** – minimale stärke vom Passwort
* **AGB** – Allgemeine Geschäftsbedingungen wurden angenommen

## Umfang
1. Visualisieren Sie alle nötigen Schritte als Wireframe (einfacher Seitenaufbau ohne grafische Detailausarbeitung) um sich beim Service anzumelden.
2. Notieren Sie zu jedem Interaktions-Element mögliche Status ((siehe unten)) und wann diese aktiv sein sollen. Dabei ist darauf zu achten, dass diese Vorlage als Skizze für die Umsetzung dienen kann. Alle funktionalen Zusammenhänge müssen somit aufgezeigt/beschrieben sein.

## Technologie
Die Visualisierung muss für Mobile funktionieren. Die Angaben zum Status müssen auch für Desktop funktionieren und alle Möglichkeiten bedenken.

## Arbeitstechnik
Die Arbeitstechnik ist den Studierenden frei gestellt. Es wird jedoch empfohlen in Itterationen zu arbeiten. Zuerst sollte also möglichst reduziert ein Entwurf fertig gemacht werden und erst danach dieser Schritt um Schritt ausgearbeitet werden.

## Abgabe
Die Visualisierung muss bis 15:55 Uhr als [GitHub-Issue](https://github.com/signalwerk/IAD2019/issues) abgegeben werden.


## Bewertung
### Technik (15%)
* Die Abgegebenen Visualisierungen sind für eine technische Realisation aussagekräftig
* Die Realisation mittels Browser-Technologie ist gegeben

### Inhalt (20%)
* Inhaltliche Strukturen wurden geschaffen
* Alle Inhaltselemente wurden genügend Visualisiert
* Inhalte wurden wo nötig mit Platzhalter visualisiert

### Interaktion/Führung (50%)
* Interaktion ist schlüssig und schnell zugänglich
* Interaktion wurde für Touch-Screen optimiert
* Fehlerhafte oder inkompatible Eingaben wurden in der Führung berücksichtigt
* Die Führung ist überlegt und offensichtlich
* Gewohnte Interface-Konzepte

### Grafisches Konzept (15%)
* Der grafische Aufbau ist schlüssig und durchgängig
* Typografische Abstufung und Grössenverhältnisse sind sinnvoll gewählt.
* Screenarchitektur überlegt
* Zweckmässigkeit gegeben


---

## Beispiele


### Status
Um zu verdeutlichen, was mit möglichen Status eines Interaktions-Element gemeint sein könnte, hier ein kontextfreies Beispiel anhand eines Sliders:

<br />

![Beispiel Slider Status](./img/slide-status.svg)


### Funktionale Zusammenhänge
Die Express-Funktion kann zwischen 22:00 – 6:00 Uhr nicht ausgewählt werden deshalb wird dann das Element durch das Mond-Icon (schlafen) symbolisiert.
