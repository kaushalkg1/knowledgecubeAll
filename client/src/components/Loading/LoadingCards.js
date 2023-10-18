import React from "react";
 import CourseCard from "./CourseCard";
 import "./LoadingCards.css"
import SmallCard from "./SmallCard";
import ExtraSmallCard from "./ExtraSmallCard";
import EditCard from "./EditCards";
const LoadingCards =({cards,type}) =>{
   if(type==='CourseCard'){return(cards.map((course) => (<CourseCard/>)))}
   if(type==='SmallCard'){ return(cards.map((course) => (<SmallCard/>)))}
   if(type==='ExtraSmallCard'){ return(cards.map((course) => (<ExtraSmallCard/>)))}
   if(type==='EditCard'){ return(cards.map((course) => (<EditCard/>)))}
}
export default LoadingCards;