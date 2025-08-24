import { useEffect, useState } from "react";

const SecondsCounter = ({ segundos_incio, segundos_regresiva, segundos_alerta}) => {
  const [contador, setContador] = useState(0);
  const [visible, setVisible] = useState(false);
  const [regresiva,setRegresiva] = useState(false)
  const [alerta, setAlerta] = useState(false)
  const [reiniciar,setReinciar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, segundos_incio * 1000);
  }, [segundos_incio]);


  useEffect(() => {
    setTimeout(() => {

        setAlerta(false);
        
        
        
        if (visible && !regresiva){
          setContador((seg) => seg +1 )
          if (contador == segundos_alerta){
          setAlerta(true)
        }
          
        }
        else if (visible && regresiva){
          setContador((seg) => seg > 0 ? seg -1: seg)
        }
        if(reiniciar){
          setContador(0);
          setReinciar(false)
        }
        
        
    },1000)
  },[contador,visible])




  return (
    <div>
        <div className="container-fluid">
            <div className="row text-center mt-5">
                <div className="col fs-1 text-light">
                    <p>{contador}</p>
                </div>
            <div className="row text-center mt-5">
                <div className="row ">
                    <div className="col d-flex justify-content-center gap-2">
                        <button onClick={() => {setRegresiva(true); setContador(segundos_regresiva)}}type="button" className="btn btn-warning">Regresiva</button>
                        <button onClick={() => {setVisible(false)}}type="button" className="btn btn-danger">Parar</button>
                        <button onClick={() => {setVisible(true)}}type="button" className="btn btn-success">Continuar</button>
                        <button onClick={() => {setReinciar(true)}}type="button" className="btn btn-info">Reinciar</button>
                        
                    </div>
                  </div>
                <div className="row">
                    <div className="col d-flex justify-content-center mt-5">
                        {alerta ? <div className="alert alert-danger" role="alert">Ya ha llegado a {segundos_alerta}</div> : ""}
                    </div>
                </div>
                
                

            </div>
            </div>   
        </div>
    </div>
  );
};

export default SecondsCounter;
