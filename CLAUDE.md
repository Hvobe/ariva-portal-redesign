# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Ariva Portal Redesign project - a modern redesign of the ARIVA.DE financial portal. The project focuses on the main redesign implementation with improved UX/UI.

## Main Files

### Core Redesign Files
- **`ariva-redesign.html`** - Main redesign implementation page
- **`ariva-redesign.css`** - Core CSS with design system variables and base styles
- **`index.html`** - Project overview/demo page

### Assets
- `ariva-logo.png` / `ariva-logo.svg` - Logo files
- `arivalogo.png` - Alternative logo file

### Archive Folder
The `archive/` folder contains additional prototypes, documentation, and component files that were part of the development process but are not essential for the main redesign.

## Design System

The project uses CSS custom properties for consistent theming:
- Primary color: `#0d47a1` (modern dark blue)
- Accent color: `#c62828` (modern red)  
- Spacing system with variables (`--spacing-sm`, `--spacing-md`, etc.)
- Responsive breakpoints: Desktop (>1024px), Tablet (768-1024px), Mobile (<768px)

## Development

This is a static website project. To view:

1. **Open directly**: Open `ariva-redesign.html` in a browser
2. **Local server** (optional):
   ```bash
   python3 -m http.server 8000
   # or
   npx http-server
   ```

## Key Features

- Modern, clean design with increased whitespace
- Two-level navigation structure
- Integrated search with chart functionality
- Mobile-responsive design
- CSS-only effects for performance
- No external dependencies - vanilla HTML/CSS only