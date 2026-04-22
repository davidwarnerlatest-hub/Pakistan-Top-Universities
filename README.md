# Pakistan Top Universities - Chrome Extension

A simple and modern Chrome Extension (Manifest V3) that displays basic information about the top <a href="https://studyvillas.com">universities in Pakistan</a>
.

## Features

- Clean, professional dark UI
- University cards with:
  - Name
  - City
  - Approximate ranking
  - Short description
- Live search/filter by university name
- Scrollable popup layout
- Smooth scrolling and hover card effects

## Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3

## Project Structure

- `manifest.json` - Chrome extension configuration (MV3)
- `popup.html` - Main popup layout
- `style.css` - Styling for popup and cards
- `script.js` - University dataset + render/search logic

## Installation (Load Unpacked)

1. Open Chrome and go to `chrome://extensions/`
2. Turn on **Developer mode** (top-right)
3. Click **Load unpacked**
4. Select this folder:
   - `c:\laragon\Pakistan Top Universities`
5. Click the extension icon in Chrome toolbar to open popup

## How It Works

- On popup open, all 25 universities are rendered as cards.
- Typing in the search box filters cards in real time by matching university names.
- If no match is found, an empty state message is shown.

## Color Theme

- Background: `#18254a`
- Text: `#FFFFFF`
- Accent (buttons/badges): `#1e603f`

## Notes

- Rankings are approximate/general for quick reference.
- You can update the dataset in `script.js` by editing the `universities` array.

## License

This project is provided for educational and demonstration purposes.
