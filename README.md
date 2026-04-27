<div align="center">
  <img src="https://img.shields.io/badge/Shoaib%20Aftab-Icons-2563eb?style=for-the-badge&logo=appwrite&logoColor=white" alt="Shoaib Aftab Icons Logo">
  <h1>Shoaib Aftab Icons Framework</h1>
  <p><strong>A Modern, Lightweight, RTL-ready SVG Icon Library for Global Software Development.</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)](https://opensource.org/licenses/MIT)
  [![Version](https://img.shields.io/npm/v/@shoaib-aftab-tech/icons)](https://www.npmjs.com/package/@shoaib-aftab-tech/icons)
</div>

---

## 🚀 Features

- **500+ Premium SVG Icons:** Categorized into General, Actions, Business, Medical, Weather, Entertainment, Brands, Islamic, Pakistani, and more.
- **Dynamic Shapes:** Effortlessly switch between `Round` (soft, rounded edges) and `Square` (sharp, mitered edges) using purely CSS classes (`.sa-icon-round` vs `.sa-icon-square`). No duplicate SVGs required!
- **Original Brand Colors:** Brand icons (Google, Meta, AWS, etc.) inherently retain their official brand colors, while standard UI icons adapt to your parent text color (`currentColor`).
- **Zero Dependencies:** 100% pure SVG Sprite + CSS. No JavaScript needed for rendering.
- **RTL Ready:** Directional icons (arrows, chevrons) automatically flip when the document direction is set to `dir="rtl"`.
- **Built-in Animations:** Ready-to-use utility classes for `spin`, `pulse`, `bounce`, and `flip`.

---

## 📦 Installation

### Option 1: Via NPM
```bash
npm install @shoaib-aftab-tech/icons
```

### Option 2: Via CDN (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoaib-aftab-tech/icons@latest/dist/sa-icons.min.css">
```

---

## 🛠️ Basic Usage

1. Include the `sa-icons.css` file in your `<head>`.
2. Ensure the `sa-icons.svg` sprite is loaded (either injected into the DOM or referenced externally).
3. Use the `<svg>` and `<use>` tags to render an icon:

```html
<!-- Default Round Icon -->
<svg class="sa-icon sa-icon-round sa-text-primary-600">
  <use href="path/to/sa-icons.svg#sa-icon-home"></use>
</svg>

<!-- Sharp Square Icon -->
<svg class="sa-icon sa-icon-square sa-text-danger-600">
  <use href="path/to/sa-icons.svg#sa-icon-trash"></use>
</svg>

<!-- Animated Icon -->
<svg class="sa-icon sa-icon-spin">
  <use href="path/to/sa-icons.svg#sa-icon-loader"></use>
</svg>
```

---

## 📚 Documentation

For complete lists and advanced customization, see our documentation folder:

- [Usage Guide](docs/usage.md) - Detailed instructions on sizing, coloring, and RTL support.
- [Icon List](docs/icon-list.md) - Full searchable list of all 500+ available icons.
- [Customization](docs/customization.md) - How to extend the CSS and animations.
- **Live Example:** Open `examples/index.html` in your browser to see the interactive gallery.

---

## About Shoaib Aftab Tech
💻 **Specializing in Custom Development:** We build future-proof software, intuitive mobile apps, professional websites, scalable e-commerce platforms, and API development (WhatsApp Business API).
🔧 **Your End-to-End Partner:** From initial concept to successful scaling, we provide complete digital solutions for your business.
🤝 **Ready to Build & Grow?** Let's connect to discuss your project and strategic goals.

Visit us at: [shoaibaftab.com](https://shoaibaftab.com)
Facebook: [Shoaib Aftab Tech](https://facebook.com/ShoaibAftabTech)
