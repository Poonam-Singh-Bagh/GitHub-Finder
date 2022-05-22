import logo from "./logo.svg";
import "./App.css";
import "./Component/Style.css";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SearchBar from "./Component/SearchBar";
import Profile from "./Component/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <h1>Hi Komal</h1>
    //   <Switch>
    //   <Router>
    //   <Routes>
    //     <Route path="/" element={<SearchBar />} />
    //     <Route path="/profile" element={<Profile />} />
    //   </Routes>
    //   </Router>
    //   </Switch>
    // </div>
  );
}

export default App;
