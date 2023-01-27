import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StartPage from "./StartPage/StartPage"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Quiz1 from "./component/Quiz1/Quiz1";
import Quiz2 from "./component/Quiz2/Quiz2";
import Quiz3 from "./component/Quiz3/Quiz3";
import Home from "./Home/Home"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
<React.StrictMode>
  <BrowserRouter>
  
  <Routes>
<Route path="/" element={<StartPage/>}></Route>
<Route path="/quiz1" element={<Quiz1/>}></Route>
<Route path="/quiz2" element={<Quiz2/>}></Route>
<Route path="/quiz3" element={<Quiz3/>}></Route>
<Route path="/home"  element={<Home/>}></Route>
</Routes>

  </BrowserRouter>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
