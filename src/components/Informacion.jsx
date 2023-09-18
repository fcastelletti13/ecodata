import React from 'react';

const Informacion = () =>{
      // Datos de muestra sobre el cambio climático
    const climateInfo = [
    {
      title: 'Causas del Cambio Climático',
      content:
        'El cambio climático es causado principalmente por las emisiones de gases de efecto invernadero, como el dióxido de carbono (CO2) y el metano (CH4).',
    },
    {
      title: 'Efectos del Cambio Climático',
      content:
        'Los efectos del cambio climático incluyen el aumento de la temperatura global, el deshielo de los glaciares, el aumento del nivel del mar y eventos climáticos extremos.',
    },
    {
      title: 'Índices de Medición',
      content:
        'Los índices de medición del cambio climático incluyen el Índice de Desarrollo Humano (IDH), el Índice de Calidad del Aire y el Índice de Vulnerabilidad Climática.',
    },
  ];

  return (
    <div>
      <h1>Página de Información</h1>
      <h2>Información sobre el Cambio Climático</h2>
      {climateInfo.map((info, index) => (
        <div key={index}>
          <h3>{info.title}</h3>
          <p>{info.content}</p>
        </div>
      ))}
    </div>
  );
}
export default Informacion