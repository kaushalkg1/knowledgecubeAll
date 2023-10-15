import React from "react";
import { useParams } from "react-router-dom";
const ShowUser =() =>{
    const {userId} = useParams();
return(
    <><div className="outer-profile content-top">
    <div className="outer-profile-in  ">
    <div className="outer-profile-title ">
    <div className="outer-all ">
    <div> <br></br> User Id
        {userId}
        </div>    </div>
        </div>    </div></div>
    </> 
)
}

export default ShowUser;