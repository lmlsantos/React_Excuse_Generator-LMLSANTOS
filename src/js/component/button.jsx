//import react into the bundle
import React, { useEffect, useState } from "react";


//Generate the excuse
const Button = (props) => {
    const [excuse, setExcuse] = useState("");
    const [count, setCount] = useState(0);
    //showing the time
    const [timer, setTimer]=useState(10000);
    //converting the time to seconds
    const [seconds, setSeconds] = useState(Math.floor(timer/1000))       
    
    const click = ()=> {
        excuseGenerator();     
    };
    
    useEffect(()=>{
      const interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if(prevSeconds<=0){
            clearInterval(interval);
            excuseGenerator();
            setCount(prevCount=>prevCount+1)
            return(Math.floor(timer/1000));  
          };
            return prevSeconds-1 ;  
        });
      }, 1000);
      
      return () => {
        clearInterval(interval);
         
      };
    }, [seconds, timer]);

    const excuseGenerator = () => {
        let who = ["The dog", "My grandma", "His turtle", "My bird"];
        let action = ["ate", "peed", "crushed", "broke"];
        let what = ["my homework", "the keys", "the car"];
        let when = [
          "before the class",
          "right on time",
          "when I finished",
          "during my lunch",
          "while I was praying"
        ];
        
        let finalExcuse = 
           
                who[Math.floor(Math.random() * who.length)] +
                " " +
                action[Math.floor(Math.random() * action.length)] +
                " " +
                what[Math.floor(Math.random() * what.length)] +
                " " +
                when[Math.floor(Math.random() * when.length)]
            
        setExcuse(finalExcuse);  
      };
        
    return (
        <div>
            <div className="mt-4 fs-4 fw-bold text-light">The excuse of the day:</div>
            <div>{excuse && <div>{excuse}</div>}      
                <button onClick={click} className="buttonSection">
                    {props.title}
                </button>
            </div>
            <p className="fs-4 fw-bold text-light">I counted {count} excuse every {seconds} seconds</p>   
        </div>    
    );
};

export default Button;

