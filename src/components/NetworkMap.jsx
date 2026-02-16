import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { networkConfig } from '../config';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function NetworkMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true,
    });

    // Add CartoDB Dark Matter tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    // Custom icon for nodes
    const createCustomIcon = (status) => {
      const color = status === 'online' ? '#39ff14' : status === 'maintenance' ? '#fbbf24' : '#ff0055';
      return L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="position: relative;">
            <div style="
              width: 16px;
              height: 16px;
              background: ${color};
              border: 2px solid #00d9ff;
              border-radius: 50%;
              box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
              animation: glow-pulse 2s ease-in-out infinite;
            "></div>
            <div style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 30px;
              height: 30px;
              border: 1px solid ${color};
              border-radius: 50%;
              opacity: 0.3;
            "></div>
          </div>
        `,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });
    };

    // Add markers for each node
    networkConfig.nodes.forEach((node) => {
      const marker = L.marker([node.lat, node.lng], {
        icon: createCustomIcon(node.status),
      }).addTo(map);

      // Create popup content
      const popupContent = `
        <div class="p-2">
          <div class="font-display font-bold text-lg mb-2 text-cyber-blue">${node.city}, ${node.country}</div>
          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Node ID:</span>
              <span class="font-mono text-cyber-green">${node.id}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Hostname:</span>
              <span class="font-mono text-cyber-blue">${node.hostname}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Clearnet:</span>
              <span class="font-mono text-cyber-blue">${node.clearnetHost}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Status:</span>
              <span class="uppercase text-${node.status === 'online' ? 'cyber-green' : node.status === 'maintenance' ? 'yellow-400' : 'cyber-red'}">${node.status}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Uptime:</span>
              <span class="text-cyber-green">${node.uptime}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-cyber-blue/60">Peers:</span>
              <span class="text-cyber-purple">${node.peers}</span>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'cyber-popup',
      });
    });

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="map" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow-blue mb-4">
            Global Network Map
          </h2>
          <p className="text-cyber-blue/70 max-w-2xl mx-auto">
            Real-time visualization of our distributed network infrastructure across {networkConfig.statistics.continentsCovered} continents
          </p>
        </div>

        <div className="cyber-card max-w-6xl mx-auto">
          <div
            ref={mapRef}
            className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
            style={{ background: '#0a0e1a' }}
          ></div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="status-indicator status-online"></div>
              <span>Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="status-indicator status-maintenance"></div>
              <span>Maintenance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="status-indicator status-offline"></div>
              <span>Offline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
