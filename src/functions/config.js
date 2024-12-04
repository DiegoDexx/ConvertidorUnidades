//variables y funciones de lógica 

//variables de configuración para los valores de cnversión
export const units = [
    "km-to-miles",
    "miles-to-km",
    "feet-to-meters",
    "meters-to-feet",
    "cm-to-inches",
    "inches-to-cm",
    ];
    
export  const convert = (value, unit) => {
    const numValue = parseFloat(value); 
    if (isNaN(numValue)) return ""; 

    switch (unit) {
      case "km-to-miles":
        return (numValue * 0.621371).toFixed(2); // Kilómetros a millas
      case "miles-to-km":
        return (numValue / 0.621371).toFixed(2); // Millas a kilómetros
      case "feet-to-meters":
        return (numValue * 0.3048).toFixed(2); // Pies a metros
      case "meters-to-feet":
        return (numValue / 0.3048).toFixed(2); // Metros a pies
      case "cm-to-inches":
        return (numValue * 0.393701).toFixed(2); // Centímetros a pulgadas
      case "inches-to-cm":
        return (numValue / 0.393701).toFixed(2); // Pulgadas a centímetros
      default:
        return ""; // Si no hay coincidencia, retorna vacío
    }
  };