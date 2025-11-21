
# DOBEU App - Digital Solutions Platform

This is the official DOBEU application, available at [https://app.dobeu.cloud](https://app.dobeu.cloud).

The original design is available at https://www.figma.com/design/17GGzDSqd3o40wuKayyZiy/app.dobeu.net-newdesign.

## Tech Stack

- **Framework**: React 18.3 + TypeScript
- **Build Tool**: Vite 6.3
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Hosting**: Netlify

## Local Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Netlify. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## Project Structure

```
/workspace/
├── src/
│   ├── components/
│   │   ├── brand/        # Brand kit components
│   │   ├── home/         # Home page sections
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── ui/           # Reusable UI components (Radix)
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions and Supabase config
│   └── App.tsx           # Main application component
├── public/               # Static assets
├── netlify.toml          # Netlify configuration
└── vite.config.ts        # Vite configuration
```

## Features

- Modern, responsive design
- Custom cursor interaction
- Client-side routing
- Dark theme
- Brand kit section
- Service showcase
- Pricing information
- Work portfolio

## Environment

- Node.js 20+
- npm or yarn

## License

Private - All rights reserved
  