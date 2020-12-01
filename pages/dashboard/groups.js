import Navbar from "../../components/navbar.js"
import Groups from "../../components/groups.js"
import { useState } from "react";

function groupsPage(){
  const [subPage, setSubPage] = useState("groups");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        <Groups/>
      </div>
    </div>
  );  
}

export default groupsPage;
