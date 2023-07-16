import React, { useState } from "react";
 
 function Check(){
    const [done,setDone]=useState(false);
   const workDone=()=>{ 
    setDone(!done);
   };
    return(
        <>
      <label className="check">
       <input
       type="checkbox"
       checked={done}
       onChange={workDone}
       />
        <div class="checkmark"></div>
        
       </label>
       
        </>

    );

    
    
};
export default Check; 