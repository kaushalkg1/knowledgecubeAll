import React from "react";
 import TheCard from "./TheCard";
 import "./LoadingCards.css"
const LoadingCards =({cards}) =>{
  

    return(cards.map((course) => (<TheCard/>)))
}
export default LoadingCards;