// src/App.jsx
import * as React from 'react';
import PetProfile from './components/pet-profile/PetProfile';

// ——— Datos de ejemplo ———
const mockPet = {
  mascota_id: 1,
  mascota_nombre: 'Firulais',
  tipo_mascota: 'Perro',
  mascota_edad: 4,
  mascota_descripcion:
    'Firulais es un perro muy juguetón y cariñoso. Le encanta salir a pasear y perseguir pelotas.',
  cliente_id: 10,
  cliente_nombre: 'María López',
  cliente_email: 'maria.lopez@example.com',
  cliente_telefono: '3001234567',
  cliente_direccion: 'Calle Falsa 123, Bogotá',
  mascota_fotos: [
    'https://via.placeholder.com/600x400?text=Foto+1',
    'https://via.placeholder.com/300x200?text=Foto+2',
    'https://via.placeholder.com/300x200?text=Foto+3',
  ],
};

// ——— Sobrescribimos global.fetch para devolver nuestro mock ———
window.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve(mockPet),
  });

export default function App() {
  // El PetProfile internamente hará fetch('/api/mascotas/1')
  // pero como lo hemos sobrescrito, recibirá `mockPet`.
  return <PetProfile petId={mockPet.mascota_id} />;
}
