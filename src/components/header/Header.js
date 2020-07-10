import React from "react" ;
import ImageHeader from "./image/undraw_programming.png";


function Header() {
    return (
        <div className="header">
            <div className="headers">
            <div className="image-header">
            <img src={ImageHeader}/>
           </div>
          
             <h4>Mau Belajar Pemprogramman atau order Membuat Web ?</h4>
              <p>Kami mempunyai pembelajaran tentang beberapa bahasa pemprogramman yang ramai di gunakan oleh para programmer untuk membuat Aplikasi</p>
             
            </div>
        </div>
    )
}

export default Header ;