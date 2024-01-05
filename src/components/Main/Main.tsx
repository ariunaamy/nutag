import About from "../About/About";
import ImageWithText from "../ImageWithText/ImageWithText";
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
          <button className="">need help?</button>
          <button className="">Get Involved</button>
        </div>
      </div>
      <section id="story">
        <ImageWithText imageUrl="https://cdn.hourdetroit.com/wp-content/uploads/sites/20/2016/12/refugeeyouth-1.jpg"
        altText="refugee"
        overlayText="Meet Dariso: 'war made us leave'"/>
      </section>
      <About/>
    </main>
  );
};

export default Main;
