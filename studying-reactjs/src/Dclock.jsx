import { useState, useEffect } from "react";

function Dclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  function formattime() {
    let hours = time.getHours();        
    const minutes = time.getMinutes();  
    const seconds = time.getSeconds(); 

    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 

    // pad with zeros if needed
    const format = (val) => (val < 10 ? "0" + val : val);

    return `${format(hours)}:${format(minutes)}:${format(seconds)} ${meridiem}`;
  }

  return (
    <div className="container">
      <div className="clock-container">     
        <div className="clock">
          <span>{formattime()}</span> 
        </div>
      </div> 
    </div>
  );
}

export default Dclock;