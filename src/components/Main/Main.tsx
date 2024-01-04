import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <h1>
          Helping
          <br />
          <span>Indigenous People</span>
          <br />
          of Siberia with resettlement
        </h1>
        <div className="call_to_action">
          <button className="first">need help?</button>
          <button className="second">Get Involved</button>
        </div>
      </div>
      <div className="image-wrapper">
        <img
          src="../../images/refugees.png"
          alt="refugees"
        />
      </div>
    </main>
  );
};

export default Main;
