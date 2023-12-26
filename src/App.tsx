import "./scss/App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  return (
    <>
     <Header/>
     <Main/>
      <div id="resettlement">
        <p>
          We are committed to providing arriving immigrants and refugees with
          essential resources and support for successful resettlement and
          integration in the U.S. We understand that the immigration process can
          be difficult, which is why we offer a range of informational and
          financial resources to help ease the transition and ensure a
          successful start.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
