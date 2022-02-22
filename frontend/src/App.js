// import react from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from "./page/Top";
import Watch from "./page/Watch";
import Search from "./page/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
