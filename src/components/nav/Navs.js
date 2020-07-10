import React from "react" ;
import {Link} from "react-router-dom";
import Logo from "./image/logo.png";



const Navs = () => {
    return(
       <nav>
       
       {/* Navbar */}

            <div className="nav-logo">
                
               <h3>H-Tech.id</h3>
            </div>
      
       
         <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/lesson">Lesson</Link>
            </li>
            <li>
            <Link to="/form">Form Daftar</Link>
            </li>
               
         </ul>
      
            
        

       

     

       
       </nav>
    )
}

export default Navs ;