
import { useState, useEffect } from 'react';
import { FaHeart, FaExchangeAlt } from 'react-icons/fa';
import { units, convert } from '../functions/config';
import { useDispatch } from "react-redux";
import { saveConversionData, getConversionData, removeItem } from '../functions/LocalStorage';

function Converter() {
    const [unit, setUnit] = useState('km-to-miles');
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    const dispatch = useDispatch();

   useEffect(() => {
    setResult(convert(value, unit));
    }, [value, unit]);

    const HandleSaveFavInStorage = (value, unit, result) => {

        saveConversionData(dispatch, value, unit, result);

    //     COMPROBACIÓN:
    //     if(saveConversionData){
    //         console.log("guardado: " + value + " " + unit + " = " + result + " " + unit.split('-')[2]);
    // }
}

    const changeValueToResultField = (value, result) => {
        setValue(result);
        setResult(value);
    }


    return (
       <div className="converter col-lg-12">
          <div className="converter__content">

            <h2>converter</h2>
            {/* Formulario de conversión con todas las opciones de conversión  */}
            <form className='form-converter'>

                <div className='form-group1'>
                <select 
                    id="unit"
                    className='select-unit'
                    value={unit} 
                    onChange={
                    (e) => setUnit(e.target.value)}>

                {/* Array de options de la variable units */}
                {units.map((unit) => (
                    <option key={unit} value={unit}>
                    {unit}
                    </option>
                ))}
                        
                </select>
                {/* Input para ingresar el valor a convertir */}
                <button 
                type='button'
                className='exchange'
                onClick={(e) => {
                    e.preventDefault;
                     changeValueToResultField(value, result);
                     }}
                
                >
                    <FaExchangeAlt className='exchange-icon'  />

                </button>
                </div>
                
                <input type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className='input-number'
                />

            </form>
            
            {/* Botón de guardado con corazón */}
            <div className='result-and-heart'>
                
                    <button 
                    className='result-and-heart__btn'
                    onClick={() => HandleSaveFavInStorage(value, unit, result)}>
                    <FaHeart />
                    </button>
                    {/* Resultado de la conversión con unidad */}
                    <p id='result'>{result} <small>{unit.split('-')[2] }</small></p>

            </div>
          </div>

        </div>

    );
}

export default Converter;