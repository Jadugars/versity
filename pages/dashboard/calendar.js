import Navbar from "../../components/navbar.js";
import Calendar from "../../components/calendarGrid.js";
import { useState } from "react";

function calendarPage() {
  const [subPage, setSubPage] = useState("calendar");
  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage} />
      </div>
      <div className="flex-grow">
        <Calendar />
      </div>
    </div>
  );
}

export default calendarPage;
