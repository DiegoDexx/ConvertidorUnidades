
import { addConversion } from "../slices/historySlice";


//guardar en local storage genérico
export const saveItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  };

//guardar en local storage datos de comversión 100 millas (en este caso usamos funcio dispatch de redux)
export const saveConversionData = (dispatch, value, unit, result) => {
  try {                             //pasamos dispatch como argumento para optimizar codigo de complemento 
      const newEntry = {
          value: value,
          unit: unit,
          result: result,
          resultUnit: unit.split('-')[2],
      };

      dispatch(addConversion(newEntry));
      
  } catch (error) {
      console.error('Error saving conversion data', error);
  }
};

//obtener datos de conversión de local storage
export const getConversionData = () => {
    try {
      return JSON.parse(localStorage.getItem('history'));
    } catch (error) {
      console.error('Error getting data from localStorage', error);
    }
    }

//obtener de local storage
export const getItem = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error('Error getting data from localStorage', error);
    }
    }
    
  
    // Function to remove an item from localStorage
export const removeItem = (key) => {
      window.localStorage.removeItem(key);
    };

