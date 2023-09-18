import React from 'react';

function Home() {
    // Datos de muestra para los gráficos
    const temperatureData = [23, 25, 26, 24, 22, 21, 20];
    const precipitationData = [10, 5, 7, 12, 8, 9, 6];
    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];
  
    // Cálculo del promedio de temperatura
    const averageTemperature = temperatureData.reduce((acc, val) => acc + val, 0) / temperatureData.length;
  
    return (
      <div>
        <h1>Página Principal</h1>
        <h2>Datos del Cambio Climático</h2>
        <div>
          {/* Gráfico de Temperatura */}
          <h3>Temperatura Promedio</h3>
          {/* Código para renderizar el gráfico aquí */}
        </div>
        <div>
          {/* Gráfico de Precipitación */}
          <h3>Precipitación Mensual</h3>
          {/* Código para renderizar el gráfico aquí */}
        </div>
        <div>
          {/* Datos Acumulativos */}
          <p>Precio Promedio del Menú: $25</p>
          <p>Promedio de HealthScore: {averageTemperature.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default Home;