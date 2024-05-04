import React from "react";

function TeamCard({ image, name, position }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-full">
      <img src={image} alt={name} className="w-full h-auto rounded-full" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
