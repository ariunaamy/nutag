import About from "../About/About";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <h1>
          For <span>Indigenous Peoples</span>, Immigrants & Refugees
          <br />
        </h1>
        <div className="call_to_action">
          <button className="first">need help?</button>
          <button className="second">Get Involved</button>
        </div>
      </div>
      <section id="story">
        <h1>Dariso's Story</h1>
        <div className="image-wrapper">
          <img src="../../images/refugees.png" alt="refugees" />
        </div>
      </section>
      <About/>
    </main>
  );
};

export default Main;
