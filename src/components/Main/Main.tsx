import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <h1>
          Helping
          <br />
          <span>Indiginous People</span>
          <br />
          of Siberia with resettlement
        </h1>
        <div className="call_to_action">
          <button className="first">need help?</button>
          <button className="second">Get Inovled</button>
        </div>
      </div>
      <div className="image-wrapper">
        <img
          src="https://kcls.bibliocommons.com/events/uploads/images/full/7464a4fb68fb878716ade9c25ce7ee9e/family-asian-diverse-buryat-mongoledit.jpg"
          alt="main image"
        />
      </div>
    </main>
  );
};

export default Main;
