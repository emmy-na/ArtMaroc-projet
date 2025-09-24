import React from "react";

export default function LatestAdditions({ artworks }) {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {artworks.slice(0, 5).map((art) => (
        <div key={art.id} className="border rounded p-2">
          <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
          <h3 className="font-bold mt-2">{art.title}</h3>
          <p>{art.city}, {art.region}</p>
          <p className="text-sm">{art.category}</p>
        </div>
      ))}
    </div>
  );
}
