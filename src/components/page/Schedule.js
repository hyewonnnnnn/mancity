import React from "react";
import Navigation from "../Navbar/nav";
import Match from "./list/match";
import Footer from "./Footer";
import Support from "./Support";
import TopButton from "./list/TopButton";

const Schedule = () => {
    return(
        <div>
            <Navigation/>

            <header > 
              <h1 style={{
                width:'100%',
                height:'100%'}}
                class="fw-bold fs-2 "> 경기 일정 </h1>
          </header>

          <body>
            <div id='wrap'>
              <Match/>
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

export default Schedule;




