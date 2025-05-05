import React, { useEffect, useState } from "react";
import "./Indicators.css";

export const Indicators = () => {
  const [indicators, setIndicators] = useState([]);
  const [indicatorData, setIndicatorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Estado para los datos filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [selectedIndicator, setSelectedIndicator] = useState(null); // Estado para el indicador seleccionado

  const getAllIndicators = async () => {
    const data = await fetch("http://localhost:3000/api/indicator", {
      method: "GET",
    });
    const indicatorName = await data.json();
    setIndicators(indicatorName);
  };

  const getIndicatorData = async (id) => {
    const data = await fetch(`http://localhost:3000/api/indicator/${id}`, {
      method: "GET",
    });
    const indicatorData = await data.json();
    setIndicatorData(indicatorData);
    setFilteredData(indicatorData); // Inicialmente, mostramos todos los datos
    setSelectedIndicator(id); // Guardamos el indicador seleccionado
  };

  // Filtrado de datos por el nombre de la comuna
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filtramos los datos según el término de búsqueda
    const filtered = indicatorData.filter((item) =>
      item.commune.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    getAllIndicators();
  }, []);

  return (
    <div className="container-indicators">
      <div className="sidebar">
        {indicators.map((i) => (
          <button
            key={i.id}
            onClick={() => getIndicatorData(i.id)}
            className={selectedIndicator === i.id ? "selected" : ""}
          >
            {i.name}
          </button>
        ))}
      </div>

      <div className="indicator-information">
        {/* Mostrar el nombre del indicador seleccionado */}
        {selectedIndicator && (
          <h3>Indicador seleccionado: {indicators.find(i => i.id === selectedIndicator).name}</h3>
        )}

        <h3>Filtrar por comuna:</h3>
        {/* Campo de búsqueda */}
        <input
          type="text"
          placeholder="Buscar comuna..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        {/* Mostrar los datos filtrados */}
        {filteredData.map((i) => (
          <div key={i.idCommune} className="indicator-detail">
            <p><strong>{i.commune}</strong></p>
            <p className="value">{i.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
