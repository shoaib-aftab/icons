# Usage Guide

## Installation

You can use the icons directly by including the CSS and the SVG Sprite in your project.

### 1. Include CSS
```html
<link rel="stylesheet" href="path/to/sat-icons.css">
```

### 2. Include SVG Sprite
Inject the `sat-icons.svg` into the body of your HTML document, or reference it externally (e.g., `sat-icons.svg#sat-icon-home`).

## Basic Usage

Use the `<svg>` tag combined with the `<use>` tag to render an icon.

```html
<svg class="sat-icon">
  <use href="#sat-icon-home"></use>
</svg>
```

## Shapes (Round vs Square)

By default, standard icons are rendered based on the `.sat-icon` class properties. You can explicitly enforce shapes:

**Round (Soft edges):**
```html
<svg class="sat-icon sat-icon-round">
  <use href="#sat-icon-user"></use>
</svg>
```

**Square (Sharp edges):**
```html
<svg class="sat-icon sat-icon-square">
  <use href="#sat-icon-user"></use>
</svg>
```

## Sizing
- `.sat-icon-xs`
- `.sat-icon-sm`
- `.sat-icon-base` (default 1.5rem)
- `.sat-icon-lg`
- `.sat-icon-xl`
- `.sat-icon-2xl`

## Animations
- `.sat-icon-spin`
- `.sat-icon-pulse`
- `.sat-icon-bounce`
- `.sat-icon-flip`