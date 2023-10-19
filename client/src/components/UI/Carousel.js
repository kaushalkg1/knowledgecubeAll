import React, { useRef, useEffect ,useState} from "react";
import "./Carousel.css";
import left from "../icons/chevron_left_FILL0_wght200_GRAD-25_opsz40.svg";
import right from "../icons/chevron_right_FILL0_wght200_GRAD-25_opsz40.svg";

import MyCourseCard from "./MyCourseCard";
import CourseCard from "./CourseCard";
const Carousel =({type,itemValue,baseUrl}) =>{
     
   const courses = itemValue?.map((f)=>f);
 
    
    // if(type==="one"){
    //     itemStyle={
    //         "width": "calc(10% - 20px)"
    //     }
    // }if(type==="two"){
    //     itemStyle={
    //         "width": "calc(5% - 20px)"
    //     }
    // }
    // if(type==="three"){
    //     itemStyle={
    //         "width": "calc(3.3333333% - 20px)"
    //     }
    // }
    // if(type==="four"){
    //     itemStyle={
    //         "width": "calc(2.5% - 20px)"
    //     }
    // }
    const [divWidth, setDivWidth]=useState();
    const [ItemsPerPage, setItemsPerPage]=useState(0);
    const [currentPosition, setCurrentPosition]=useState(0);
    const [currentMargin, setCurrentMargin]=useState();
    const [rightButton ,setRightButton] = useState({status:true})
    const [itemsLength, setItemsLength] =useState(0);
    
    const [leftButton, setLeftButton] = useState({status:false})
     
    
    const divRef = useRef(null);
    const ItemsRef = useRef(null);
   
    let ItemsCount = itemsLength -ItemsPerPage ;
  
    
  const setResolution=(w) =>{

    if (w < 551) {
           
        setItemsPerPage(1);
    } else 
        if (w > 551 && w < 901) {
            setItemsPerPage(2);
            
        } else 
            if ( w < 1101) {
                setItemsPerPage(3);
                   
            } else {
                setItemsPerPage(4);
                
            }





    //  if(type==="four"){
    //     if (w < 551) {
           
    //         setItemsPerPage(1);
    //     } else 
    //         if (w > 551 && w < 901) {
    //             setItemsPerPage(3);
                
    //         } else 
    //             if ( w < 1101) {
    //                 setItemsPerPage(4);
                    
    //             } else {
    //                 setItemsPerPage(4);
                    
    //             }
    //         }
    //         if(type==="three"){
    //             if (w < 551) {
                   
    //                 setItemsPerPage(1);
    //             } else 
    //                 if (w > 551 && w < 901) {
    //                     setItemsPerPage(2);
                        
    //                 } else 
    //                     if ( w < 1101) {
    //                         setItemsPerPage(2);
                            
    //                     } else {
    //                         setItemsPerPage(2);
                            
    //                     }
    //                 }
    //                 if(type==="two"){
    //                     if (w < 551) {
                           
    //                         setItemsPerPage(1);
    //                     } else 
    //                         if (w > 551 && w < 901) {
    //                             setItemsPerPage(1);
                                
    //                         } else 
    //                             if ( w < 1101) {
    //                                 setItemsPerPage(2);
                                    
    //                             } else {
    //                                 setItemsPerPage(2);
                                    
    //                             }
    //                         }
    //                         if(type==="one"){
    //                             if (w < 551) {
                                   
    //                                 setItemsPerPage(1);
    //                             } else 
    //                                 if (w > 551 && w < 901) {
    //                                     setItemsPerPage(1);
                                        
    //                                 } else 
    //                                     if ( w < 1101) {
    //                                         setItemsPerPage(1);
                                            
    //                                     } else {
    //                                         setItemsPerPage(1);
                                            
    //                                     }
    //                                 }
                                

                                    
        ItemsCount = itemsLength - ItemsPerPage;
        if (currentPosition > ItemsCount) {
           const currentPos = currentPosition + ItemsPerPage;
            setCurrentPosition(currentPos);

        };
        const getcurrentMargin =  currentPosition * (100 / ItemsPerPage)? - currentPosition * (100 / ItemsPerPage):0;
        setCurrentMargin(getcurrentMargin);
        if (ItemsRef.current) {  ItemsRef.current.style.marginLeft = currentMargin + '%';
    }
        
    }
    const checkResolution=()=> {
          if (divRef.current) {
            let offsetWidth = divRef.current.offsetWidth;
              setDivWidth(offsetWidth)
          }
         setResolution(divWidth);
             } 
    useEffect(() => {
        
    checkResolution()
        
    setItemsLength(courses?.length)
    setResolution(divWidth);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [divWidth]);
    
  
    
   const ItemRight=() =>{
    
if (currentPosition >=0 &&currentPosition <= ItemsCount) {
    
    if (ItemsRef.current) {
    ItemsRef.current.style.marginLeft = currentMargin - (100 / ItemsPerPage) + '%';
           
            const getcurrentMargin = currentMargin - (100 / ItemsPerPage);
            setCurrentMargin(getcurrentMargin);
            
    const currentPos = currentPosition + 1;
    
    setCurrentPosition(currentPos);
        };
        
    }
    if(currentPosition === ItemsCount-1  ){
        setRightButton({status:false});

        setLeftButton({status:true});
    }else{
        setRightButton({status:true});
        setLeftButton({status:true});
       
    }
      

    };
       
    const ItemLeft=()=> {
        if (currentPosition >0 &&currentPosition <= ItemsCount) {
            if (ItemsRef.current) {
                ItemsRef.current.style.marginLeft = currentMargin + (100 / ItemsPerPage) + '%';
           const getcurrentMargin = currentMargin+ (100 / ItemsPerPage);
           setCurrentMargin(getcurrentMargin);
            const currentPos = currentPosition - 1;
            setCurrentPosition(currentPos);}
        };
        if(currentPosition === 1){
            setLeftButton({status:false});
    
            setRightButton({status:true});
        }else{
     setLeftButton({status:true});
           
     setRightButton({status:true});
        }
    };
    // const widthfour= {"width":"78vw"};
    // const widththree= {"width":"78vw"};
    // const widthtwo= {"width":"100vw"};
    // const widthone= {"width":"100vw"};
    // const widthitemfour= {"width": "calc(2.5% - 10px)"};
    // const widthitemthree= {"width":"calc(3.3333333% - 10px)"};
    // const widthitemtwo= {"width":"calc(5% - 10px)"};
    // const widthitemone= {"width":"calc(10% - 10px)"};
//     style={ItemsPerPage===4 ?widthfour:ItemsPerPage===3 ?widththree:ItemsPerPage===2 
//         ?widthtwo:ItemsPerPage===1 ?widthone:{}}
//    style={ItemsPerPage===4 ?widthitemfour:ItemsPerPage===3 ?widthitemthree:ItemsPerPage===2 
//         ?widthitemtwo:ItemsPerPage===1 ?widthitemone:{}}



// divWidth:{divWidth},

// ItemsPerPage: {ItemsPerPage},
// currentPosition: {currentPosition},
// ItemsCount:{ItemsCount},
// currentMargin: {currentMargin}

    return(<>
   
    <div className="Outer" >
  
    <div className="Carousel-Outer" 
     ref={divRef}>
    
    <div className="Carousel" ref={ItemsRef}>
    {type==="CourseCard"?  itemValue?.map((course) => (
       
       <>  
 <div className={`Item  ${type} `}   >
  <CourseCard    course={course}/>
  </div>
          
         
 </>   
        )):"" }
          {type==="MyCourseCard"?  itemValue?.map((course) => (
       
       <>  
 <div className={`Item  ${type} `}   >
 <MyCourseCard key={course?._id}baseUrl= {baseUrl}   course={course}/>
  </div>
          
         
 </>   
        )):"" }
         </div> {leftButton?.status?<span onClick={ItemLeft} className="btn left"><img src={left} className="cheveronIcons" alt="left"/></span>:""}
 
  {rightButton?.status?<span onClick={ItemRight} className="btn right"><img src={right} className="cheveronIcons" alt="right"/></span>:""}
  
</div>
 
  

</div>
    
    </>)
}
export default Carousel;