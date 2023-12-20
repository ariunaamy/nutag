import "./scss/App.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <p>
          Our mission is to support and help the Indigenous Peoples of Russia
          and under-served immigrants & refugees, as they embark on their
          journey to the United States. Through our programs and services, we
          facilitate a holistic resettlement process, cultivate economic
          stability, strengthen local diasporas (communities) and their
          cultures, as well as support environmental initiatives recognizing the
          vital connection to their native lands.
        </p>
        <img
          src="https://static.wixstatic.com/media/nsplsh_55b7ba78b8fd4d1191c399d0a9d6b85e~mv2.jpg/v1/fill/w_1280,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_55b7ba78b8fd4d1191c399d0a9d6b85e~mv2.jpg"
          alt="main image"
        />
        
      </main>
    </>
  );
}

export default App;
