import "./MyOrg.css";

const MyOrg = ({changedShow}) => {
  
  return (
    <section className="orgSection">
      <h3 className="tittle">Mi organizacion</h3>
      <img src="/img/add.png" alt="add" onClick={changedShow}></img>
    </section>
  );
};

export default MyOrg;
