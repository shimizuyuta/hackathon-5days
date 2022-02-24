// import react from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from "./page/Top";
import "normalize.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
