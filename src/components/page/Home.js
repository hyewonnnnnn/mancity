import Navigation from "../Navbar/nav";
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import Footer from "./Footer";
import Support from "./Support";
import TopButton from "./list/TopButton";

function Home() {
  return (
    
    <body>
        <div id='wrap'>
          <Navigation/>
          <Carousel fade>
             <Carousel.Item>
               <img  
                 src="img/citc-nissan-powerchairs.webp"
                 alt="rainbow"
                 width="1400px"
                 height="700px"
               />
               <Carousel.Caption>
                 <h1>에티하드 경기장에서 파워체어 축구를 시도하는 팬들</h1>
               </Carousel.Caption>
             </Carousel.Item>

             <Carousel.Item>
               <img 
                 src="img/ballers-press-release-image.webp"
                 alt="dinner"
                 width="1400px"
                 height="700px"
               />
        
               <Carousel.Caption>
                 <h1> 밸러스 샴페인이 맨체스터 시티의 공식 샴페인 지역 파트너가 되다.</h1>
               </Carousel.Caption>
              </Carousel.Item>

               <Carousel.Item>
               <img
                 src="img/pl-live-philly.webp"
                 alt="proud"
                 width="1400px"
                 height="700px"
               />
        
               <Carousel.Caption>
                 <h1>프리미어 리그 라이브를 위해 필라델피아로 향하는 시티 팬들</h1>
               </Carousel.Caption>
              </Carousel.Item>
           </Carousel>
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
     </body>
  );
}

export default Home;
