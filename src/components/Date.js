import React, { useState } from 'react'

function DateDisplay() {
  
    function getDate(){
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${year}/${date}`;
    }
    const [currentDate, setCurrentDate] = useState(getDate());
  return (
    
    <div className='date'>
    <h3>Today's Date: </h3>
    <p>{currentDate}</p>
    
    </div>
  )
}

export default DateDisplay