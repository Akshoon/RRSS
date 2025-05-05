import { useState, useEffect } from 'react';
import './Commune.css';

export const Commune = () => {
  const [communes, setCommunes] = useState([]);
  const [filteredCommunes, setFilteredCommunes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [searchFilters, setSearchFilters] = useState({
    name: '',
    province: '',
    address: '',
    mayor: '',
    surface: '',
    population: ''
  });

  const [filterType, setFilterType] = useState('name');

  useEffect(() => {
    const fetchCommunes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/commune');
        if (!response.ok) throw new Error('Error al cargar las comunas');
        const result = await response.json();
        setCommunes(result.data);
        setFilteredCommunes(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunes();
  }, []);

  useEffect(() => {
    if (searchFilters[filterType]) {
      const filtered = communes.filter(commune =>
        commune[filterType].toLowerCase().includes(searchFilters[filterType].toLowerCase())
      );
      setFilteredCommunes(filtered);
      setHasSearched(true);
    } else {
      setFilteredCommunes([]);
      setHasSearched(false); // Si no hay filtros, no se muestran resultados
    }
  }, [searchFilters, filterType, communes]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  if (loading) return <div className="loading">Cargando comunas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="commune-container">
      <h1 className="title">Comunas Disponibles</h1>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            name={filterType}
            placeholder={`Buscar por ${filterType}...`}
            value={searchFilters[filterType]}
            onChange={handleFilterChange}
            className="search-input"
          />
          <select
            id="filter-type"
            value={filterType}
            onChange={handleFilterTypeChange}
            className="filter-select"
          >
            <option value="name">Nombre Comuna</option>
            <option value="province">Provincia</option>
            <option value="address">Dirección</option>
            <option value="mayor">Alcalde</option>
            <option value="surface">Superficie</option>
            <option value="population">Población</option>
          </select>
        </div>
        <button
          onClick={() => setSearchFilters({
            name: '',
            province: '',
            address: '',
            mayor: '',
            surface: '',
            population: ''
          })}
          className="reset-filters"
        >
          Borrar Filtros
        </button>
      </div>

      {/* Solo mostrar los resultados si se ha realizado una búsqueda */}
      {hasSearched && (
        <div className="commune-grid">
          {filteredCommunes.length > 0 ? (
            filteredCommunes.map(commune => (
              <CommuneCard key={commune.id} commune={commune} />
            ))
          ) : (
            <div className="no-results">No se encontraron resultados</div>
          )}
        </div>
      )}
    </div>
  );
};

const CommuneCard = ({ commune }) => (
  <div className="commune-card">
    <h2>{commune.name}</h2>
    <div className="commune-details">
      <p><strong>Provincia:</strong> {commune.province}</p>
      <p><strong>Dirección:</strong> {commune.address}</p>
      <p><strong>Alcalde:</strong> {commune.mayor}</p>
      <p><strong>Superficie:</strong> {commune.surface}</p>
      <p><strong>Población:</strong> {commune.population}</p>
    </div>
  </div>
);
