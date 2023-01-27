import React from "react"
import {Link} from "react-router-dom"
import  "./StartPage.css"
import Home from "../Home/Home"
function StartPage(){
    return(
        <>

           
          <Link to="/home">
               <button className="btn">
                    START
                </button>
            </Link>
        </>
    )
}
export default StartPage