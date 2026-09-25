# 🥧 Crumble Chords — Classic Bakery Recipes

[![Deployed on Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5 / CSS3 / ES6+](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20ES6%2B-orange)](https://developer.mozilla.org)

**Crumble Chords** is a warm, vintage-inspired bakery website dedicated to timeless baking recipes, seasonal treats, and nostalgic café charm. Crafted with semantic HTML5, custom responsive CSS, and interactive JavaScript features including an ambient café audio controller.

---

## ✨ Features

- **📖 Rich Recipe Catalog**: Filterable collections covering cakes, cookies, brownies, breads, muffins, and seasonal specials.
- **🍂 Seasonal Baking**: Dedicated seasonal showcase adapting recommendations for Spring, Summer, Autumn, and Winter.
- **📋 Detailed Recipe View**: Dynamic recipe pages with interactive ingredient checklists, step-by-step instructions, baker's tips, and servings adjusters.
- **🎵 Ambient Bakery Music Player**:
  - Non-intrusive classic café background music controller.
  - Built-in **Web Audio API acoustic chord synthesizer** (warm progressions in Cmaj9 - Am7 - Dm7 - G7) providing ambient sounds even without external MP3 files.
- **🎨 Warm Café Aesthetic**: Vintage typography, warm parchment palettes, delicate bakery flourishes, and responsive navigation.
- **⚡ Zero Build Step**: 100% pure vanilla web standards, instantly fast and ready to deploy anywhere.

---

## 📁 Project Structure

```text
CRUMBLE-CHORDS/
├── index.html              # Homepage with hero, featured bakes & café story
├── recipes.html            # Searchable and filterable recipe gallery
├── recipe-details.html     # Interactive detailed recipe page
├── seasons.html            # Seasonal baking guides (Spring, Summer, Fall, Winter)
├── about.html              # Bakery philosophy and story
├── contact.html            # Bakery inquiries and feedback form
├── vercel.json             # Vercel deployment configuration (clean URLs)
├── css/
│   └── style.css           # Design system tokens, components, and responsive layouts
├── js/
│   ├── main.js             # Navigation, smooth scroll, and global interactions
│   ├── recipes-data.js     # Structured bakery recipe database
│   ├── recipe-details.js   # Dynamic recipe rendering logic
│   └── audio-player.js     # Bakery music player & Web Audio API fallback synth
├── images/
│   ├── logo/               # Brand logos and emblems
│   ├── recipes/            # Recipe illustrations (cakes, cookies, breads, etc.)
│   ├── seasons/            # Season iconography and illustrations
│   ├── decorations/        # Vintage cookbook flourishes and bakery tools
│   └── placeholders/       # Fallback imagery
└── audio/
    └── .gitkeep            # Directory for optional background audio tracks
```

---

## 🚀 Running Locally

Because this project is built entirely on vanilla web standards, you can run it with any local static server:

### Option 1: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.

### Option 2: Python
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Node `serve`
```bash
npx serve .
```

---

## 🌐 Deploying to Vercel

This repository is pre-configured for instant zero-configuration deployment to [Vercel](https://vercel.com/):

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository: `manic-codes/CRUMBLE-CHORDS`.
4. Keep the Framework Preset as **"Other"** (or auto-detected).
5. Click **"Deploy"**.

Vercel will immediately build and provide a production URL (e.g., `https://crumble-chords.vercel.app`).

---

## 📄 License

This project is licensed under the MIT License - feel free to use and adapt it for personal or educational projects!
