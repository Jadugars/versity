import Navbar from "../components/navbar.js"
import CreateGroup from "../components/createGroup.js"
import { useState } from "react";

function createGroupPage(){
  const [subPage, setSubPage] = useState("createGroup");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        <CreateGroup/>
      </div>
    </div>
  );  
}

export default createGroupPage;
