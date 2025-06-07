'use client';
import { useEffect } from 'react';


 type Project = {
  id: number;
  name: string;
  type: 'residencial' | 'social';
  country: string;
  coordinates: [number, number];
  legal: string;
  investment: string;
};


const projects: Project [] = [
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

export default function InteractiveMap() {
  useEffect(() => {
    const map = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 10, lng: -40 },
        zoom: 2,
      }
    );

    projects.forEach(project => {
      new window.google.maps.Marker({
        position: {
          lat: project.coordinates[0],
          lng: project.coordinates[1],
        },
        map,
        title: `${project.name} - ${project.country}`,
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: project.type === 'social' ? '#f59e0b' : '#3b82f6',
          fillOpacity: 0.9,
          strokeWeight: 1,
          strokeColor: "#ffffff"
        },
      });
    });
  }, []);

  return (
    <div id="map" className="w-full h-[500px] rounded-xl shadow-md" />
  );
}
