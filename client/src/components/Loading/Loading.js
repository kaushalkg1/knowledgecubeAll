import React from "react";
import knowledgecube from "./InfinityLoading.gif"

const Loading =({Load}) =>{
    return(<>
    {Load?<><div className="knowledgecubeLoading-card  add-cursor">
        <div></div>
    <img className="knowledgecubeLoading " src={knowledgecube} alt="knowledgecube" />
    <div></div></div></>:""}
    
    </>)
}
export default Loading;