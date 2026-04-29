📋 Shoaib Aftab Icons لائبریری - مکمل ہدایات برائے AI ایجنٹ

---

🎯 پروجیکٹ کا تعارف

شے تفصیل
نام Shoaib Aftab Icons
npm پیکج @shoaib-aftab-tech/icons
GitHub ریپو shoaib-aftab-tech/sa-icons
پریفکس تمام آئیکن کلاسز sa-icon- سے شروع
مقصد جدید، ہلکی، RTL-ready SVG آئیکن لائبریری
انحصار صفر - 100% خالص SVG
فارمیٹ SVG Sprite + Icons کلاسز
کل آئیکنز 500+ (تمام کیٹگریز)
فائل سائز 80-120 KB (کمپریسڈ اسپرائٹ)
لائسنس MIT

---

📁 مرحلہ 1: پروجیکٹ ڈھانچہ

```
sa-icons/
├── package.json
├── README.md
├── LICENSE
├── src/
│   ├── sa-icons.icons          ← Icons کلاسز
│   ├── sa-icons.svg          ← SVG اسپرائٹ (تمام آئیکنز)
│   └── icons/                 ← انفرادی SVG فائلیں
│       ├── general/           ← 50 آئیکنز
│       ├── actions/           ← 40 آئیکنز
│       ├── arrows/            ← 25 آئیکنز
│       ├── social/            ← 30 آئیکنز
│       ├── files/             ← 25 آئیکنز
│       ├── communication/     ← 20 آئیکنز
│       ├── business/          ← 35 آئیکنز
│       ├── users/             ← 15 آئیکنز
│       ├── security/          ← 15 آئیکنز
│       ├── devices/           ← 20 آئیکنز
│       ├── weather/           ← 15 آئیکنز
│       ├── maps/              ← 15 آئیکنز
│       ├── transport/         ← 20 آئیکنز
│       ├── food/              ← 15 آئیکنز
│       ├── medical/           ← 20 آئیکنز
│       ├── education/         ← 20 آئیکنز
│       ├── entertainment/     ← 20 آئیکنز
│       ├── islamic/           ← 25 آئیکنز
│       ├── pakistani/         ← 20 آئیکنز
│       ├── brands/            ← 25 آئیکنز
│       └── misc/              ← 30 آئیکنز
├── docs/
│   ├── index.md
│   ├── usage.md
│   ├── icon-list.md
│   └── customization.md
└── examples/
    ├── index.html
    ├── dark-mode.html
    ├── rtl-demo.html
    └── animation.html
```

---

📝 مرحلہ 2: SVG ڈیزائن کے معیارات

تمام آئیکنز کے لیے لازمی اصول:

1. ویو باکس: 0 0 24 24 (معیاری سائز)
2. اسٹروک چوڑائی: 2px
3. اسٹروک کیپ: round
4. اسٹروک جوائن: round
5. فل: none (خالی - تاکہ رنگ بدلا جا سکے)
6. رنگ: currentColor (Icons سے کنٹرول)
7. آپٹیمائزڈ: غیر ضروری کوڈ کے بغیر

SVG ٹیمپلیٹ:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Paths یہاں -->
</svg>
```

---

📝 مرحلہ 3: نام دینے کا کنونشن

کلاس کنونشن:

· بنیادی کلاس: sa-icon
· آئیکن کلاس: sa-icon-{name}
· سائز کلاسز: sa-icon-xs, sa-icon-sm, sa-icon-lg, sa-icon-xl, sa-icon-2xl
· اینیمیشن کلاسز: sa-icon-spin, sa-icon-pulse, sa-icon-bounce, sa-icon-flip

آئیکن ناموں کے اصول:

· lowercase صرف
· الفاظ ڈیش (-) سے الگ
· مختصر مگر واضح
· کوئی مخفف نہیں (مگر عام والے جیسے rss, pdf, qr)

---

🎨 مرحلہ 4: آئیکنز کی مکمل فہرست

4.1 جنرل (General) - 50 آئیکنز

```
sa-icon-home
sa-icon-building
sa-icon-city
sa-icon-globe
sa-icon-world
sa-icon-map-pin
sa-icon-compass
sa-icon-search
sa-icon-zoom-in
sa-icon-zoom-out
sa-icon-settings
sa-icon-sliders
sa-icon-filter
sa-icon-list
sa-icon-grid
sa-icon-menu
sa-icon-more-horizontal
sa-icon-more-vertical
sa-icon-plus
sa-icon-minus
sa-icon-x
sa-icon-check
sa-icon-check-circle
sa-icon-alert-circle
sa-icon-alert-triangle
sa-icon-info
sa-icon-help-circle
sa-icon-bookmark
sa-icon-star
sa-icon-heart
sa-icon-thumbs-up
sa-icon-thumbs-down
sa-icon-share
sa-icon-link
sa-icon-external-link
sa-icon-copy
sa-icon-clipboard
sa-icon-anchor
sa-icon-target
sa-icon-crosshair
sa-icon-award
sa-icon-gift
sa-icon-package
sa-icon-box
sa-icon-container
sa-icon-tag
sa-icon-hash
sa-icon-at-sign
sa-icon-command
sa-icon-terminal
```

4.2 ایکشنز (Actions) - 40 آئیکنز

```
sa-icon-add
sa-icon-create
sa-icon-edit
sa-icon-pencil
sa-icon-delete
sa-icon-trash
sa-icon-save
sa-icon-download
sa-icon-upload
sa-icon-cloud-upload
sa-icon-cloud-download
sa-icon-refresh
sa-icon-rotate-cw
sa-icon-rotate-ccw
sa-icon-sync
sa-icon-archive
sa-icon-unarchive
sa-icon-lock
sa-icon-unlock
sa-icon-key
sa-icon-log-in
sa-icon-log-out
sa-icon-power
sa-icon-play
sa-icon-pause
sa-icon-stop
sa-icon-skip-forward
sa-icon-skip-back
sa-icon-fast-forward
sa-icon-rewind
sa-icon-maximize
sa-icon-minimize
sa-icon-fullscreen
sa-icon-expand
sa-icon-shrink
sa-icon-move
sa-icon-sort
sa-icon-eye
sa-icon-eye-off
sa-icon-send
```

4.3 ایروز (Arrows) - 25 آئیکنز

```
sa-icon-arrow-up
sa-icon-arrow-down
sa-icon-arrow-left
sa-icon-arrow-right
sa-icon-arrow-up-right
sa-icon-arrow-down-left
sa-icon-chevron-up
sa-icon-chevron-down
sa-icon-chevron-left
sa-icon-chevron-right
sa-icon-chevrons-up
sa-icon-chevrons-down
sa-icon-chevrons-left
sa-icon-chevrons-right
sa-icon-corner-up-left
sa-icon-corner-up-right
sa-icon-corner-down-left
sa-icon-corner-down-right
sa-icon-redo
sa-icon-undo
sa-icon-reply
sa-icon-forward
sa-icon-navigation
sa-icon-compass-arrow
sa-icon-arrow-big-up
sa-icon-arrow-big-down
```

4.4 سوشل میڈیا (Social) - 30 آئیکنز

```
sa-icon-facebook
sa-icon-instagram
sa-icon-twitter
sa-icon-x
sa-icon-linkedin
sa-icon-youtube
sa-icon-whatsapp
sa-icon-telegram
sa-icon-tiktok
sa-icon-snapchat
sa-icon-pinterest
sa-icon-reddit
sa-icon-discord
sa-icon-slack
sa-icon-medium
sa-icon-github
sa-icon-gitlab
sa-icon-bitbucket
sa-icon-dribbble
sa-icon-behance
sa-icon-figma
sa-icon-codepen
sa-icon-stackoverflow
sa-icon-dev
sa-icon-messenger
sa-icon-signal
sa-icon-wechat
sa-icon-line
sa-icon-skype
sa-icon-viber
```

4.5 فائلز (Files) - 25 آئیکنز

```
sa-icon-file
sa-icon-file-text
sa-icon-file-plus
sa-icon-file-minus
sa-icon-folder
sa-icon-folder-plus
sa-icon-folder-minus
sa-icon-folder-open
sa-icon-image
sa-icon-video
sa-icon-music
sa-icon-audio
sa-icon-film
sa-icon-camera
sa-icon-aperture
sa-icon-pdf
sa-icon-csv
sa-icon-zip
sa-icon-doc
sa-icon-spreadsheet
sa-icon-presentation
sa-icon-database
sa-icon-hard-drive
sa-icon-sd-card
sa-icon-usb
```

4.6 کمیونیکیشن (Communication) - 20 آئیکنز

```
sa-icon-mail
sa-icon-mail-open
sa-icon-inbox
sa-icon-message-circle
sa-icon-message-square
sa-icon-phone
sa-icon-phone-call
sa-icon-phone-incoming
sa-icon-phone-outgoing
sa-icon-phone-missed
sa-icon-phone-off
sa-icon-voicemail
sa-icon-video-call
sa-icon-headphones
sa-icon-mic
sa-icon-mic-off
sa-icon-speaker
sa-icon-volume
sa-icon-volume-1
sa-icon-volume-2
sa-icon-volume-x
sa-icon-bell
sa-icon-bell-off
sa-icon-rss
```

4.7 بزنس (Business) - 35 آئیکنز

```
sa-icon-briefcase
sa-icon-shopping-cart
sa-icon-shopping-bag
sa-icon-credit-card
sa-icon-wallet
sa-icon-dollar-sign
sa-icon-rupee
sa-icon-euro
sa-icon-pound
sa-icon-yen
sa-icon-bitcoin
sa-icon-bank
sa-icon-building-columns
sa-icon-landmark
sa-icon-shop
sa-icon-store
sa-icon-truck
sa-icon-shipping
sa-icon-bar-chart
sa-icon-pie-chart
sa-icon-trending-up
sa-icon-trending-down
sa-icon-activity
sa-icon-percent
sa-icon-receipt
sa-icon-invoice
sa-icon-barcode
sa-icon-qr-code
sa-icon-calculator
sa-icon-printer
sa-icon-scissors
sa-icon-scale
sa-icon-badge-percent
sa-icon-trophy
sa-icon-gem
```

4.8 یوزرز (Users) - 15 آئیکنز

```
sa-icon-user
sa-icon-users
sa-icon-user-plus
sa-icon-user-minus
sa-icon-user-x
sa-icon-user-check
sa-icon-avatar
sa-icon-crown
sa-icon-user-cog
sa-icon-contact
sa-icon-address-book
sa-icon-id-card
sa-icon-fingerprint
sa-icon-ban
sa-icon-shield
```

4.9 سیکیورٹی (Security) - 15 آئیکنز

```
sa-icon-shield-check
sa-icon-shield-off
sa-icon-shield-alert
sa-icon-lock-keyhole
sa-icon-key-round
sa-icon-scan
sa-icon-scan-face
sa-icon-scan-line
sa-icon-shield-lock
sa-icon-encryption
sa-icon-password
sa-icon-vpn
sa-icon-server
sa-icon-cloud-lock
sa-icon-certificate
```

4.10 ڈیوائسز (Devices) - 20 آئیکنز

```
sa-icon-monitor
sa-icon-laptop
sa-icon-tablet
sa-icon-smartphone
sa-icon-mobile
sa-icon-watch
sa-icon-cpu
sa-icon-chip
sa-icon-memory
sa-icon-battery
sa-icon-battery-charging
sa-icon-wifi
sa-icon-wifi-off
sa-icon-bluetooth
sa-icon-cast
sa-icon-airplay
sa-icon-tv
sa-icon-radio
sa-icon-speaker-device
sa-icon-projector
```

4.11 ویدر (Weather) - 15 آئیکنز

```
sa-icon-sun
sa-icon-moon
sa-icon-cloud
sa-icon-cloud-rain
sa-icon-cloud-snow
sa-icon-cloud-lightning
sa-icon-umbrella
sa-icon-droplet
sa-icon-wind
sa-icon-thermometer
sa-icon-sunrise
sa-icon-sunset
sa-icon-moon-stars
sa-icon-cloud-drizzle
sa-icon-tornado
```

4.12 میپس (Maps) - 15 آئیکنز

```
sa-icon-map
sa-icon-map-pinned
sa-icon-navigation-2
sa-icon-locate
sa-icon-locate-fixed
sa-icon-locate-off
sa-icon-route
sa-icon-directions
sa-icon-signpost
sa-icon-traffic
sa-icon-parking
sa-icon-pin
sa-icon-land-plot
sa-icon-layers
sa-icon-compass-needle
```

4.13 ٹرانسپورٹ (Transport) - 20 آئیکنز

```
sa-icon-car
sa-icon-bus
sa-icon-train
sa-icon-plane
sa-icon-ship
sa-icon-bike
sa-icon-truck-transport
sa-icon-taxi
sa-icon-helicopter
sa-icon-rocket
sa-icon-anchor-transport
sa-icon-fuel
sa-icon-gauge
sa-icon-steering-wheel
sa-icon-traffic-cone
sa-icon-road
sa-icon-highway
sa-icon-bridge
sa-icon-tunnel
sa-icon-wheelchair
```

4.14 فوڈ (Food) - 15 آئیکنز

```
sa-icon-coffee
sa-icon-cup
sa-icon-glass
sa-icon-wine
sa-icon-beer
sa-icon-utensils
sa-icon-utensils-crossed
sa-icon-chef-hat
sa-icon-pizza
sa-icon-ice-cream
sa-icon-cake
sa-icon-candy
sa-icon-apple
sa-icon-croissant
sa-icon-egg
```

4.15 میڈیکل (Medical) - 20 آئیکنز

```
sa-icon-heart-pulse
sa-icon-heart-medical
sa-icon-activity-heart
sa-icon-stethoscope
sa-icon-thermometer-medical
sa-icon-pill
sa-icon-capsule
sa-icon-syringe
sa-icon-vaccine
sa-icon-bandage
sa-icon-first-aid
sa-icon-hospital
sa-icon-ambulance
sa-icon-tooth
sa-icon-eye-medical
sa-icon-brain
sa-icon-dna
sa-icon-microscope
sa-icon-test-tubes
sa-icon-report-medical
```

4.16 ایجوکیشن (Education) - 20 آئیکنز

```
sa-icon-book
sa-icon-book-open
sa-icon-bookmark-filled
sa-icon-graduation-cap
sa-icon-school
sa-icon-library
sa-icon-pencil-ruler
sa-icon-ruler
sa-icon-calculator-math
sa-icon-abacus
sa-icon-atom
sa-icon-flask
sa-icon-telescope
sa-icon-globe-education
sa-icon-languages
sa-icon-alphabet
sa-icon-palette
sa-icon-music-note
sa-icon-theater
sa-icon-backpack
```

4.17 انٹرٹینمنٹ (Entertainment) - 20 آئیکنز

```
sa-icon-gamepad
sa-icon-gamepad-2
sa-icon-joystick
sa-icon-dice
sa-icon-puzzle
sa-icon-ticket
sa-icon-tickets
sa-icon-popcorn
sa-icon-clapperboard
sa-icon-play-circle
sa-icon-pause-circle
sa-icon-stop-circle
sa-icon-disc
sa-icon-guitar
sa-icon-piano
sa-icon-radio-entertainment
sa-icon-camera-entertainment
sa-icon-mic-entertainment
sa-icon-headphones-entertainment
sa-icon-bowling
```

4.18 اسلامی (Islamic) - 25 آئیکنز

```
sa-icon-quran
sa-icon-mosque
sa-icon-minaret
sa-icon-crescent
sa-icon-star-crescent
sa-icon-prayer-mat
sa-icon-prayer
sa-icon-kaaba
sa-icon-makkah
sa-icon-madinah
sa-icon-tasbih
sa-icon-dua
sa-icon-allah
sa-icon-muhammad
sa-icon-islam
sa-icon-halal
sa-icon-zakat
sa-icon-sadaqah
sa-icon-ramadan
sa-icon-eid
sa-icon-hajj
sa-icon-umrah
sa-icon-wudu
sa-icon-adhan
sa-icon-islamic-calendar
```

4.19 پاکستانی (Pakistani) - 20 آئیکنز

```
sa-icon-pakistan
sa-icon-pakistan-flag
sa-icon-lahore
sa-icon-karachi
sa-icon-islamabad
sa-icon-cnic
sa-icon-rupee-coin
sa-icon-urdu
sa-icon-truck-art
sa-icon-cricket
sa-icon-cricket-bat
sa-icon-hockey
sa-icon-minar-e-pakistan
sa-icon-badshahi-mosque
sa-icon-faisal-mosque
sa-icon-mazar-e-quaid
sa-icon-k2
sa-icon-chand-tara
sa-icon-shalwar-kameez
sa-icon-jinnah-cap
```

4.20 برانڈز (Brands) - 25 آئیکنز

```
sa-icon-google
sa-icon-chrome
sa-icon-apple
sa-icon-microsoft
sa-icon-windows
sa-icon-android
sa-icon-play-store
sa-icon-app-store
sa-icon-amazon
sa-icon-meta
sa-icon-openai
sa-icon-chatgpt
sa-icon-netflix
sa-icon-spotify
sa-icon-paypal
sa-icon-stripe
sa-icon-visa
sa-icon-mastercard
sa-icon-aws
sa-icon-firebase
sa-icon-docker
sa-icon-linux
sa-icon-ubuntu
sa-icon-npm-icon
sa-icon-nodejs
```

4.21 متفرق (Misc) - 30 آئیکنز

```
sa-icon-clock
sa-icon-calendar
sa-icon-hourglass
sa-icon-alarm
sa-icon-timer
sa-icon-history
sa-icon-loader
sa-icon-spinner
sa-icon-palette-misc
sa-icon-brush
sa-icon-paint-bucket
sa-icon-eraser
sa-icon-magnet
sa-icon-zap
sa-icon-lightbulb
sa-icon-lamp
sa-icon-flashlight
sa-icon-fire
sa-icon-water
sa-icon-leaf
sa-icon-flower
sa-icon-tree
sa-icon-mountain
sa-icon-snowflake
sa-icon-rainbow
sa-icon-infinity
sa-icon-percent-misc
sa-icon-divide
sa-icon-equal
sa-icon-smile
```

---

🎨 مرحلہ 5: Icons کلاسز

```icons
/* ========== بنیادی آئیکن کلاس ========== */
.sa-icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  vertical-align: middle;
  flex-shrink: 0;
}

/* ========== سائز ویریئنٹس ========== */
.sa-icon-xs { width: 0.75rem; height: 0.75rem; stroke-width: 2.5; }
.sa-icon-sm { width: 1rem; height: 1rem; }
.sa-icon-base { width: 1.5rem; height: 1.5rem; }
.sa-icon-lg { width: 2rem; height: 2rem; }
.sa-icon-xl { width: 2.5rem; height: 2.5rem; }
.sa-icon-2xl { width: 3rem; height: 3rem; }

/* ========== رنگ (Icons inherit کرتا ہے) ========== */
.sa-icon-primary { color: var(--sa-primary-600); }
.sa-icon-secondary { color: var(--sa-secondary-600); }
.sa-icon-success { color: var(--sa-success-600); }
.sa-icon-danger { color: var(--sa-danger-600); }
.sa-icon-warning { color: var(--sa-warning-500); }
.sa-icon-info { color: var(--sa-info-600); }
.sa-icon-white { color: white; }
.sa-icon-gray { color: var(--sa-gray-500); }

/* ========== اینیمیشنز ========== */
.sa-icon-spin { animation: sa-icon-spin 1s linear infinite; }
.sa-icon-pulse { animation: sa-icon-pulse 2s ease infinite; }
.sa-icon-bounce { animation: sa-icon-bounce 1s ease infinite; }
.sa-icon-flip { animation: sa-icon-flip 1s ease infinite; }

@keyframes sa-icon-spin { to { transform: rotate(360deg); } }
@keyframes sa-icon-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@keyframes sa-icon-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
@keyframes sa-icon-flip { 0% { transform: scaleX(1); } 50% { transform: scaleX(-1); } 100% { transform: scaleX(1); } }

/* ========== RTL سپورٹ ========== */
[dir="rtl"] .sa-icon-arrow-left,
[dir="rtl"] .sa-icon-chevron-left,
[dir="rtl"] .sa-icon-arrow-big-left { transform: scaleX(-1); }

/* ========== ڈارک موڈ ========== */
@media (prefers-color-scheme: dark) {
  .sa-icon-auto { color: var(--sa-gray-300); }
}
```

---

📚 مرحلہ 6: استعمال کے طریقے

npm کے ذریعے:

```bash
npm install @shoaib-aftab-tech/icons
```

CDN کے ذریعے:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoaib-aftab-tech/icons@latest/dist/sa-icons.min.icons">
<script src="https://cdn.jsdelivr.net/npm/@shoaib-aftab-tech/icons@latest/dist/sa-icons.min.js"></script>
```

استعمال:

```html
<!-- بنیادی -->
<i class="sa-icon sa-icon-home"></i>

<!-- سائز کے ساتھ -->
<i class="sa-icon sa-icon-user sa-icon-lg"></i>

<!-- رنگ کے ساتھ -->
<i class="sa-icon sa-icon-heart sa-icon-danger"></i>

<!-- اینیمیشن کے ساتھ -->
<i class="sa-icon sa-icon-loader sa-icon-spin"></i>

<!-- بٹن میں -->
<button class="sa-btn sa-btn-primary">
  <i class="sa-icon sa-icon-save"></i>
  محفوظ کریں
</button>
```

---

✅ چیک لسٹ

· 500+ SVG آئیکنز (24x24 viewBox)
· تمام آئیکنز currentColor استعمال کریں
· اسٹروک: 2px, round caps/joins
· SVG اسپرائٹ فائل
· Icons کلاسز (سائز، رنگ، اینیمیشن)
· RTL آئیکنز خودکار فلپ
· ڈارک موڈ سپورٹ
· اسلامی اور پاکستانی آئیکنز
· MIT لائسنس (اصل اگر موجود ہو تو)
· docs فولڈر مکمل
· npmjs.com پر شائع
· GitHub ریپو میں examples

---

یہ مارک ڈاؤن فائل AI ایجنٹ کو دیں۔ 500+ آئیکنز، 21 کیٹگریز، RTL سپورٹ، ڈارک موڈ، Icons اینیمیشنز، اور پاکستانی/اسلامی آئیکنز کے ساتھ۔ 🎨🚀
