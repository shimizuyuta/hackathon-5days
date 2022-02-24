// import react from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from "./page/Top";
import Watch from "./components/watch/Watch";
import "normalize.css";

import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


function App() {
  const sendApi = async() =>{
    // const data = await API.get('apif0a60b76','/teamB')
    const data = await API.get('apif0a60b76','/item')
    console.log(data)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
      <button onClick={sendApi}>bbb</button>
    </div>
  );
}

export default App;
