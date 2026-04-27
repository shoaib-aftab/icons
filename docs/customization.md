# Customization

The Shoaib Aftab Icons library is highly customizable. Because it uses inline SVG sprites and standard CSS, you can easily tweak colors, sizes, and shapes.

## Colors
The SVGs use `currentColor` for their `stroke` (and `fill` for brand icons). This means you can color them simply by changing the text color of the parent element.

```html
<div class="sa-text-danger-600">
  <svg class="sa-icon"><use href="#sa-icon-heart"></use></svg>
</div>
```

## Shapes
We provide two distinct shape variants:
1.  **Round:** `.sa-icon-round` (Soft, rounded edges using `stroke-linecap: round; stroke-linejoin: round;`)
2.  **Square:** `.sa-icon-square` (Sharp, angular edges using `stroke-linecap: square; stroke-linejoin: miter;`)

```html
<svg class="sa-icon sa-icon-square"><use href="#sa-icon-box"></use></svg>
```

## Sizing
Sizes are controlled via predefined utility classes based on `rem` units:
-   `sa-icon-xs`: 0.75rem
-   `sa-icon-sm`: 1rem
-   `sa-icon-base`: 1.5rem
-   `sa-icon-lg`: 2rem
-   `sa-icon-xl`: 2.5rem
-   `sa-icon-2xl`: 3rem

## Extending
You can easily add your own animations or CSS filters to the `.sa-icon` class.
