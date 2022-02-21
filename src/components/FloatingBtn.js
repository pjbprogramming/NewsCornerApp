import React, { Component } from 'react'


export default class FloatingBtn extends Component {
 
    // Equivalent to window.load function 
    
    componentDidMount=()=>{
       
        document.getElementById("backToTopID").style.display = "none";  // Each time react dom renders new page button will be hidden.
    }
   
   
   
render() {

    //Get the button
    let mybutton = document.getElementById("backToTopID");

//window.onload=()=>{ mybutton.style.display = "none"; console.log('onload');}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
document.body.scrollTop = 0; document.documentElement.scrollTop = 0;
}


    return (
        
        <button className="material-icons floating-btn" onClick={scrollToTop} id="backToTopID" >arrow_upward</button>
    )
  }
}


