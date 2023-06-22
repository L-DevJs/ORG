import { useState } from "react";
import "./Form.css";
import InputText from "../InputText/InputText";
import Select from "../Select/Select";
import Button from "../Button/Button";

export default function Form(props) {

  const [name, setName] = useState("");
  const [ocupation, setOcupation] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      nombre: name,
      puesto: ocupation,
      foto: photo,
      equipo: team,
    };

    props.registrarColaborador(data);

    setName("")
    setOcupation("")
    setPhoto("")
    setTeam("")

  };

  return (
    <section className="formulario">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <InputText
          titulo="Nombre"
          placeholder="Ingresar nombre"
          requerido={true}
          valor={name}
          name={setName}
        />
        <InputText
          titulo="Puesto"
          placeholder="Ingresar puesto"
          requerido={true}
          valor={ocupation}
          name={setOcupation}
        />
        <InputText
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          requerido={true}
          valor={photo}
          name={setPhoto}
        />
        <Select titulo="Equipo" valor={team} choice={setTeam} equipos={props.equipos} />
        <Button>Crear</Button>
      </form>
    </section>
  );
}
