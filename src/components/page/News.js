import React from "react";
import Navigation from "../Navbar/nav";
import Footer from "./Footer";
import TopButton from "./list/TopButton";
import Support from "./Support";
import Card from "./list/Card";


const News = () => {
    return(
      
    <div>
      <Navigation/>
      <header> 
        <h1 style={{
          width:'100%',
          height:'100%'}}
          class="fw-bold fs-2"> 소식 </h1>
      </header>
      <body>
        <div id='wrap'>
          <Card/>
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

export default News;