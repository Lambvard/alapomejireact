import React, { useState } from "react";
import { useEffect } from "react";
import './index'

const loginclick=()=>{
    alert("Login Successfully")
}

const uservalue="Tunde"
const list_of_app=['Apple1','Apple2','Apple3','Apple4','Apple5']



const Carousel = () => {
    const [state,setState] =useState(0) 

    const [inp,setinp] =useState(0) 
    return ( 
       


        <div className="">
            
                  
          <div className="" >
                <label>UserName:</label>
                <input type="text" className="inputtype"n placeholder="Enter your username"/>
            </div>
            <div className="">
                <label>Password:</label>
                <input type="text" className="inputtype"  value={uservalue.toUpperCase()}/>
            </div>
            <div className="">
                <p>You Clicked {state} times</p>
                <button type="button" onClick={loginclick=>(setState(state +1))} className="btn btn-danger">Login</button>
                
            </div>
            {list_of_app.map((item) => 
            
            <div  style={{backgroundColor:"turquoise",fontFamily:"revert",boxShadow:'0 5px 5px #ccc',width:600,margin:"auto" }}>
                <h1>{item}</h1>
                <button className="btn" style={{backgroundColor:"ButtonShadow",borderRadius:5, fontSize:19}}>{item}</button>
            </div>
           
            )}
            
        </div>



     );
    
}
 

export default Carousel;