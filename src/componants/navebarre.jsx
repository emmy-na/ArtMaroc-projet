import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">ArtConnect Maroc</div>
      <div className="space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/favorites">Favoris</Link>
        <Link to="/publish">Publier</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
