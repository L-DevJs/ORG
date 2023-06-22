import "./Colaborador.css";

const Colaborador = (props) => {

  return (
    <div className="colaborador">
      <div className="encabezado" style={{backgroundColor: `${props.destaque}`}}>
        <img src={props.colaboradores.foto} alt={props.colaboradores.nombre}></img>
      </div>

      <div className="info">
        <h4>{props.colaboradores.nombre}</h4>
        <h5>{props.colaboradores.puesto}</h5>
      </div>
    </div>
  );
};

export default Colaborador
