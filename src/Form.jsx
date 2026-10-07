import react from "react";
export const Form = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">Enter a number</label>
                <input type="number" id="name" placeholder="Enter a number" />
               <button onclick="checkPosNeg()">check</button>
            <p id="Answer"></p>

            </form>
            </div>
    );          
    }
    export default Form;

  

     
 
