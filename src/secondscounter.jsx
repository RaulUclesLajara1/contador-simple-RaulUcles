import { useEffect, useState } from "react";

const SecondsCounter = ({ seconds, segundos_regresiva}) => {
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const [regresiva,setRegresiva] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, seconds * 1000);
  }, [seconds]);


  useEffect(() => {
    setTimeout(() => {
        if (visible && !regresiva){
            setContador((seg) => seg +1 )
        }
        else if (visible && regresiva){
            setContador((seg) => seg > 0 ? seg -1: seg)
        }

    },1000)
  },[contador])




  return (
    <div>
        <div className="container-fluid">
            <div className="row text-center mt-5">
                <div className="col fs-1">
                    <p>{contador}</p>
                </div>
            <div className="row text-center mt-5">
                <div className="row">
                    <div className="row-3">
                        <button onClick={() => {setRegresiva(true); setContador(segundos_regresiva)}}type="button" className="btn btn-warning">Regresiva</button>
                    </div>
                </div>

            </div>
            </div>   
        </div>
    </div>
  );
};

export default SecondsCounter;
