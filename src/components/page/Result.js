import React from "react";
import Navigation from "../Navbar/nav";
import Footer from "./Footer";
import Gameresult from "./list/gameresult";
import TopButton from "./list/TopButton";
import Support from "./Support";

const Result = () => {
    return(
        <div>
            <Navigation/>

            <header > 
              <h1 style={{
                width:'100%',
                height:'100%'}}
                class="fw-bold fs-2"> 경기 결과 </h1>
          </header>

          <body>
            <div id='wrap'>
                <Gameresult/>
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

export default Result;

      



