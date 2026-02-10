# WhatsApp Browser Redirect App

A simple single-page React app that detects if it's opened inside the WhatsApp browser and provides a button to redirect users to their default browser for a better browsing experience.

## Features

- 🔍 **WhatsApp Browser Detection**: Automatically detects if the page is opened in WhatsApp's embedded browser
- 📱 **Device Detection**: Identifies the user's device (Android or iOS)
- 🚀 **Smart Redirect**: 
  - For Android: Opens the page in Chrome using Intent URLs
  - For iOS: Attempts to open in Safari
- 🎨 **Beautiful UI**: Modern, responsive design with gradient background
- ⚡ **Fast & Lightweight**: Built with React and Vite for optimal performance

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. The app checks the user agent to detect if it's running in WhatsApp browser
2. It also detects the device OS (Android or iOS)
3. If WhatsApp browser is detected:
   - Shows a prominent button to redirect to the default browser
   - The button text changes based on the device (Chrome for Android, Safari for iOS)
4. If not in WhatsApp browser:
   - Shows a confirmation message that they're already in the default browser

## Browser Redirect Methods

### Android
Uses the Intent URL scheme to open Chrome:
```
intent://url#Intent;scheme=https;package=com.android.chrome;end
```

### iOS
Attempts to use Safari URL scheme (limited by iOS restrictions):
```
safari-https://url
```

## Usage

Simply visit the app from a WhatsApp chat or link, and you'll see the redirect option. Click the button to open in your default browser.

## Building for Production

Build the app for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

To deploy this app:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)
3. Share the URL in WhatsApp to test

## Notes

- WhatsApp browser detection relies on user agent strings, which may vary by platform and WhatsApp version
- iOS has restrictions on opening apps from web browsers, so Safari opening may not work in all cases
- The app is fully responsive and works on all modern mobile browsers

