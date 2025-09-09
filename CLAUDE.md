# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Ariva Portal Redesign is a modern reimplementation of the ARIVA.DE financial portal, focusing on improved UX/UI with a cleaner, more modern design. This is a static website project using vanilla HTML/CSS with no external dependencies.

## Repository Structure

```
/Users/hendrik/Ariva Portal/
├── index.html                 # Main portal page with mega menu navigation
├── login.html                 # Login/registration page with modern design
├── ariva-header-redesign.css  # Primary CSS with all navigation and component styles
├── ariva-redesign.css         # Design system variables and base utility classes
├── arivalogo.png              # Primary logo file
└── archive/                   # Development prototypes and documentation
    ├── IMPLEMENTATION-GUIDE.md
    ├── HEADER-DESIGN-DOCUMENTATION.md
    └── [various prototype files]
```

## Architecture

### CSS Architecture
The project uses a two-tier CSS structure:
1. **`ariva-redesign.css`**: Design system foundation with CSS custom properties for colors, typography, spacing, and utility classes
2. **`ariva-header-redesign.css`**: Component-specific styles for header, navigation, search, and page layouts

### Navigation System
- **Two-level mega menu**: Primary navigation (Märkte, News, Analysen, Tools, Forum, Wissen) with dropdown submenus
- **Bloomberg-style design**: Compact mega menu with vertical dividers and organized categories
- **Mobile-responsive**: Hamburger menu for mobile devices with slide-out navigation

### Search Component
- Integrated search bar with real-time results dropdown
- Onvista-style search results with sections for stocks, indices, and commodities
- Quick access buttons for charts and discussions

## Design System

### Color Palette
```css
--color-primary: #1e3a5f;      /* Dark blue for header */
--color-accent: #e53e3e;        /* Red for CTAs */
--color-positive: #10b981;     /* Green for positive values */
--color-negative: #ef4444;     /* Red for negative values */
```

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px  
- Mobile: < 768px

### Z-index Layers
```css
--z-dropdown: 1000;
--z-dropdown-level3: 1001;
--z-sticky: 1020;
--z-modal: 1050;
```

## Development Commands

Since this is a static site with no build process:

```bash
# View locally with Python
python3 -m http.server 8000

# View locally with Node.js
npx http-server

# Or simply open index.html in a browser
```

## Key Implementation Details

### Market Ticker
The market ticker bar at the top displays real-time market data with color-coded changes (green/red).

### Search Functionality
Search results are currently mocked in HTML. JavaScript interaction is handled inline for:
- Mobile search toggle
- Dropdown menu interactions
- Chart popup functionality

### Login Page
Separate modern login design with:
- Split-screen layout (login vs. registration)
- Password visibility toggle
- Social login options
- Mobile-responsive design

## GitHub Repository

Repository URL: https://github.com/Hvobe/ariva-portal-redesign