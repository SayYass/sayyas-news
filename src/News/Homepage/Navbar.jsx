import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchs from "./Searchs";


export default class Navbars extends React.Component{

  
    render(){
        return(
            <Navbar bg="primary" variant="dark" fixed="top" >
            <Container>
            <Navbar.Brand href= "" >Sayyas News</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#src">Home</Nav.Link>
             
            </Nav>
            </Container>
          </Navbar>
        )
    }
}