'use client';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const projects = [
  {
    id: 1,
    name: 'EcoViviendas Madrid',
    type: 'residencial',
    country: 'España',
    coordinates: [40.4168, -3.7038],
    legal: 'Ley de Vivienda España 2023',
    investment: 'Desde 1.000€',
  },
  {
    id: 2,
    name: 'Barrio Verde Buenos Aires',
    type: 'social',
    country: 'Argentina',
    coordinates: [-34.6037, -58.3816],
    legal: 'Programa ProCreAr 2024',
    investment: 'Desde 1.000€',
  }
];

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    projects.forEach(project => {
      const color = project.type === 'social' ? 'red' : 'blue';

      const customIcon = L.divIcon({
        html: `<div style="
          background-color: ${color};
          border-radius: 50%;
          width: 14px;
          height: 14px;
          animation: pulse 1.5s infinite;
        "></div>`,
        className: '',
        iconSize: [14, 14],
      });

      const marker = L.marker(project.coordinates, { icon: customIcon 
}).addTo(map);
      marker.bindPopup(`
        <strong>${project.name}</strong><br/>
        País: ${project.country}<br/>
        Inversión: ${project.investment}<br/>
        Legislación: ${project.legal}
      `);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow" 
ref={mapRef}></div>
  );
};

export default InteractiveMap;

