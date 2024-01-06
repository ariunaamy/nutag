
import Main from "../Main/Main";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

// components
import PageLayout from "../PageLayout";
import OurStory from "../OurStory/OurStory";
import Error from "../Error/Error";
import Team from "../Team/Team";






function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Main />} />
          <Route path="our_story" element={<OurStory />} />
          <Route path="our_team" element={<Team />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
