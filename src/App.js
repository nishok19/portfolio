import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home/Home";
import MyWork from "./components/MyWork/MyWork";
import Nav from "./components/Nav/Nav";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
