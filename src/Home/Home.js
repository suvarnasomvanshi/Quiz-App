import "./Home.css";
import React from "react";
import {Link} from "react-router-dom"
function Home (){
    return(
        <>
        <div className="Home">
        <button className="btn2"><Link to="/quiz1">Quiz1</Link></button>
        <button className="btn2"><Link to="/quiz2">Quiz2</Link></button>
        <button className="btn2"><Link to="/quiz3">Quiz3</Link></button>
        </div>
        
        </>
    )
}
export default Home