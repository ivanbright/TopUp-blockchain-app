# TopUp - Web3 Reputation Platform

A premium Electron.js desktop application for building and managing on-chain reputation.

## Tech Stack
- **Electron**: Main process & platform integration
- **React**: Renderer process UI
- **Tailwind CSS**: Modern styling & glassmorphism
- **TypeScript**: Type safety across the stack
- **Framer Motion**: Smooth transitions and micro-animations

## Features
- **Frameless Window**: Custom title bars for Windows/macOS/Linux.
- **Deep Linking**: Handles `topup://` protocol redirects from MetaMask.
- **Mock Web3 Auth**: Supports MetaMask, WalletConnect (with QR), and Email auth.
- **Secure Storage**: Uses Electron's `safeStorage` for encrypted token persistence.
- **Biometric Login**: Interactive mock flow for fingerprint/face authentication.
- **System Tray**: Persistent access and quick controls via the system tray icon.

## Project Structure
- `src/main/`: Electron main process files.
- `src/renderer/`: React frontend source.
- `src/renderer/styles/`: Global styles and platform-specific overrides.
- `dist/`: Build output (after running build scripts).

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## License
MIT
