const fs = require('fs-extra');
const path = require('path');
const lucide = require('lucide');
const simpleIcons = require('simple-icons');

const categories = {
  general: ['home', 'building', 'city', 'globe', 'world', 'map-pin', 'compass', 'search', 'zoom-in', 'zoom-out', 'settings', 'sliders', 'filter', 'list', 'grid', 'menu', 'more-horizontal', 'more-vertical', 'plus', 'minus', 'x', 'check', 'check-circle', 'alert-circle', 'alert-triangle', 'info', 'help-circle', 'bookmark', 'star', 'heart', 'thumbs-up', 'thumbs-down', 'share', 'link', 'external-link', 'copy', 'clipboard', 'anchor', 'target', 'crosshair', 'award', 'gift', 'package', 'box', 'container', 'tag', 'hash', 'at-sign', 'command', 'terminal'],
  actions: ['add', 'create', 'edit', 'pencil', 'delete', 'trash', 'save', 'download', 'upload', 'cloud-upload', 'cloud-download', 'refresh', 'rotate-cw', 'rotate-ccw', 'sync', 'archive', 'unarchive', 'lock', 'unlock', 'key', 'log-in', 'log-out', 'power', 'play', 'pause', 'stop', 'skip-forward', 'skip-back', 'fast-forward', 'rewind', 'maximize', 'minimize', 'fullscreen', 'expand', 'shrink', 'move', 'sort', 'eye', 'eye-off', 'send'],
  arrows: ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up-right', 'arrow-down-left', 'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-up', 'chevrons-down', 'chevrons-left', 'chevrons-right', 'corner-up-left', 'corner-up-right', 'corner-down-left', 'corner-down-right', 'redo', 'undo', 'reply', 'forward', 'navigation', 'compass-arrow', 'arrow-big-up', 'arrow-big-down'],
  files: ['file', 'file-text', 'file-plus', 'file-minus', 'folder', 'folder-plus', 'folder-minus', 'folder-open', 'image', 'video', 'music', 'audio', 'film', 'camera', 'aperture', 'pdf', 'csv', 'zip', 'doc', 'spreadsheet', 'presentation', 'database', 'hard-drive', 'sd-card', 'usb'],
  communication: ['mail', 'mail-open', 'inbox', 'message-circle', 'message-square', 'phone', 'phone-call', 'phone-incoming', 'phone-outgoing', 'phone-missed', 'phone-off', 'voicemail', 'video-call', 'headphones', 'mic', 'mic-off', 'speaker', 'volume', 'volume-1', 'volume-2', 'volume-x', 'bell', 'bell-off', 'rss'],
  business: ['briefcase', 'shopping-cart', 'cart-shopping', 'shopping-bag', 'credit-card', 'wallet', 'dollar-sign', 'rupee', 'euro', 'pound', 'yen', 'bitcoin', 'bank', 'building-columns', 'landmark', 'shop', 'store', 'industry', 'truck', 'shipping', 'bar-chart', 'pie-chart', 'trending-up', 'trending-down', 'activity', 'percent', 'receipt', 'invoice', 'barcode', 'qr-code', 'calculator', 'printer', 'scissors', 'scale', 'badge-percent', 'trophy', 'gem'],
  users: ['user', 'users', 'user-plus', 'user-minus', 'user-x', 'user-check', 'avatar', 'crown', 'user-cog', 'contact', 'address-book', 'id-card', 'fingerprint', 'ban', 'shield'],
  security: ['shield-check', 'shield-off', 'shield-alert', 'lock-keyhole', 'key-round', 'scan', 'scan-face', 'scan-line', 'shield-lock', 'encryption', 'password', 'vpn', 'server', 'cloud-lock', 'certificate'],
  devices: ['monitor', 'laptop', 'tablet', 'smartphone', 'mobile', 'mobile-screen', 'watch', 'cpu', 'chip', 'memory', 'battery', 'battery-charging', 'wifi', 'wifi-off', 'bluetooth', 'cast', 'airplay', 'tv', 'radio', 'speaker-device', 'projector'],
  weather: ['sun', 'moon', 'cloud', 'cloud-rain', 'cloud-snow', 'cloud-lightning', 'umbrella', 'droplet', 'wind', 'thermometer', 'sunrise', 'sunset', 'moon-stars', 'cloud-drizzle', 'tornado'],
  maps: ['map', 'map-pinned', 'navigation-2', 'locate', 'locate-fixed', 'locate-off', 'route', 'directions', 'signpost', 'traffic', 'parking', 'pin', 'land-plot', 'layers', 'compass-needle'],
  transport: ['car', 'bus', 'train', 'plane', 'ship', 'bike', 'truck-transport', 'taxi', 'helicopter', 'rocket', 'anchor-transport', 'fuel', 'gauge', 'steering-wheel', 'traffic-cone', 'road', 'highway', 'bridge', 'tunnel', 'wheelchair'],
  food: ['coffee', 'cup', 'glass', 'wine', 'beer', 'utensils', 'utensils-crossed', 'chef-hat', 'pizza', 'ice-cream', 'cake', 'candy', 'apple', 'croissant', 'egg'],
  medical: ['heart-pulse', 'heart-medical', 'activity-heart', 'stethoscope', 'thermometer-medical', 'pill', 'capsule', 'syringe', 'vaccine', 'bandage', 'first-aid', 'hospital', 'ambulance', 'tooth', 'eye-medical', 'brain', 'dna', 'microscope', 'test-tubes', 'report-medical'],
  education: ['book', 'book-open', 'bookmark-filled', 'graduation-cap', 'school', 'library', 'pencil-ruler', 'ruler', 'calculator-math', 'abacus', 'atom', 'flask', 'telescope', 'globe-education', 'languages', 'alphabet', 'palette', 'music-note', 'theater', 'backpack'],
  entertainment: ['gamepad', 'gamepad-2', 'joystick', 'dice', 'puzzle', 'ticket', 'tickets', 'popcorn', 'clapperboard', 'play-circle', 'pause-circle', 'stop-circle', 'disc', 'guitar', 'piano', 'radio-entertainment', 'camera-entertainment', 'mic-entertainment', 'headphones-entertainment', 'bowling'],
  misc: ['clock', 'calendar', 'hourglass', 'alarm', 'timer', 'history', 'loader', 'spinner', 'palette-misc', 'brush', 'paint-bucket', 'eraser', 'magnet', 'zap', 'lightbulb', 'lamp', 'flashlight', 'fire', 'water', 'leaf', 'flower', 'tree', 'mountain', 'snowflake', 'rainbow', 'infinity', 'percent-misc', 'divide', 'equal', 'smile']
};

const brandCategories = {
  social: ['facebook', 'instagram', 'twitter', 'x', 'linkedin', 'youtube', 'whatsapp', 'telegram', 'tiktok', 'snapchat', 'pinterest', 'reddit', 'discord', 'slack', 'medium', 'github', 'gitlab', 'bitbucket', 'dribbble', 'behance', 'figma', 'codepen', 'stackoverflow', 'dev', 'messenger', 'signal', 'wechat', 'line', 'skype', 'viber'],
  brands: ['google', 'chrome', 'apple', 'microsoft', 'windows', 'android', 'play-store', 'app-store', 'amazon', 'meta', 'openai', 'chatgpt', 'netflix', 'spotify', 'paypal', 'stripe', 'visa', 'mastercard', 'aws', 'firebase', 'docker', 'linux', 'ubuntu', 'npm-icon', 'nodejs']
};

const customCategories = {
  islamic: ['quran', 'mosque', 'minaret', 'crescent', 'star-crescent', 'prayer-mat', 'prayer', 'kaaba', 'makkah', 'madinah', 'tasbih', 'dua', 'allah', 'muhammad', 'islam', 'halal', 'zakat', 'sadaqah', 'ramadan', 'eid', 'hajj', 'umrah', 'wudu', 'adhan', 'islamic-calendar'],
  pakistani: ['pakistan', 'pakistan-flag', 'lahore', 'karachi', 'islamabad', 'cnic', 'rupee-coin', 'urdu', 'truck-art', 'cricket', 'cricket-bat', 'hockey', 'minar-e-pakistan', 'badshahi-mosque', 'faisal-mosque', 'mazar-e-quaid', 'k2', 'chand-tara', 'shalwar-kameez', 'jinnah-cap']
};

const lucideAliases = {
  'city': 'building-2',
  'world': 'earth',
  'sliders': 'sliders-horizontal',
  'grid': 'grid-2x2',
  'add': 'plus-circle',
  'create': 'file-edit',
  'edit': 'pencil',
  'delete': 'trash-2',
  'archive': 'archive',
  'unarchive': 'archive-restore',
  'stop': 'square',
  'sort': 'arrow-up-down',
  'compass-arrow': 'compass',
  'pdf': 'file-down',
  'csv': 'file-spreadsheet',
  'zip': 'file-archive',
  'doc': 'file-code',
  'spreadsheet': 'file-spreadsheet',
  'presentation': 'projector',
  'audio': 'audio-lines',
  'video-call': 'video',
  'rupee': 'indian-rupee',
  'pound': 'pound-sterling',
  'yen': 'japanese-yen',
  'bank': 'landmark',
  'shop': 'store',
  'cart-shopping': 'shopping-cart',
  'shipping': 'truck',
  'invoice': 'banknote',
  'industry': 'factory',
  'avatar': 'circle-user',
  'address-book': 'book-user',
  'shield-lock': 'shield-half',
  'encryption': 'lock',
  'password': 'key-round',
  'vpn': 'shield-check',
  'cloud-lock': 'cloud',
  'certificate': 'file-badge-2',
  'mobile': 'smartphone',
  'mobile-screen': 'smartphone',
  'chip': 'memory-stick',
  'memory': 'cpu',
  'speaker-device': 'speaker',
  'moon-stars': 'moon',
  'locate-off': 'locate',
  'directions': 'signpost',
  'traffic': 'traffic-cone',
  'parking': 'parking-circle',
  'land-plot': 'map',
  'compass-needle': 'compass',
  'truck-transport': 'truck',
  'anchor-transport': 'anchor',
  'cup': 'cup-soda',
  'glass': 'glass-water',
  'ice-cream': 'ice-cream-cone',
  'cake': 'cake-slice',
  'heart-medical': 'heart-pulse',
  'activity-heart': 'activity',
  'thermometer-medical': 'thermometer',
  'capsule': 'pill',
  'vaccine': 'syringe',
  'bandage': 'bandages',
  'first-aid': 'cross',
  'tooth': 'smile',
  'eye-medical': 'eye',
  'dna': 'git-commit',
  'report-medical': 'book-open-check',
  'bookmark-filled': 'bookmark',
  'calculator-math': 'calculator',
  'abacus': 'calculator',
  'flask': 'flask-conical',
  'globe-education': 'globe',
  'alphabet': 'languages',
  'music-note': 'music',
  'theater': 'smile',
  'backpack': 'briefcase',
  'tickets': 'ticket',
  'radio-entertainment': 'radio',
  'camera-entertainment': 'camera',
  'mic-entertainment': 'mic',
  'headphones-entertainment': 'headphones',
  'bowling': 'circle',
  'alarm': 'alarm-clock',
  'spinner': 'loader',
  'palette-misc': 'palette',
  'lamp': 'lightbulb',
  'water': 'droplet',
  'tree': 'tree-deciduous',
  'percent-misc': 'percent'
};

const simpleIconsAliases = {
  'x': 'X',
  'dev': 'Dev.to',
  'chrome': 'Google Chrome',
  'play-store': 'Google Play',
  'app-store': 'App Store',
  'chatgpt': 'OpenAI',
  'aws': 'Amazon Web Services',
  'npm-icon': 'npm',
  'nodejs': 'Node.js'
};

const convertToPascalCase = (str) => str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

function getFallbackPath(name, index) {
  // Generate visually distinct simple SVG paths for mock icons
  const shapes = [
    '<circle cx="12" cy="12" r="10" />',
    '<rect x="3" y="3" width="18" height="18" rx="2" />',
    '<polygon points="12 2 22 22 2 22" />',
    '<path d="M12 2L2 22h20L12 2z"/>',
    '<ellipse cx="12" cy="12" rx="10" ry="6" />',
    '<path d="M5 5L19 19M19 5L5 19" />'
  ];
  return shapes[index % shapes.length] + `<text x="12" y="16" font-size="8" text-anchor="middle" fill="currentColor" stroke="none">${name.substring(0,3)}</text>`;
}

async function generateAll() {
    const srcDir = path.join(__dirname, '../src/icons');
    await fs.emptyDir(srcDir);
    let spriteDefs = '';

    const addIcon = async (cat, name, innerSVG) => {
        const catDir = path.join(srcDir, cat);
        await fs.ensureDir(catDir);

        const fullSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${innerSVG}</svg>`;
        await fs.writeFile(path.join(catDir, `${name}.svg`), fullSVG);

        spriteDefs += `<symbol id="sa-icon-${name}" viewBox="0 0 24 24">${innerSVG}</symbol>\n`;
    };

    // 1. Process standard UI Icons (Lucide)
    for (const [category, icons] of Object.entries(categories)) {
        for (const icon of icons) {
            const mappedName = lucideAliases[icon] || icon;
            const pascalName = convertToPascalCase(mappedName);
            const lucideIcon = lucide.icons[pascalName];

            let innerSVG = '<circle cx="12" cy="12" r="10"/>'; // default fallback

            if (lucideIcon) {
                innerSVG = lucideIcon.map(child => `<${child[0]} ${Object.entries(child[1]).map(([k,v]) => `${k}="${v}"`).join(' ')}/>`).join('');
            }
            await addIcon(category, icon, innerSVG);
        }
    }

    // 2. Process Brands (Simple-Icons)
    for (const [category, icons] of Object.entries(brandCategories)) {
        for (const icon of icons) {
            const queryName = simpleIconsAliases[icon] || icon;
            let slug = queryName.toLowerCase().replace(/\s+/g, '').replace(/\./g, 'dot');
            if (queryName === 'X') slug = 'x';

            let innerSVG = '';
            let simpleIcon = simpleIcons[`si${convertToPascalCase(slug)}`] || Object.values(simpleIcons).find(s => s.title.toLowerCase() === queryName.toLowerCase() || s.slug === slug);

            if (simpleIcon) {
                // To keep colors, we apply fill to the path itself and stroke to none, overriding the parent currentColor
                innerSVG = `<path d="${simpleIcon.path}" fill="#${simpleIcon.hex}" stroke="none" />`;
            } else {
                 innerSVG = '<circle cx="12" cy="12" r="10" stroke="none" fill="currentColor"/>';
            }

            await addIcon(category, icon, innerSVG);
        }
    }

    // 3. Process Custom (Pakistani/Islamic)
    let idx = 0;
    for (const [category, icons] of Object.entries(customCategories)) {
        for (const icon of icons) {
            // For international focus, we use simple generic placeholders that are visually distinct
            // but not highly detailed custom SVGs unless provided.
            await addIcon(category, icon, getFallbackPath(icon, idx++));
        }
    }

    const fullSprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">\n${spriteDefs}</svg>`;
    await fs.writeFile(path.join(__dirname, '../src/sa-icons.svg'), fullSprite);

    // Generate Icon List Markdown dynamically
    let mdContent = '# Icon List\n\nBelow is a categorized list of all available icons in the SAT Icons library. Use the `sa-icon-{name}` format to reference them in your HTML.\n\n';

    const allCategories = {...categories, ...brandCategories, ...customCategories};
    for (const [category, icons] of Object.entries(allCategories)) {
        mdContent += `### ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
        mdContent += icons.map(i => `\`${i}\``).join(', ') + '\n\n';
    }
    await fs.writeFile(path.join(__dirname, '../docs/icon-list.md'), mdContent);

    console.log(`Icons generated successfully! Total icons: ${Object.values(allCategories).flat().length}`);
}

generateAll().catch(console.error);
