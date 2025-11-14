import React, { useEffect, useRef } from 'react';

// Declare L to avoid TypeScript errors since it's loaded from a script.
declare const L: any;

// Approximate coordinates for branch locations
const branches = [
    { name: 'Jaffna', position: { lat: 9.6615, lng: 80.0255 } },
    { name: 'Anuradhapura', position: { lat: 8.3114, lng: 80.4037 } },
    { name: 'Batticaloa', position: { lat: 7.7100, lng: 81.7000 } },
    { name: 'Kurunegala', position: { lat: 7.4818, lng: 80.3609 } },
    { name: 'Kandy', position: { lat: 7.2906, lng: 80.6337 } },
    { name: 'Gampaha', position: { lat: 7.0929, lng: 79.9986 } },
    { name: 'Colombo', position: { lat: 6.9271, lng: 79.8612 } },
    { name: 'Kalutara', position: { lat: 6.5854, lng: 79.9612 } },
    { name: 'Ratnapura', position: { lat: 6.6853, lng: 80.4038 } },
    { name: 'Bandarawela', position: { lat: 6.8333, lng: 80.9833 } },
    { name: 'Matara', position: { lat: 5.9549, lng: 80.5550 } },
];

const BranchNetworkMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any | null>(null);

  useEffect(() => {
    // Initialize map only once
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map with interactions disabled
    const map = L.map(mapRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        dragging: false, // Disable map dragging
    });
    mapInstance.current = map;

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define the geographical bounds for Sri Lanka
    const bounds: [[number, number], [number, number]] = [
      [5.92, 79.68], // Southwest corner
      [9.84, 81.88]  // Northeast corner
    ];

    // Fit map to Sri Lanka bounds
    map.fitBounds(bounds);

    // Zoom out slightly to ensure map edges are not cut off, and lock it
    const newZoom = map.getZoom() - 0.2;
    map.setZoom(newZoom);
    map.setMaxBounds(bounds);
    map.setMinZoom(newZoom);
    map.setMaxZoom(newZoom);

    // Create a custom pulsing icon using L.divIcon
    const pulsingIcon = L.divIcon({
        className: 'custom-pulsing-icon',
        html: `
            <div class="relative flex justify-center items-center">
              <div class="absolute w-6 h-6 bg-red-500 rounded-full animate-ping-slow opacity-75"></div>
              <div class="relative w-4 h-4 bg-red-600 border-2 border-white rounded-full shadow-lg"></div>
            </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
    });

    // Add markers for each branch
    branches.forEach(branch => {
      const marker = L.marker([branch.position.lat, branch.position.lng], { icon: pulsingIcon }).addTo(map);
      marker.bindPopup(`<div class="p-1 font-bold text-base text-kayjay-green">${branch.name} Branch</div>`);
    });
    
    // Cleanup on component unmount
    return () => {
        if(mapInstance.current) {
            mapInstance.current.remove();
            mapInstance.current = null;
        }
    };

  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-kayjay-green">Our Island-wide Branch Network</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            With branches strategically located across Sri Lanka, we provide comprehensive security coverage wherever you are.
          </p>
        </div>
        
        <div className="rounded-lg shadow-2xl overflow-hidden max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div ref={mapRef} className="w-full h-[600px] z-0" aria-label="Map of Sri Lanka with KayJay branch locations"></div>
        </div>
      </div>
    </section>
  );
};

export default BranchNetworkMap;