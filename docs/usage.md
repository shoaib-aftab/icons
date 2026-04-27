# Usage Guide

## Installation

You can use the icons directly by including the CSS and the SVG Sprite in your project.

### 1. Include CSS
```html
<link rel="stylesheet" href="path/to/sa-icons.css">
```

### 2. Include SVG Sprite
Inject the `sa-icons.svg` into the body of your HTML document, or reference it externally (e.g., `sa-icons.svg#sa-icon-home`).

## Basic Usage

Use the `<svg>` tag combined with the `<use>` tag to render an icon.

```html
<svg class="sa-icon">
  <use href="#sa-icon-home"></use>
</svg>
```

## Shapes (Round vs Square)

By default, standard icons are rendered based on the `.sa-icon` class properties. You can explicitly enforce shapes:

**Round (Soft edges):**
```html
<svg class="sa-icon sa-icon-round">
  <use href="#sa-icon-user"></use>
</svg>
```

**Square (Sharp edges):**
```html
<svg class="sa-icon sa-icon-square">
  <use href="#sa-icon-user"></use>
</svg>
```

## Sizing
- `.sa-icon-xs`
- `.sa-icon-sm`
- `.sa-icon-base` (default 1.5rem)
- `.sa-icon-lg`
- `.sa-icon-xl`
- `.sa-icon-2xl`

## Animations
- `.sa-icon-spin`
- `.sa-icon-pulse`
- `.sa-icon-bounce`
- `.sa-icon-flip`