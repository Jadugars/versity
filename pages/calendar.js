import Navbar from "../components/navbar.js";
import Calendar from "../components/calendar.js";
import { useState } from "react";
import UserInput from "../components/userInput.js";

function calendarPage() {
  const [subPage, setSubPage] = useState("calendar");
  return (
    <div className="flex ">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage} />
      </div>
      <div className="flex-grow relative">
        <UserInput />
        <Calendar />
      </div>
    </div>
  );
}

export default calendarPage;
