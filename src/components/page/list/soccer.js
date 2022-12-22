import React from "react";
import { Link } from 'react-router-dom';
import { Card , CardGroup } from "react-bootstrap";



const Soccer = () => {
    return(
      

     <div className="m">
        <p className='middle'>골키퍼</p>
           <CardGroup>
             <Card >
               <Card.Img variant="top" src="img/zack-steffen.webp" />
               <Card.Body>
                 <Card.Title>ZACK STEFFEN</Card.Title>
                 <Card.Text>
                   1995.04.02
                 </Card.Text>
                 <Card.Text>
                   미국 🇺🇸
                 </Card.Text>
                 <Link to="/Zack.js">
                   <div className="button">View</div>
                 </Link>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/stefan-ortega-moreno.webp" />
               <Card.Body>
                 <Card.Title>STEFAN ORTEGA MORENO</Card.Title>
                 <Card.Text>
                   1992.11.06
                 </Card.Text>
                 <Card.Text>
                   독일 🇩🇪
                 </Card.Text>
                   <a href="./page/member/Ortega.js" 
                   class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/ederson.webp" />
               <Card.Body>
                 <Card.Title>EDERSON</Card.Title>
                 <Card.Text>
                   1993.08.17
                   </Card.Text>
                   <Card.Text>
                   브라질 🇧🇷
                 </Card.Text>
                   <a href="./page/member/Ederson.js" 
                   class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/scott-carson.webp" />
               <Card.Body>
                 <Card.Title>SCOTT CARSON</Card.Title>
                 <Card.Text>
                   1985.09.25
                 </Card.Text>
                 <Card.Text>
                   잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                   <a href="./page/member/Scott.js" 
                   class="button"> View </a>
               </Card.Body>
             </Card>
           </CardGroup>
    
           <p className='middle' >수비수</p>
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/kyle-walker.webp" />
               <Card.Body>
                 <Card.Title>KYLE WALKER</Card.Title>
                 <Card.Text>
                   1990.05.28
                  </Card.Text>
                  <Card.Text>
                   잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                   <a href="./page/member/Walker.js" 
                   class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/ruben-dias.webp" />
               <Card.Body>
                 <Card.Title>RUBEN DIAS</Card.Title>
                 <Card.Text>
                 1997.05.14
                </Card.Text>
                <Card.Text>
                 포르투갈 🇵🇹
                 </Card.Text>
                 <a href="./page/member/Ruben.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/john-stones.webp" />
               <Card.Body>
                 <Card.Title>JOHN STONES</Card.Title>
                 <Card.Text>
                 1994.05.28
                </Card.Text>
                <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Stones.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/nathan-ake-r.webp" />
               <Card.Body>
                 <Card.Title>NATHAN AKE</Card.Title>
                 <Card.Text>
                 1995.02.18
                 </Card.Text>
                 <Card.Text>
                 네덜란드 🇳🇱
                 </Card.Text>
                 <a href="./page/member/Nathan.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
           </CardGroup>
    
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/joao-cancelo.webp" />
               <Card.Body>
                 <Card.Title>JOAO CANCELO</Card.Title>
                 <Card.Text>
                 1994.05.27
                 </Card.Text>
                 <Card.Text>
                 포르투갈 🇵🇹
                 </Card.Text>
                 <a href="./page/member/Cancelo.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/aymeric-laporte.webp" />
               <Card.Body>
                 <Card.Title>AYMERIC LAPORTE</Card.Title>
                 <Card.Text>
                 1994.05.27
                 </Card.Text>
                 <Card.Text>
                 스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Ayleric.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/sergio-gomez-h-s-cut.webp" />
               <Card.Body>
                 <Card.Title>SERGIO GOMEZ</Card.Title>
                 <Card.Text>
                 2000.09.04
                 </Card.Text>
                 <Card.Text>
                 스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Sergio.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/akanji-cut-out.webp" />
               <Card.Body>
                 <Card.Title>MANUEL AKANJI</Card.Title>
                 <Card.Text>
                 1995.07.19
                 </Card.Text>
                 <Card.Text>
                 스위스 🇨🇭
                 </Card.Text>
                 <a href="./page/member/Manuel.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
           </CardGroup>
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/rico-lewis-v2.webp" />
               <Card.Body>
                 <Card.Title>RICO LEWIS</Card.Title>
                 <Card.Text>
                 2004.11.21
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Rico.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/microsoftteams-image-36.webp" />
               <Card.Body>
                 <Card.Title>JOSHUA WILSON-ESBRAND</Card.Title>
                 <Card.Text>
                 2002.12.26
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Joshua.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
             
             </Card>
             <Card>
               
             </Card>
           </CardGroup>
    
           <p className='middle' >미드필더</p>
    
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/kalvinphillips.webp" />
               <Card.Body>
                 <Card.Title>KALVIN PHILLIPS</Card.Title>
                 <Card.Text>
                 1995.12.02
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Kalvin.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/ilkay-gundogan.webp" />
               <Card.Body>
                 <Card.Title>ILKAY GUNDOGAN</Card.Title>
                 <Card.Text>
                 1990.10.24
                 </Card.Text>
                 <Card.Text>
                 독일 🇩🇪
                 </Card.Text>
                 <a href="./page/member/Ilkay.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/jack-grealish.webp" />
               <Card.Body>
                 <Card.Title>JACK GREALISH</Card.Title>
                 <Card.Text>
                 1995.09.10
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Grealish.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/rodri.webp" />
               <Card.Body>
                 <Card.Title>RODRIGO</Card.Title>
                 <Card.Text>
                 1996.06.22
                 </Card.Text>
                 <Card.Text>
                 스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Rodrigo.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
          
           </CardGroup>
    
           <CardGroup>
           <Card>
               <Card.Img variant="top" src="img/kevin-de-bruyne.webp" />
               <Card.Body>
                 <Card.Title>KEVIN DE BRUYNE</Card.Title>
                 <Card.Text>
                 1991.06.28
                 </Card.Text>
                 <Card.Text>
                 벨기에 🇧🇪
                 </Card.Text>
                 <a href="./page/member/Bruyne.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/bernardo-silva.webp" />
               <Card.Body>
                 <Card.Title>BERNARDO SILVA</Card.Title>
                 <Card.Text>
                 1994.08.10
                 </Card.Text>
                 <Card.Text>
                 포르투갈 🇵🇹
                 </Card.Text>
                 <a href="./page/member/Bernardo.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/phil-foden.webp" />
               <Card.Body>
                 <Card.Title>PHIL FODEN</Card.Title>
                 <Card.Text>
                 2000.05.28
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Philfoden.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/cole-palmer.webp" />
               <Card.Body>
                 <Card.Title>COLE PALMER</Card.Title>
                 <Card.Text>
                 2002.05.06
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Cole.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             
           </CardGroup>
    
           <p className='middle' >공격수</p>
    
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/microsoftteams-image-127.webp" />
               <Card.Body>
                 <Card.Title>ERLING HAALAND</Card.Title>
                 <Card.Text>
                   2000.07.21
                   </Card.Text>
                   <Card.Text>
                   노르웨이 🇳🇴
                 </Card.Text>
                 <a href="./page/member/Erling.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/julian-alvarez.webp" />
               <Card.Body>
                 <Card.Title>JULIAN ALVAREZ</Card.Title>
                 <Card.Text>
                   2000.01.31
                   </Card.Text>
                   <Card.Text>
                   아르헨티나 🇦🇷
                 </Card.Text>
                 <a href="./page/member/Julian.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/riyad-mahrez.webp" />
               <Card.Body>
                 <Card.Title>RIYAD MAHREZ</Card.Title>
                 <Card.Text>
                   1991.02.21
                   </Card.Text>
                   <Card.Text>
                   알제리 🇩🇿
                 </Card.Text>
                 <a href="./page/member/Riyad.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               
             </Card>
           </CardGroup>
    
           <p className='middle' > 감독 </p>
    
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/pep-guardiola.webp" />
               <Card.Body>
                 <Card.Title>PEP GUARDIOLA</Card.Title>
                 <Card.Text>
                   1971.01.18
                   </Card.Text>
                   <Card.Text>
                   스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Guardiola.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
             </Card>
             <Card>
             </Card>
             <Card>  
             </Card>
           </CardGroup>
    
           <p className='middle' >수석 코치</p>
    
           <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/rodolfo-borrell.webp" />
               <Card.Body>
                 <Card.Title>RODOLFO BORRELL</Card.Title>
                 <Card.Text>
                   1971.01.31
                   </Card.Text> 
                   <Card.Text>
                   스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Rodolfo.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/lorenzo-buenaventura.webp" />
               <Card.Body>
                 <Card.Title>LORENZO BUENAVENTURA</Card.Title>
                 <Card.Text>
                   1962.11.09
                   </Card.Text>
                   <Card.Text>
                   스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Lorenzo.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/manel-estiarte.webp" />
               <Card.Body>
                 <Card.Title>MANEL ESTIARTE</Card.Title>
                 <Card.Text>
                   1961.10.26
                   </Card.Text>
                   <Card.Text>
                   스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Estiarte.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/xabier-mancisidor.webp" />
               <Card.Body>
                 <Card.Title>XABIER MANCISIDOR</Card.Title>
                 <Card.Text>
                   1970.05.24
                   </Card.Text>
                   <Card.Text>
                   스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Xabier.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
            </CardGroup>
            <CardGroup>
             <Card>
               <Card.Img variant="top" src="img/enzo-maresca.webp" />
               <Card.Body>
                 <Card.Title>ENZO MARESCA</Card.Title>
                 <Card.Text>
                   1980.02.10
                 </Card.Text>
                 <Card.Text>
                  이탈리아 🇮🇹
                 </Card.Text>
                 <a href="./page/member/Maresca.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/carles-planchart.webp" />
               <Card.Body>
                 <Card.Title>CARLES PLANCHART</Card.Title>
                 <Card.Text>
                  1965.12.17
                 </Card.Text>
                 <Card.Text>
                  스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Carles.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/carlos-vicens.webp" />
               <Card.Body>
                 <Card.Title>CARLOS VICENS</Card.Title>
                 <Card.Text>
                 1983.02.12
                 </Card.Text>
                 <Card.Text>
                  스페인 🇪🇸
                 </Card.Text>
                 <a href="./page/member/Viens.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
             <Card>
               <Card.Img variant="top" src="img/richard-wright.webp" />
               <Card.Body>
                 <Card.Title>RICHARD WRIGH</Card.Title>
                 <Card.Text>
                  1977.11.05
                 </Card.Text>
                 <Card.Text>
                 잉글랜드 🏴󠁧󠁢󠁥󠁮󠁧󠁿
                 </Card.Text>
                 <a href="./page/member/Scottcarson.js" 
                 class="button"> View </a>
               </Card.Body>
             </Card>
           </CardGroup>
    </div>

    )
}


export default Soccer;


