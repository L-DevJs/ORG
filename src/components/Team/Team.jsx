import "./Team.css";
import Colaborador from "../Colaboradores/Colaborador";

const Team = ({ object, datos }) => {
  return (
    <>
      {datos.length > 0 && (
        <section
          className="team"
          style={{ backgroundColor: `${object.fondo}` }}
        >
          <h3 style={{ borderBottom: `4px solid ${object.destaque}` }}>
            {object.titulo}
          </h3>
          <div className="colaboladores">
            {datos.map((colaboradores, index) => (
              <Colaborador key={index} colaboradores={colaboradores} destaque={object.destaque} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
