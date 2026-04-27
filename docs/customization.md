# Customization

The SAT Icons library is highly customizable. Because it uses inline SVG sprites and standard CSS, you can easily tweak colors, sizes, and shapes.

## Colors
The SVGs use `currentColor` for their `stroke` (and `fill` for brand icons). This means you can color them simply by changing the text color of the parent element.

```html
<div class="sat-text-danger-600">
  <svg class="sat-icon"><use href="#sat-icon-heart"></use></svg>
</div>
```

## Shapes
We provide two distinct shape variants:
1.  **Round:** `.sat-icon-round` (Soft, rounded edges using `stroke-linecap: round; stroke-linejoin: round;`)
2.  **Square:** `.sat-icon-square` (Sharp, angular edges using `stroke-linecap: square; stroke-linejoin: miter;`)

```html
<svg class="sat-icon sat-icon-square"><use href="#sat-icon-box"></use></svg>
```

## Sizing
Sizes are controlled via predefined utility classes based on `rem` units:
-   `sat-icon-xs`: 0.75rem
-   `sat-icon-sm`: 1rem
-   `sat-icon-base`: 1.5rem
-   `sat-icon-lg`: 2rem
-   `sat-icon-xl`: 2.5rem
-   `sat-icon-2xl`: 3rem

## Extending
You can easily add your own animations or CSS filters to the `.sat-icon` class.
