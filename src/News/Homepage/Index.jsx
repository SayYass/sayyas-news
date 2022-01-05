import React from "react";
import Cards from "./Cards";
import Navbars from "./Navbar";
import Searchs from "./Searchs";



export default class Homepage extends React.Component{
render(){
    return(
       
            <body>
                <Navbars/>
                <br />
                <div className="container row">
                 

                 <div className="row">
                 <Cards />     
                </div> 
                
                </div>
                
             
            </body>
           
        
    )
}

}