import { createSlice } from "@reduxjs/toolkit";
import { saveConversionData } from "../functions/LocalStorage";

//archivo de historial de conversiones utilizando redux para almacenar y eliminar datos

const initialState = {
  history: JSON.parse(localStorage.getItem("history")) || [],
};

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
      // Reducer para añadir una conversión
      addConversion: (state, action) => {
        const newEntry = action.payload; 
        state.history.push(newEntry); 
        localStorage.setItem("history", JSON.stringify(state.history));
      },
      // Reducer para eliminar una conversión por índice
      deleteConversion: (state, action) => {
        const index = action.payload; 
        state.history = state.history.filter((_, i) => i !== index); 
        localStorage.setItem("history", JSON.stringify(state.history)); 

      },
      //limpieza de historial
      clearHistory: (state) => {
        state.history = []; 
        localStorage.removeItem("history"); 
      },
    },
  });

export const { addConversion, deleteConversion } = historySlice.actions;

export default historySlice.reducer;
