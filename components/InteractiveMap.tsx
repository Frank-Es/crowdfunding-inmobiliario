// components/InteractiveMap.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 
'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

type Project = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  country: string;
  type: string;
};

const projects: Project[] = [
  {
    id: '1',
    name: 'Viviendas en Madrid',
    lat: 40.4168,
    lng: -3.7038,
    country: 'España',
    type: 'Residencial',
  },
  {
    id: '2',
    name: 'Complejo turístico en Tulum',
    lat: 20.211,
    lng: -87.465,
    country: 'México',
    type: 'Turístico',
  },
  {
    id: '3',
    name: 'Centro social en Medellín',
    lat: 6.2442,
    lng: -75.5812,
    country: 'Colombia',
    type: 'Social',
  },
];

export default function InteractiveMap() {
  return (
    <div className="h-[500px] rounded-xl shadow-md overflow-hidden">
      <MapContainer center={[20.0, -30.0]} zoom={2} 
scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map(project => (
          <Marker key={project.id} position={[project.lat, project.lng]}>
            <Popup>
              <strong>{project.name}</strong><br />
              País: {project.country}<br />
              Tipo: {project.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

