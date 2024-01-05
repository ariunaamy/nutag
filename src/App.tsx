
import Main from "./components/Main/Main";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";

// components
import PageLayout from "./components/PageLayout";
import OurStory from "./components/OurStory/OurStory";
import Error from "./components/Error/Error";






function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route path="our_story" element={<OurStory />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
