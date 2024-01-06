import About from "../About/About";
import ImageWithText from "../ImageWithText/ImageWithText";
import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <h1>
         For Indigenous Peoples, Immigrants & Refugees
        </h1>
        <ul className="list">
          <li>resettlement and integration</li>
          <li>diaspora development</li>
          <li>environmental initiatives</li>
        </ul>
        <div>
        <section id="story-image">
          <ImageWithText
            imageUrl="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2016/12/refugeeyouth-1.jpg"
            altText="refugee"
            overlayText="Dariso: 'war is not for me'"
          />
        </section>
        <div className="call_to_action">
          <button className="">need help?</button>
          <button className="">Get Involved</button>
        </div>

        </div>
        
      </div>
      <About />
    </main>
  );
};

export default Main;
