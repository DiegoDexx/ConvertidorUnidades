import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteConversion } from "../slices/historySlice";
import { getConversionData } from "../functions/LocalStorage";

function History() {
//   const [history, setHistory] = useState([]);
  const history = useSelector((state) => state.history.history); // Leer el historial desde Redux
  const dispatch = useDispatch();

//   useEffect(() => {  YA NO ES NECESARIO, UTILIZAR EN CASO DE NO USAR REDUX PARA GESTIÓN DE HISTORIAL
//     const history = getConversionData();

//     if (history !== null) {
//       setHistory(history);
//     }
//   }, []);

  const handleDelete = (index) => {
    dispatch(deleteConversion(index));
  };

  COMPROBACIÓN:
     console.log(history);

  return (
    <div className="history col-lg-12 ">
  <h2>saved</h2>
  <div className="history__content row">
    {history.length > 0 ? (
      history.map((item, index) => (
 
            <div key={index} className="history__content__item">
            <p>
                {item.value} {item.unit.split("-")[0]} = {item.result} {item.resultUnit}
            </p>
            <button onClick={() => handleDelete(index)}>✕</button>
            </div>

      ))
    ) : (
      <p>No saved conversions yet.</p>
    )}
  </div>
  <br></br>
  <br></br>
  <br></br>
</div>
  );
}

export default History;