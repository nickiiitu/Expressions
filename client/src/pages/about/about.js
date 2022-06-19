import React, { useContext } from "react";
import { Context } from "../../context/Context";
// import pic from "../../images1/imagesetting.jfif";
import "./about.css";

export default function About(){
    
  const PF = "http://localhost:5000/images/"
  const {user}= useContext(Context);
    return(
<div className="about">
 {user ? (<img src={PF+user.profilePic} alt="my pic" className="aboutImg" />) :
        (<img src="" alt="my pic" className="img" />)}
        
<textarea className="aboutP" value="This is a description.">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
</textarea>
</div>
    )
}