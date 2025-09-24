import React, { useState, useContext } from "react";
import { ArtworksContext } from "../context/ArtworksContext";

export default function SearchBlock() {
  const { artworks, setFilteredArtworks } = useContext(ArtworksContext);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    const filtered = artworks.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.region.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Rechercher par mot-clé ou région..."
        value={query}
        onChange={handleSearch}
        className="border p-2 w-full rounded"
      />
    </div>
  );
}
