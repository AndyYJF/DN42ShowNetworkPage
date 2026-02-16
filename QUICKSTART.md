# Quick Start Guide

## Running the Development Server

To start the development server and view your DN42 AS website:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Customizing Your Network Data

Open `src/config.js` and update the following:

### Basic Information
- `asNumber`: Your DN42 AS number (e.g., 'AS4242421234')
- `asName`: Your network name
- `description`: Brief description of your network
- `establishedDate`: When you joined DN42

### IP Ranges
- `ipRanges.ipv4`: Your IPv4 range
- `ipRanges.ipv6`: Your IPv6 range

### Contact Information
- `contact.email`: Your email address
- `contact.telegram`: Your Telegram handle

### Nodes
Update the `nodes` array with your actual server locations:
```javascript
{
  id: 'us-nyc-01',           // Unique identifier
  city: 'New York',          // City name
  country: 'United States',  // Country name
  countryCode: 'US',         // ISO country code
  lat: 40.7128,              // Latitude
  lng: -74.0060,             // Longitude
  hostname: 'nyc01.example.dn42',      // DN42 hostname
  clearnetHost: 'nyc01.example.com',   // Clearnet hostname
  status: 'online',          // 'online', 'maintenance', or 'offline'
  uptime: 99.98,             // Uptime percentage
  peers: 6,                  // Number of peers
}
```

### Peering Policy
- `peeringPolicy.type`: 'Open', 'Selective', or 'Closed'
- `peeringPolicy.requirements`: Array of requirements
- `peeringPolicy.preferredMethods`: Preferred tunnel methods

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Features Overview

- **Responsive Navigation**: Smooth scrolling to sections
- **Hero Section**: Eye-catching introduction with AS info
- **Interactive Map**: Click markers to see node details
- **Node Table**: Sortable list with status indicators
- **Peering Policy**: Clear requirements and contact info
- **Statistics Cards**: Key network metrics
- **Footer**: Attribution and links

## Design Customization

The design uses a cyber terminal aesthetic with:
- Custom colors defined in `tailwind.config.js`
- Animations and effects in `src/index.css`
- Orbitron font for headings
- JetBrains Mono for code/data

To change colors, edit the `colors` section in `tailwind.config.js`:
```javascript
colors: {
  'cyber-dark': '#0a0e1a',
  'cyber-darker': '#050810',
  'cyber-blue': '#00d9ff',
  'cyber-purple': '#b537f2',
  'cyber-green': '#39ff14',
  'cyber-red': '#ff0055',
}
```
