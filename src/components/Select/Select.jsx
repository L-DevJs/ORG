import "./Select.css";

const Select = ({ titulo, valor, choice,equipos}) => {
  

  const handleChange = (e) => {
    choice(e.target.value);
  };

  return (
    <div className="select">
      <label>{titulo.toUpperCase()}</label>
      <select value={valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccione un equipo
        </option>
        {equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
