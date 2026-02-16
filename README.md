# DN42 AS Network Website

A modern, cyber-themed single-page website for displaying DN42 Autonomous System information with an interactive network map, node monitoring, and peering policy details.

## Features

- **Cyber NOC Terminal Aesthetic**: Dark theme with neon accents (cyan, purple, green)
- **Interactive Network Map**: Leaflet.js with CartoDB Dark Matter basemap
- **Real-time Node Monitoring**: Status indicators and uptime tracking
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Data-Driven**: Easy configuration through `src/config.js`

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Edit `src/config.js` to customize your network information:

- AS Number and Name
- IP Ranges (IPv4/IPv6)
- Node locations and details
- Peering policy requirements
- Contact information
- Network statistics

## Technology Stack

- **React 18**: Modern UI framework
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Leaflet.js**: Interactive maps
- **Custom Fonts**: Orbitron (display) + JetBrains Mono (monospace)

## Design Philosophy

The website features a **Cyber NOC Terminal** aesthetic inspired by high-tech network operations centers:

- Monospace typography for technical authenticity
- Neon glow effects and animations
- Scanline overlays and grid backgrounds
- Status indicators with pulsing animations
- Asymmetric layouts with cyber borders

## Credits

This page was 100% created by Claude Code.
