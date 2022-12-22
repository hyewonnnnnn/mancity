import React from "react";
import Navigation from "../Navbar/nav";
import Record from "./list/record";
import Footer from "./Footer";
import Support from "./Support";
import TopButton from "./list/TopButton";

const Club = () => {
    return(
        <div>
            <Navigation/>

            <header> 
              <h1 style={{
                width:'100%',
                height:'100%'}}
                class="fw-bold fs-2"> 구단 기록 </h1>
          </header>

          <body>
            <div id='wrap'>
              <Record/>
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
export default Club;
