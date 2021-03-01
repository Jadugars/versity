import Navbar from "../components/navbar.js"
import JoinGroup from "../components/joinGroup.js"
import { useState } from "react";

function joinGroupPage(){
  const [subPage, setSubPage] = useState("joinGroup");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        <JoinGroup/>
      </div>
    </div>
  );  
}

export default joinGroupPage;
