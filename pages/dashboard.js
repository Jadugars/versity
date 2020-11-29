import Navbar from "../components/navbar";
import Calendar from "../components/calendar";
import { useState } from "react";
import Groups from "../components/groups";
import Settings from "../components/settings";
import Event from "../components/events";

function Dashboard() {
  const [subPage, setSubPage] = useState("calendar");

  let activePage;
  if (subPage == "calendar") {
    activePage = <Calendar />;
  } else if (subPage == "groups") {
    activePage = <Groups />;
  } else if (subPage == "events") {
    activePage = <Event />;
  } else if (subPage == "settings") {
    activePage = <Settings />;
  }

  return (
    <div className="flex">
      <div>
        <Navbar subPage={subPage} setSubPage={setSubPage} />
      </div>
      <div className="flex-grow">{activePage}</div>
    </div>
  );
}

export default Dashboard;
