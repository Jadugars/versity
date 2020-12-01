import Navbar from "../../components/navbar.js"
import Settings from "../../components/settings.js"
import { useState } from "react";

function settingsPage(){
  const [subPage, setSubPage] = useState("settings");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        <Settings/>
      </div>
    </div>
  );  
}

export default settingsPage;
