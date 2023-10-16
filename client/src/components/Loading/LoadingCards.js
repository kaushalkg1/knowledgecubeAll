import React from "react";
 import CourseCard from "./CourseCard";
 import "./LoadingCards.css"
import SmallCard from "./SmallCard";
import ExtraSmallCard from "./ExtraSmallCard";
const LoadingCards =({cards,type}) =>{
   if(type==='CourseCard'){return(cards.map((course) => (<CourseCard/>)))}
   if(type==='SmallCard'){ return(cards.map((course) => (<SmallCard/>)))}
   if(type==='ExtraSmallCard'){ return(cards.map((course) => (<ExtraSmallCard/>)))}
}
export default LoadingCards;