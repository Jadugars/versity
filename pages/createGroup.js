import Navbar from "../components/navbar.js";
import CreateGroup from "../components/createGroup.js";
import { useState } from "react";

function createGroupPage(props) {
  const [subPage, setSubPage] = useState("createGroup");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage} />
      </div>
      <div className="flex-grow">
        <CreateGroup fb={props} />
      </div>
    </div>
  );
}

export default createGroupPage;
