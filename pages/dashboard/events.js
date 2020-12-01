import Navbar from "../../components/navbar.js"
import Events from "../../components/events.js"
import { useState } from "react";

function eventsPage(){
  const [subPage, setSubPage] = useState("events");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        <Events/>
      </div>
    </div>
  );  
}

export default eventsPage;


