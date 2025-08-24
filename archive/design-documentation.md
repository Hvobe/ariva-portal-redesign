# ARIVA.DE Header Redesign - Design-Dokumentation

## Übersicht

Diese Dokumentation beschreibt das neue Header-Design für ARIVA.DE, das auf den Anforderungen aus dem Stakeholder-Meeting basiert.

## Design-Prinzipien

### 1. Mehr Weißraum
- Großzügigere Abstände zwischen allen Elementen
- Padding erhöht von 12px auf 16px vertikal
- Gap zwischen Elementen von 20px auf 32px erhöht
- Luftigeres, moderneres Erscheinungsbild

### 2. Moderne Farbgebung mit Markenidentität
- **Primärfarbe**: #1e3a5f (Modernes Dunkelblau, heller als aktuell)
- **Akzentfarbe**: #e53e3e (Lebendiges Rot, freundlicher als aktuell)
- **Hintergrund**: #ffffff (Reines Weiß) mit #f8f9fa (Hellgrau) für Akzente
- **Text**: #1f2937 (Dunkles Grau) für bessere Lesbarkeit

### 3. Zweistufige Navigation
**Ebene 1**: Logo | Suche mit Chart | Services | User-Bereich
**Ebene 2**: Asset-Klassen (Aktien, Fonds, ETFs, etc.)

Vorteile:
- Mehr Platz für neue Services
- Bessere Strukturierung
- Flexibilität für zukünftige Erweiterungen

## Key Features

### Chart-Integration in der Suche
```html
<div class="search-container">
    <input type="text" placeholder="Name / WKN / ISIN">
    <button class="chart-toggle" title="Chart anzeigen">
        <!-- Chart Icon -->
    </button>
</div>
```
- Ein-Klick-Zugriff auf Charts
- Inspiration von TradingView
- Nahtlose Integration ohne Überladung

### Portfolio-Checker (ehemals "Depot")
- Klare, nicht-abschreckende Benennung
- Prominente rote Platzierung beibehalten
- Hover-Effekt für bessere Interaktion

### Mobile-First Responsive Design
- Hamburger-Menü ab 1024px
- Suchleiste nimmt volle Breite auf Mobile
- Touch-optimierte Interaktionselemente

## CSS-Variablen-System

```css
:root {
    --color-primary: #1e3a5f;
    --color-accent: #e53e3e;
    --spacing-md: 16px;
    --radius-full: 9999px;
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}
```

Vorteile:
- Einfache Farbanpassungen ohne Code-Änderungen
- Konsistente Abstände und Größen
- Zentrale Verwaltung des Design-Systems

## Implementierungsstrategie

### Phase 1: CSS-Update (1 Woche)
1. CSS-Variablen einführen
2. Basis-Styles modernisieren
3. Typography aktualisieren

### Phase 2: Header-Struktur (2 Wochen)
1. HTML für 2-Ebenen-Navigation
2. Responsive Breakpoints
3. Interaktionselemente

### Phase 3: Features (1-2 Wochen)
1. Chart-Toggle implementieren
2. Portfolio-Checker Rebranding
3. Performance-Optimierung

## Performance-Überlegungen

- Keine schweren Frameworks
- Optimierte SVG-Icons
- CSS-only Hover-Effekte
- Lazy-Loading für Chart-Komponente

## Accessibility

- ARIA-Labels für alle interaktiven Elemente
- Keyboard-Navigation vollständig unterstützt
- Kontrastverhältnisse WCAG AA konform
- Focus-States klar erkennbar

## Browser-Kompatibilität

- Chrome/Edge: Vollständig unterstützt
- Firefox: Vollständig unterstützt
- Safari: Vollständig unterstützt
- IE11: Graceful Degradation

## Nächste Schritte

1. **Stakeholder-Feedback** einholen
2. **A/B-Testing** für schrittweise Einführung planen
3. **Component Library** für konsistente Umsetzung erstellen
4. **Migration Guide** für bestehende Seiten entwickeln

---

## Kontakt

Bei Fragen zum Design oder zur Implementierung wenden Sie sich bitte an das UX/UI-Team.