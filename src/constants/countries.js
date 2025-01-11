// src/constants/countries.js

const countries = [
    { name: "Argentina", code: "AR" },
    { name: "Brasil", code: "BR" },
    { name: "Chile", code: "CL" },
    { name: "Colombia", code: "CO" },
    { name: "Perú", code: "PE" },
    { name: "Uruguay", code: "UY" },
  ];
  
  // Crear un mapa para acceso rápido
  const countryMap = countries.reduce((acc, country) => {
    acc[country.code] = country.name;
    return acc;
  }, {});
  
  export { countries, countryMap };
  