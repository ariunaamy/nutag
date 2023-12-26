import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="image-wrapper">
        <img
          src="https://i.cbc.ca/1.6605670.1664905842!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/russia-victory-day.jpg"
          alt="main image"
        />
      </div>
      <div className="hero">
        <h1>
          Helping
          <br />
          <span>Indiginous Peoples</span>
          <br />
          of Siberia with resettlement
        </h1>
        {/* <ul>
            <li>resettlement & integration</li>
            <li>community development</li>
            <li>environmental initiatives</li>
          </ul> */}
        <div className="call_to_action">
          <button className="first">need help?</button>
          <button className="second">Get Inovled</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
