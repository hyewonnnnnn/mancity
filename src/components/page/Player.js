import React from "react";
import Navigation from "../Navbar/nav";
import Soccer from "./list/soccer";
import Footer from "./Footer";
import Support from "./Support";
import TopButton from "./list/TopButton";





const Player = () => {
    return(

      <div>
        
        <Navigation/>

          <header > 
            <h1 style={{
              width:'100%',
              height:'100%'}}
              class="fw-bold fs-2"> 선수 </h1>
          </header>

         <body>
           <div id='wrap'>
               <Soccer/>
           </div>
         </body>
         <div>
          <TopButton/>
         </div>
         <div>
          <Support/>
         </div>
         <footer>
          <Footer/>
         </footer>
        
      </div>
    )

 
}

export default Player;