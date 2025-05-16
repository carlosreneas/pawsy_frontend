// src/components/pet-profile/PetProfile.jsx
import React from "react";
import './PetProfile.css';

const PetProfile = () => {
  const pet = {
    name: "Max",
    age: 3,
    breed: "Golden Retriever",
    owner: "Camilo",
    photo: "https://via.placeholder.com/150"
  };

  return (
    <div className="pet-profile">
      <img src={pet.photo} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p><strong>Edad:</strong> {pet.age} años</p>
      <p><strong>Raza:</strong> {pet.breed}</p>
      <p><strong>Propietario:</strong> {pet.owner}</p>
    </div>
  );
};

export default PetProfile;
