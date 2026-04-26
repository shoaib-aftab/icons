📋 SAT Icons لائبریری - مکمل ہدایات برائے AI ایجنٹ

---

🎯 پروجیکٹ کا تعارف

شے تفصیل
نام SAT Icons
npm پیکج @shoaib-aftab-tech/icons
GitHub ریپو shoaib-aftab-tech/sat-icons
پریفکس تمام آئیکن کلاسز sat-icon- سے شروع
مقصد جدید، ہلکی، RTL-ready SVG آئیکن لائبریری
انحصار صفر - 100% خالص SVG
فارمیٹ SVG Sprite + CSS کلاسز
کل آئیکنز 500+ (تمام کیٹگریز)
فائل سائز 80-120 KB (کمپریسڈ اسپرائٹ)
لائسنس MIT

---

📁 مرحلہ 1: پروجیکٹ ڈھانچہ

```
sat-icons/
├── package.json
├── README.md
├── LICENSE
├── src/
│   ├── sat-icons.css          ← CSS کلاسز
│   ├── sat-icons.svg          ← SVG اسپرائٹ (تمام آئیکنز)
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
6. رنگ: currentColor (CSS سے کنٹرول)
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

· بنیادی کلاس: sat-icon
· آئیکن کلاس: sat-icon-{name}
· سائز کلاسز: sat-icon-xs, sat-icon-sm, sat-icon-lg, sat-icon-xl, sat-icon-2xl
· اینیمیشن کلاسز: sat-icon-spin, sat-icon-pulse, sat-icon-bounce, sat-icon-flip

آئیکن ناموں کے اصول:

· lowercase صرف
· الفاظ ڈیش (-) سے الگ
· مختصر مگر واضح
· کوئی مخفف نہیں (مگر عام والے جیسے rss, pdf, qr)

---

🎨 مرحلہ 4: آئیکنز کی مکمل فہرست

4.1 جنرل (General) - 50 آئیکنز

```
sat-icon-home
sat-icon-building
sat-icon-city
sat-icon-globe
sat-icon-world
sat-icon-map-pin
sat-icon-compass
sat-icon-search
sat-icon-zoom-in
sat-icon-zoom-out
sat-icon-settings
sat-icon-sliders
sat-icon-filter
sat-icon-list
sat-icon-grid
sat-icon-menu
sat-icon-more-horizontal
sat-icon-more-vertical
sat-icon-plus
sat-icon-minus
sat-icon-x
sat-icon-check
sat-icon-check-circle
sat-icon-alert-circle
sat-icon-alert-triangle
sat-icon-info
sat-icon-help-circle
sat-icon-bookmark
sat-icon-star
sat-icon-heart
sat-icon-thumbs-up
sat-icon-thumbs-down
sat-icon-share
sat-icon-link
sat-icon-external-link
sat-icon-copy
sat-icon-clipboard
sat-icon-anchor
sat-icon-target
sat-icon-crosshair
sat-icon-award
sat-icon-gift
sat-icon-package
sat-icon-box
sat-icon-container
sat-icon-tag
sat-icon-hash
sat-icon-at-sign
sat-icon-command
sat-icon-terminal
```

4.2 ایکشنز (Actions) - 40 آئیکنز

```
sat-icon-add
sat-icon-create
sat-icon-edit
sat-icon-pencil
sat-icon-delete
sat-icon-trash
sat-icon-save
sat-icon-download
sat-icon-upload
sat-icon-cloud-upload
sat-icon-cloud-download
sat-icon-refresh
sat-icon-rotate-cw
sat-icon-rotate-ccw
sat-icon-sync
sat-icon-archive
sat-icon-unarchive
sat-icon-lock
sat-icon-unlock
sat-icon-key
sat-icon-log-in
sat-icon-log-out
sat-icon-power
sat-icon-play
sat-icon-pause
sat-icon-stop
sat-icon-skip-forward
sat-icon-skip-back
sat-icon-fast-forward
sat-icon-rewind
sat-icon-maximize
sat-icon-minimize
sat-icon-fullscreen
sat-icon-expand
sat-icon-shrink
sat-icon-move
sat-icon-sort
sat-icon-eye
sat-icon-eye-off
sat-icon-send
```

4.3 ایروز (Arrows) - 25 آئیکنز

```
sat-icon-arrow-up
sat-icon-arrow-down
sat-icon-arrow-left
sat-icon-arrow-right
sat-icon-arrow-up-right
sat-icon-arrow-down-left
sat-icon-chevron-up
sat-icon-chevron-down
sat-icon-chevron-left
sat-icon-chevron-right
sat-icon-chevrons-up
sat-icon-chevrons-down
sat-icon-chevrons-left
sat-icon-chevrons-right
sat-icon-corner-up-left
sat-icon-corner-up-right
sat-icon-corner-down-left
sat-icon-corner-down-right
sat-icon-redo
sat-icon-undo
sat-icon-reply
sat-icon-forward
sat-icon-navigation
sat-icon-compass-arrow
sat-icon-arrow-big-up
sat-icon-arrow-big-down
```

4.4 سوشل میڈیا (Social) - 30 آئیکنز

```
sat-icon-facebook
sat-icon-instagram
sat-icon-twitter
sat-icon-x
sat-icon-linkedin
sat-icon-youtube
sat-icon-whatsapp
sat-icon-telegram
sat-icon-tiktok
sat-icon-snapchat
sat-icon-pinterest
sat-icon-reddit
sat-icon-discord
sat-icon-slack
sat-icon-medium
sat-icon-github
sat-icon-gitlab
sat-icon-bitbucket
sat-icon-dribbble
sat-icon-behance
sat-icon-figma
sat-icon-codepen
sat-icon-stackoverflow
sat-icon-dev
sat-icon-messenger
sat-icon-signal
sat-icon-wechat
sat-icon-line
sat-icon-skype
sat-icon-viber
```

4.5 فائلز (Files) - 25 آئیکنز

```
sat-icon-file
sat-icon-file-text
sat-icon-file-plus
sat-icon-file-minus
sat-icon-folder
sat-icon-folder-plus
sat-icon-folder-minus
sat-icon-folder-open
sat-icon-image
sat-icon-video
sat-icon-music
sat-icon-audio
sat-icon-film
sat-icon-camera
sat-icon-aperture
sat-icon-pdf
sat-icon-csv
sat-icon-zip
sat-icon-doc
sat-icon-spreadsheet
sat-icon-presentation
sat-icon-database
sat-icon-hard-drive
sat-icon-sd-card
sat-icon-usb
```

4.6 کمیونیکیشن (Communication) - 20 آئیکنز

```
sat-icon-mail
sat-icon-mail-open
sat-icon-inbox
sat-icon-message-circle
sat-icon-message-square
sat-icon-phone
sat-icon-phone-call
sat-icon-phone-incoming
sat-icon-phone-outgoing
sat-icon-phone-missed
sat-icon-phone-off
sat-icon-voicemail
sat-icon-video-call
sat-icon-headphones
sat-icon-mic
sat-icon-mic-off
sat-icon-speaker
sat-icon-volume
sat-icon-volume-1
sat-icon-volume-2
sat-icon-volume-x
sat-icon-bell
sat-icon-bell-off
sat-icon-rss
```

4.7 بزنس (Business) - 35 آئیکنز

```
sat-icon-briefcase
sat-icon-shopping-cart
sat-icon-shopping-bag
sat-icon-credit-card
sat-icon-wallet
sat-icon-dollar-sign
sat-icon-rupee
sat-icon-euro
sat-icon-pound
sat-icon-yen
sat-icon-bitcoin
sat-icon-bank
sat-icon-building-columns
sat-icon-landmark
sat-icon-shop
sat-icon-store
sat-icon-truck
sat-icon-shipping
sat-icon-bar-chart
sat-icon-pie-chart
sat-icon-trending-up
sat-icon-trending-down
sat-icon-activity
sat-icon-percent
sat-icon-receipt
sat-icon-invoice
sat-icon-barcode
sat-icon-qr-code
sat-icon-calculator
sat-icon-printer
sat-icon-scissors
sat-icon-scale
sat-icon-badge-percent
sat-icon-trophy
sat-icon-gem
```

4.8 یوزرز (Users) - 15 آئیکنز

```
sat-icon-user
sat-icon-users
sat-icon-user-plus
sat-icon-user-minus
sat-icon-user-x
sat-icon-user-check
sat-icon-avatar
sat-icon-crown
sat-icon-user-cog
sat-icon-contact
sat-icon-address-book
sat-icon-id-card
sat-icon-fingerprint
sat-icon-ban
sat-icon-shield
```

4.9 سیکیورٹی (Security) - 15 آئیکنز

```
sat-icon-shield-check
sat-icon-shield-off
sat-icon-shield-alert
sat-icon-lock-keyhole
sat-icon-key-round
sat-icon-scan
sat-icon-scan-face
sat-icon-scan-line
sat-icon-shield-lock
sat-icon-encryption
sat-icon-password
sat-icon-vpn
sat-icon-server
sat-icon-cloud-lock
sat-icon-certificate
```

4.10 ڈیوائسز (Devices) - 20 آئیکنز

```
sat-icon-monitor
sat-icon-laptop
sat-icon-tablet
sat-icon-smartphone
sat-icon-mobile
sat-icon-watch
sat-icon-cpu
sat-icon-chip
sat-icon-memory
sat-icon-battery
sat-icon-battery-charging
sat-icon-wifi
sat-icon-wifi-off
sat-icon-bluetooth
sat-icon-cast
sat-icon-airplay
sat-icon-tv
sat-icon-radio
sat-icon-speaker-device
sat-icon-projector
```

4.11 ویدر (Weather) - 15 آئیکنز

```
sat-icon-sun
sat-icon-moon
sat-icon-cloud
sat-icon-cloud-rain
sat-icon-cloud-snow
sat-icon-cloud-lightning
sat-icon-umbrella
sat-icon-droplet
sat-icon-wind
sat-icon-thermometer
sat-icon-sunrise
sat-icon-sunset
sat-icon-moon-stars
sat-icon-cloud-drizzle
sat-icon-tornado
```

4.12 میپس (Maps) - 15 آئیکنز

```
sat-icon-map
sat-icon-map-pinned
sat-icon-navigation-2
sat-icon-locate
sat-icon-locate-fixed
sat-icon-locate-off
sat-icon-route
sat-icon-directions
sat-icon-signpost
sat-icon-traffic
sat-icon-parking
sat-icon-pin
sat-icon-land-plot
sat-icon-layers
sat-icon-compass-needle
```

4.13 ٹرانسپورٹ (Transport) - 20 آئیکنز

```
sat-icon-car
sat-icon-bus
sat-icon-train
sat-icon-plane
sat-icon-ship
sat-icon-bike
sat-icon-truck-transport
sat-icon-taxi
sat-icon-helicopter
sat-icon-rocket
sat-icon-anchor-transport
sat-icon-fuel
sat-icon-gauge
sat-icon-steering-wheel
sat-icon-traffic-cone
sat-icon-road
sat-icon-highway
sat-icon-bridge
sat-icon-tunnel
sat-icon-wheelchair
```

4.14 فوڈ (Food) - 15 آئیکنز

```
sat-icon-coffee
sat-icon-cup
sat-icon-glass
sat-icon-wine
sat-icon-beer
sat-icon-utensils
sat-icon-utensils-crossed
sat-icon-chef-hat
sat-icon-pizza
sat-icon-ice-cream
sat-icon-cake
sat-icon-candy
sat-icon-apple
sat-icon-croissant
sat-icon-egg
```

4.15 میڈیکل (Medical) - 20 آئیکنز

```
sat-icon-heart-pulse
sat-icon-heart-medical
sat-icon-activity-heart
sat-icon-stethoscope
sat-icon-thermometer-medical
sat-icon-pill
sat-icon-capsule
sat-icon-syringe
sat-icon-vaccine
sat-icon-bandage
sat-icon-first-aid
sat-icon-hospital
sat-icon-ambulance
sat-icon-tooth
sat-icon-eye-medical
sat-icon-brain
sat-icon-dna
sat-icon-microscope
sat-icon-test-tubes
sat-icon-report-medical
```

4.16 ایجوکیشن (Education) - 20 آئیکنز

```
sat-icon-book
sat-icon-book-open
sat-icon-bookmark-filled
sat-icon-graduation-cap
sat-icon-school
sat-icon-library
sat-icon-pencil-ruler
sat-icon-ruler
sat-icon-calculator-math
sat-icon-abacus
sat-icon-atom
sat-icon-flask
sat-icon-telescope
sat-icon-globe-education
sat-icon-languages
sat-icon-alphabet
sat-icon-palette
sat-icon-music-note
sat-icon-theater
sat-icon-backpack
```

4.17 انٹرٹینمنٹ (Entertainment) - 20 آئیکنز

```
sat-icon-gamepad
sat-icon-gamepad-2
sat-icon-joystick
sat-icon-dice
sat-icon-puzzle
sat-icon-ticket
sat-icon-tickets
sat-icon-popcorn
sat-icon-clapperboard
sat-icon-play-circle
sat-icon-pause-circle
sat-icon-stop-circle
sat-icon-disc
sat-icon-guitar
sat-icon-piano
sat-icon-radio-entertainment
sat-icon-camera-entertainment
sat-icon-mic-entertainment
sat-icon-headphones-entertainment
sat-icon-bowling
```

4.18 اسلامی (Islamic) - 25 آئیکنز

```
sat-icon-quran
sat-icon-mosque
sat-icon-minaret
sat-icon-crescent
sat-icon-star-crescent
sat-icon-prayer-mat
sat-icon-prayer
sat-icon-kaaba
sat-icon-makkah
sat-icon-madinah
sat-icon-tasbih
sat-icon-dua
sat-icon-allah
sat-icon-muhammad
sat-icon-islam
sat-icon-halal
sat-icon-zakat
sat-icon-sadaqah
sat-icon-ramadan
sat-icon-eid
sat-icon-hajj
sat-icon-umrah
sat-icon-wudu
sat-icon-adhan
sat-icon-islamic-calendar
```

4.19 پاکستانی (Pakistani) - 20 آئیکنز

```
sat-icon-pakistan
sat-icon-pakistan-flag
sat-icon-lahore
sat-icon-karachi
sat-icon-islamabad
sat-icon-cnic
sat-icon-rupee-coin
sat-icon-urdu
sat-icon-truck-art
sat-icon-cricket
sat-icon-cricket-bat
sat-icon-hockey
sat-icon-minar-e-pakistan
sat-icon-badshahi-mosque
sat-icon-faisal-mosque
sat-icon-mazar-e-quaid
sat-icon-k2
sat-icon-chand-tara
sat-icon-shalwar-kameez
sat-icon-jinnah-cap
```

4.20 برانڈز (Brands) - 25 آئیکنز

```
sat-icon-google
sat-icon-chrome
sat-icon-apple
sat-icon-microsoft
sat-icon-windows
sat-icon-android
sat-icon-play-store
sat-icon-app-store
sat-icon-amazon
sat-icon-meta
sat-icon-openai
sat-icon-chatgpt
sat-icon-netflix
sat-icon-spotify
sat-icon-paypal
sat-icon-stripe
sat-icon-visa
sat-icon-mastercard
sat-icon-aws
sat-icon-firebase
sat-icon-docker
sat-icon-linux
sat-icon-ubuntu
sat-icon-npm-icon
sat-icon-nodejs
```

4.21 متفرق (Misc) - 30 آئیکنز

```
sat-icon-clock
sat-icon-calendar
sat-icon-hourglass
sat-icon-alarm
sat-icon-timer
sat-icon-history
sat-icon-loader
sat-icon-spinner
sat-icon-palette-misc
sat-icon-brush
sat-icon-paint-bucket
sat-icon-eraser
sat-icon-magnet
sat-icon-zap
sat-icon-lightbulb
sat-icon-lamp
sat-icon-flashlight
sat-icon-fire
sat-icon-water
sat-icon-leaf
sat-icon-flower
sat-icon-tree
sat-icon-mountain
sat-icon-snowflake
sat-icon-rainbow
sat-icon-infinity
sat-icon-percent-misc
sat-icon-divide
sat-icon-equal
sat-icon-smile
```

---

🎨 مرحلہ 5: CSS کلاسز

```css
/* ========== بنیادی آئیکن کلاس ========== */
.sat-icon {
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
.sat-icon-xs { width: 0.75rem; height: 0.75rem; stroke-width: 2.5; }
.sat-icon-sm { width: 1rem; height: 1rem; }
.sat-icon-base { width: 1.5rem; height: 1.5rem; }
.sat-icon-lg { width: 2rem; height: 2rem; }
.sat-icon-xl { width: 2.5rem; height: 2.5rem; }
.sat-icon-2xl { width: 3rem; height: 3rem; }

/* ========== رنگ (CSS inherit کرتا ہے) ========== */
.sat-icon-primary { color: var(--sat-primary-600); }
.sat-icon-secondary { color: var(--sat-secondary-600); }
.sat-icon-success { color: var(--sat-success-600); }
.sat-icon-danger { color: var(--sat-danger-600); }
.sat-icon-warning { color: var(--sat-warning-500); }
.sat-icon-info { color: var(--sat-info-600); }
.sat-icon-white { color: white; }
.sat-icon-gray { color: var(--sat-gray-500); }

/* ========== اینیمیشنز ========== */
.sat-icon-spin { animation: sat-icon-spin 1s linear infinite; }
.sat-icon-pulse { animation: sat-icon-pulse 2s ease infinite; }
.sat-icon-bounce { animation: sat-icon-bounce 1s ease infinite; }
.sat-icon-flip { animation: sat-icon-flip 1s ease infinite; }

@keyframes sat-icon-spin { to { transform: rotate(360deg); } }
@keyframes sat-icon-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
@keyframes sat-icon-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
@keyframes sat-icon-flip { 0% { transform: scaleX(1); } 50% { transform: scaleX(-1); } 100% { transform: scaleX(1); } }

/* ========== RTL سپورٹ ========== */
[dir="rtl"] .sat-icon-arrow-left,
[dir="rtl"] .sat-icon-chevron-left,
[dir="rtl"] .sat-icon-arrow-big-left { transform: scaleX(-1); }

/* ========== ڈارک موڈ ========== */
@media (prefers-color-scheme: dark) {
  .sat-icon-auto { color: var(--sat-gray-300); }
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoaib-aftab-tech/icons@latest/dist/sat-icons.min.css">
<script src="https://cdn.jsdelivr.net/npm/@shoaib-aftab-tech/icons@latest/dist/sat-icons.min.js"></script>
```

استعمال:

```html
<!-- بنیادی -->
<i class="sat-icon sat-icon-home"></i>

<!-- سائز کے ساتھ -->
<i class="sat-icon sat-icon-user sat-icon-lg"></i>

<!-- رنگ کے ساتھ -->
<i class="sat-icon sat-icon-heart sat-icon-danger"></i>

<!-- اینیمیشن کے ساتھ -->
<i class="sat-icon sat-icon-loader sat-icon-spin"></i>

<!-- بٹن میں -->
<button class="sat-btn sat-btn-primary">
  <i class="sat-icon sat-icon-save"></i>
  محفوظ کریں
</button>
```

---

✅ چیک لسٹ

· 500+ SVG آئیکنز (24x24 viewBox)
· تمام آئیکنز currentColor استعمال کریں
· اسٹروک: 2px, round caps/joins
· SVG اسپرائٹ فائل
· CSS کلاسز (سائز، رنگ، اینیمیشن)
· RTL آئیکنز خودکار فلپ
· ڈارک موڈ سپورٹ
· اسلامی اور پاکستانی آئیکنز
· MIT لائسنس (اصل اگر موجود ہو تو)
· docs فولڈر مکمل
· npmjs.com پر شائع
· GitHub ریپو میں examples

---

یہ مارک ڈاؤن فائل AI ایجنٹ کو دیں۔ 500+ آئیکنز، 21 کیٹگریز، RTL سپورٹ، ڈارک موڈ، CSS اینیمیشنز، اور پاکستانی/اسلامی آئیکنز کے ساتھ۔ 🎨🚀
