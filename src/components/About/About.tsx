import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      {/* <h1>About</h1> */}
      <p>
        <span>
          NFIPIR
        </span>{" "}
        was founded in response to a number of Indigenous Peoples and
        representatives of ethnic republics of Russia immigrating to the United
        States. There is a critical need to support these people as they begin
        their journey as migrants. As many of them are refugees and asylum
        seekers, they face numerous challenges of resettlement while
        experiencing displacement from their native lands (nutag). “Nutag” means
        “small motherland”, “homeland” or “native land" from Buryat and
        Mongolian languages.
      </p>
      <Link to="our_story">Learn More</Link>
    </section>
  );
};

export default About;
