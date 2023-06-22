import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import MyOrg from "./components/MyOrg/MyOrg";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  const [show, changed] = useState(false);
  const [colaborador, setColaborador] = useState([]);

  const changedShow = () => {
    changed(!show);
  };

  const teams = [
    {
      titulo: "Programacion",
      destaque: "#57C278",
      fondo: "#D9F7E9",
    },
    {
      titulo: "Front End",
      destaque: "#82CFFA",
      fondo: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      destaque: "#A6D157",
      fondo: "#F0F8E2",
    },
    {
      titulo: "Devops",
      destaque: "#E06B69",
      fondo: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      destaque: "#DB6EBF",
      fondo: "#FAE9F5",
    },
    {
      titulo: "Movil",
      destaque: "#FFBA05",
      fondo: "#FFF5D9",
    },
    {
      titulo: "Innovacion y Gestion",
      destaque: "#FF8A29",
      fondo: "#FFEEDF",
    },
  ];

  const registrarColaborador = (colaboradores) => {
    console.log("Nuevo usuario ", colaboradores);

    //Spread Operator
    setColaborador([...colaborador, colaboradores]);
  };

  return (
    <div className="App">
      <Header />
      {show === true ? (
        <Form
          equipos={teams.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      ) : (
        <></>
      )}
      <MyOrg changedShow={changedShow} />
      {teams.map((equipo) => {
        return (
          <Team
            object={equipo}
            key={equipo.titulo}
            datos={colaborador.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
