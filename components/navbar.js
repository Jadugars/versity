import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link"
import {
  faHome,
  faUsers,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/Avatar";

function Navbar(props) {
  function ClickEvent() {
    props.setSubPage("events");
  }
  function ClickGroup() {
    props.setSubPage("groups");
  }
  function ClickHome() {
    props.setSubPage("calendar");
  }
  function ClickSetting() {
    props.setSubPage("settings");
  }
  return (
    <div className="flex flex-row h-screen antialiased text-gray-800 ">
      <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-green-800 ">
        <a href="#" className="text-white text-5xl font-bold">
          V
        </a>
        <ul className="flex flex-col space-y-2 mt-12">
          <li>
            <Link href="/dashboard/calendar">
            <a href="#" onClick={ClickHome} className="flex items-center">
              <span
                className={
                  "flex items-center justify-center text-white hover:bg-green-700 h-12 w-12 rounded-2xl" +
                  " " +
                  (props.subPage == "calendar" ? "bg-green-600" : "")
                }
              >
                <FontAwesomeIcon icon={faHome} className="text-xl" />
              </span>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/groups">
            <a href="#" onClick={ClickGroup} className="flex items-center">
              <span
                className={
                  "flex items-center justify-center text-white hover:bg-green-700 h-12 w-12 rounded-2xl" +
                  " " +
                  (props.subPage == "groups" ? "bg-green-600" : "")
                }
              >
                <FontAwesomeIcon icon={faUsers} className="text-xl" />
              </span>
            </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/events">
            <a href="#" onClick={ClickEvent} className="flex items-center">
              <span
                className={
                  "flex items-center justify-center text-white hover:bg-green-700 h-12 w-12 rounded-2xl" +
                  " " +
                  (props.subPage == "events" ? "bg-green-600" : "")
                }
              >
                <FontAwesomeIcon icon={faCalendarDay} className="text-xl" />
              </span>
            </a>
            </Link>
          </li>
        </ul>
        <Link href="/dashboard/settings">
        <a
          href="#"
          onClick={ClickSetting}
          className="mt-auto flex items-center"
        >
          <span
            className={
              "flex items-center justify-center h-14 w-14 rounded-full" +
              " " +
              (props.subPage == "settings" ? "bg-green-600" : "")
            }
          >
            <Avatar />
          </span>
        </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
