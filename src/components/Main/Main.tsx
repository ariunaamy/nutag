import "./Main.scss";

const Main = () => {
  return (
    <main>
        <div className="image-wrapper">
        <img
          src="https://static.wixstatic.com/media/nsplsh_55b7ba78b8fd4d1191c399d0a9d6b85e~mv2.jpg/v1/fill/w_1280,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_55b7ba78b8fd4d1191c399d0a9d6b85e~mv2.jpg"
          alt="main image"
        />
        </div>    
        <div className="hero">
          <h1>Helping<br/>Indiginous Peoples<br/>of Siberia</h1>
          <ul>
            <li>resettlement & integration</li>
            <li>community development</li>
            <li>environmental initiatives</li>
          </ul>
          <div className="call_to_action">
          <button className="first">need help?</button>
            <button className="second">Get Inovled</button>
          </div>
        </div>      
      </main>
  );
}

export default Main;