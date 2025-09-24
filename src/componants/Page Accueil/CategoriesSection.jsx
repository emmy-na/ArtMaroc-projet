import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesSection({ categories }) {
  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link to={`/category/${cat.name}`} key={cat.id}>
          <div className="border rounded p-4 hover:shadow-lg transition">
            <h3 className="font-bold text-center">{cat.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
