// import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./scss/App.scss";
import PageLayout from "./components/PageLayout";

import { Routes, Route } from "react-router-dom";
import OurStory from "./components/OurStory/OurStory";

// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import OurStory from "./components/OurStory/OurStory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route path="our_story" element={<OurStory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
