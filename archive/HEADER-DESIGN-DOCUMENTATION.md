# Ariva Header Redesign - Präzise Design-Dokumentation

## Übersicht

Dieses Dokument enthält die exakten Spezifikationen für das neue Ariva Header-Design mit zweistufiger Navigation, modernen Farben und verbessertem Weißraum.

## Visuelle Struktur

```
┌─────────────────────────────────────────────────────────────────┐
│  EBENE 1 (60px) - Weiß                                          │
│  ┌──────┐  ┌─────────────────────┐  ┌─────────────────┐       │
│  │ LOGO │  │     SUCHLEISTE      │  │ Login | 🔔 | ❓ │       │
│  └──────┘  └─────────────────────┘  └─────────────────┘       │
├─────────────────────────────────────────────────────────────────┤
│  EBENE 2 (60px) - Dunkelblau (#0D47A1)                         │
│  Märkte ▼ | News | Analysen | Tools ▼ | Forum | Wissen  [PC]  │
└─────────────────────────────────────────────────────────────────┘
```

## Exakte Maße

### Gesamtstruktur
- **Header Gesamthöhe**: 120px
  - Ebene 1: 60px
  - Ebene 2: 60px
- **Horizontales Padding**: 24px beidseitig
- **Max-Breite Content**: 1400px (zentriert)

### Logo-Bereich
- **Container**: 140px × 40px
- **Schrift "ARIVA"**: 32px, bold, #0D47A1
- **Schrift ".DE"**: 24px, bold, #C62828
- **Letter-Spacing**: -1px

### Suchleiste
- **Breite**: 500px (max-width)
- **Höhe**: 44px
- **Border-Radius**: 22px (volle Rundung)
- **Hintergrund**: #F5F5F5
- **Padding Links**: 20px
- **Padding Rechts**: 110px (für Buttons)

### Such-Buttons
- **Button Größe**: 36px × 36px
- **Icon Größe**: 20px × 20px
- **Abstand zwischen Buttons**: 4px
- **Trennlinie**: 1px breit, 24px hoch, #E0E0E0

### User Actions (Rechts)
- **Button Größe**: 40px × 40px
- **Icon Größe**: 24px × 24px
- **Abstand zwischen Elementen**: 20px
- **Login Text**: 15px, font-weight: 500

### Navigation (Ebene 2)
- **Nav Item Padding**: 0 24px
- **Schriftgröße**: 16px, font-weight: 500
- **Dropdown Indikator**: ▼ (10px)
- **Hover Background**: rgba(255,255,255,0.1)

### Portfolio-Checker Button
- **Padding**: 10px 24px
- **Border-Radius**: 24px
- **Hintergrund**: #C62828
- **Schrift**: 16px, font-weight: 600
- **Icon Abstand**: 8px

### Dropdown-Menü
- **Breite**: 320px (min-width)
- **Padding**: 16px
- **Border-Radius**: 8px
- **Grid**: 2 Spalten, 8px Gap
- **Item Padding**: 12px 16px
- **Item Border-Radius**: 6px
- **Box-Shadow**: 0 8px 24px rgba(0,0,0,0.15)

## Farbspezifikationen

### Hauptfarben
```css
Primär (Dunkelblau): #0D47A1
Primär Hover:        #1565C0
Akzent (Rot):        #C62828
Akzent Hover:        #B71C1C
```

### Hintergrundfarben
```css
Weiß:                #FFFFFF
Hellgrau (Input):    #F5F5F5
Hellgrau (Hover):    #EEEEEE
```

### Textfarben
```css
Primärtext:          #212121
Sekundärtext:        #757575
Weißer Text:         #FFFFFF
```

### Weitere
```css
Border:              #E0E0E0
Shadow:              rgba(0,0,0,0.1)
Focus Shadow:        rgba(13,71,161,0.1)
```

## Typografie

### Schriftfamilie
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;
```

### Schriftgrößen
- Logo "ARIVA": 32px, bold
- Logo ".DE": 24px, bold
- Navigation: 16px, medium (500)
- Suchfeld: 15px, regular
- Kleine Texte: 14px, regular

## Interaktionen

### Hover-Effekte
- **Navigation Links**: Background rgba(255,255,255,0.1)
- **Portfolio-Checker**: Transform translateY(-1px), Shadow verstärkt
- **Dropdown Items**: Background #F5F5F5, Text #0D47A1
- **User Buttons**: Background #F5F5F5

### Transitions
- **Standard**: 200ms ease
- **Dropdown Animation**: fadeIn 200ms ease

### Focus-States
- **Suchfeld**: Background #EEEEEE, Shadow 0 0 0 3px rgba(13,71,161,0.1)

## Responsive Breakpoints

### Desktop (> 1200px)
- Volle Breite, alle Elemente sichtbar

### Tablet (768px - 1200px)
- Suchleiste: 400px Breite
- Padding: 20px

### Mobile (< 768px)
- Header Höhe: 100px (50px + 50px)
- Padding: 16px
- Navigation: Hamburger-Menü
- Suchleiste: Volle Breite

## Asset-Klassen Dropdown

```
┌─────────────────────────┐
│ 📈 Aktien    💰 Fonds   │
│ 📊 ETFs      📜 Zert.   │
│ 🏛️ Hebel     📉 Anleihen│
│ 💱 Devisen   ⚡ Rohstoffe│
└─────────────────────────┘
```

## Kurse-Ticker (Optional)
- Position: Zwischen Navigation und Portfolio-Checker
- Schriftgröße: 14px
- Format: "Label Wert Change"
- Farben: Grün (#4CAF50) / Rot (#F44336)

## Z-Index Hierarchie
```
Header:     1000
Dropdown:   1100
Modal:      1200
```

## Implementierungs-Hinweise

1. **Semantisches HTML**: `<header>`, `<nav>`, `<ul>`, `<li>`
2. **Accessibility**: ARIA-Labels für alle Buttons
3. **Performance**: CSS Custom Properties für einfache Theme-Anpassung
4. **Browser Support**: Flexbox/Grid mit Fallbacks

## Datei-Referenzen

- **Live Demo**: `header-design-precise.html`
- **CSS Specs**: `header-specifications.css`
- **Implementation**: Siehe bestehende Dateien im Projekt