import React from "react";
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import './nav.css';



function Navigation() {
  return (

    <div>
     
         <Navbar class="i">
           <Container> 
             <Navbar.Brand href="/">
                <img 
                  src="img/download.png"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                />{' '}
             </Navbar.Brand>
            

             <Navbar.Brand href="/">
               <div className="title"> MANCHESTER CITY </div>
             </Navbar.Brand>
             
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <div class ="justify-content-center">
             <Navbar.Collapse id="responsive-navbar-nav " >
               <Nav className="me-auto">
                 <Nav.Link href="/news">소식</Nav.Link>
                 
                 <NavDropdown title="구단" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="/Team">구단 역사</NavDropdown.Item>
                   <NavDropdown.Item href="/Club">구단 기록 </NavDropdown.Item>
                   </NavDropdown>
                 <Nav.Link href="/player">선수</Nav.Link>
       
                 <NavDropdown title="경기" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="/Schedule">경기 일정</NavDropdown.Item>
                   <NavDropdown.Item href="/Result">경기 결과</NavDropdown.Item>
                 </NavDropdown>
               </Nav>
             </Navbar.Collapse>
             </div>
           </Container>
         </Navbar>
      </div>
       
 
  );
}

export default Navigation;