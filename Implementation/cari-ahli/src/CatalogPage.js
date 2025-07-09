import React from "react";
import "./CatalogPage.css";

const CatalogPage = () => {
  const wasteCatalog = [
    { id: 1, type: "Plastik", description: "Sampah plastik seperti botol dan kantong." },
    { id: 2, type: "Kertas", description: "Kertas bekas, kardus, dan sejenisnya." },
    { id: 3, type: "Logam", description: "Logam bekas seperti kaleng dan besi tua." },
  ];

  return (
    <div className="catalog-page">
      <h1>Katalog Jenis Sampah</h1>
      <ul>
        {wasteCatalog.map((item) => (
          <li key={item.id}>
            <h3>{item.type}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
