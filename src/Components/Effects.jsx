import {Learneffects, useEffect, useEffectEvent, useState } from "react"
import { data, Useeffects } from "react-router-dom"

function Learneffects (){
    return(
 Const =()=>{
     Const[data,setdata]=useState(0);
     const[Dd,setDd]=useState(10);
     function value() 
     {setdata(data+1)}
     function value()
     {setdata(data-1)}
     //Act at every action
      useEffect (()=>{console.log("Data Changed")})
      //based on dependence
      useEffect(()=>{console.log("Dd useState")})
      //run when page reload
      useEffect(()=>{console.log("page reload...")})



     }


  

    );
}
export default Effects