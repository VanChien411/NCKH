import React, { Component } from "react";
import jwt_decode from 'jwt-decode';


class Page extends Component {
  
componentDidMount (){
  {
    window.google.accounts.id.initialize({
      client_id: "136583022035-vnnpjthjd3fllcars077l9pi4avf2ur1.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  }
}
 handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential)
   console.log(userObject)
  }
 

  render() {
    return (
     <>
     <div id="buttonDiv"></div> 
     </>
    );
  }
}
export default Page;




// <button className="btn btn-info btn-lg " type="submit">{props.value}</button>
// <span style={{float:'right'}}>  <button className="btn btn-lg btn-block btn-outline-warning shadow"  type="button">
//     <img src="image/google.png" width={25}></img>
//     Google</button>

// </span>