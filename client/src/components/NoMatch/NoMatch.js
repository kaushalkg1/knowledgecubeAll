import React from "react";
import knowledgecube from "./knowledgecube.gif"

const NoMatch =() =>{
    return(<>
    <div className="knowledgecubeNotFound-card  add-cursor">
        <div></div>
    <img className="knowledgecubeNotFound " src={knowledgecube} alt="knowledgecube" />
    <div></div></div>
    </>)
}
export default NoMatch;