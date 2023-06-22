import "./InputText.css";

const InputText = ({ titulo, placeholder, requerido, valor, name }) => {
  const holder = `${placeholder}...`;

  const handleChange = (e) => {
    name(e.target.value);
  };

  return (
    <div className="input-Text">
      <label>
        {titulo.toUpperCase()}
        <input
          placeholder={holder}
          required={requerido}
          value={valor}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default InputText;
