import React from 'react';

const Comparativas = () =>{
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
  
    // Datos de muestra para países y ciudades
    const countries = ['País A', 'País B', 'País C'];
    const cities = ['Ciudad X', 'Ciudad Y', 'Ciudad Z'];
  
    // Datos de muestra para comparativas
    const dataForCountryA = [30, 35, 28, 32, 29];
    const dataForCountryB = [25, 27, 24, 28, 26];
    const dataForCityX = [18, 20, 19, 22, 21];
    // Más datos de muestra para otros países y ciudades
  
    return (
      <div>
        <h1>Página de Comparativas</h1>
        <h2>Comparación de Datos Climáticos</h2>
        <form>
          <label>Selecciona un país:</label>
          <select onChange={(e) => setSelectedCountry(e.target.value)}>
            <option value="">Selecciona un país</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </form>
        <form>
          <label>Selecciona una ciudad:</label>
          <select onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Selecciona una ciudad</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </form>
        {selectedCountry && (
          <div>
            {/* Gráfico de comparación para el país seleccionado */}
            <h3>Comparativa para {selectedCountry}</h3>
            {/* Código para renderizar el gráfico aquí */}
          </div>
        )}
        {selectedCity && (
          <div>
            {/* Gráfico de comparación para la ciudad seleccionada */}
            <h3>Comparativa para {selectedCity}</h3>
            {/* Código para renderizar el gráfico aquí */}
          </div>
        )}
      </div>
    );
}
export default Comparativas