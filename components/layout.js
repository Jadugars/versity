import Navbar from "../components/navbar.js"
import { useState } from "react";

function Layout(props){
  const [subPage, setSubPage] = useState(); 
  return (
    <div className="flex">
      <div>
        <Navbar subPage={props.subPage} setSubPage={setSubPage}/>
      </div>
      <div className="flex-grow">
        { props.children } 
      </div>
    </div>
  );  
}

export default Layout;
