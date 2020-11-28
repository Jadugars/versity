import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faCalendarDay, faCog } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Calendar from '../components/calendar'
import Groups from '../components/groups'
import Settings from '../components/settings'
import Event from '../components/events'
import { useState } from 'react'

function Navbar() {
  const [subPage, setSubPage] = useState(<Calendar/>);
  function ClickEvent(){
    setSubPage(<Event/>)
  }
  function ClickGroup(){
    setSubPage(<Groups/>)
  }
  function ClickHome(){
    setSubPage(<Calendar/>)
  }
  function ClickSetting(){
    setSubPage(<Settings/>)
  }
  return (
    <div className="inline-flex ">
      <div className="flex-1 flex flex-row h-screen antialiased text-gray-800 ">
        <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-green-800 ">
          <a href="#"
            className="text-white  text-5xl font-bold">
            V
          </a>
          <ul className="flex flex-col space-y-2 mt-12">
            <li>
              <a href="#" onClick={ClickHome}
                className="flex items-center">
                <span className="flex items-center justify-center text-green-100 hover:bg-green-700 h-12 w-12 rounded-2xl">
                <FontAwesomeIcon icon={faHome} className="text-xl"/>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={ClickGroup}
                className="flex items-center">
                <span className="flex items-center justify-center text-green-100 hover:bg-green-700 h-12 w-12 rounded-2xl">
                  <FontAwesomeIcon icon={faUsers} className="text-xl"/>
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={ClickEvent}
                className="flex items-center">
                <span className="flex items-center justify-center text-green-100 hover:bg-green-700 h-12 w-12 rounded-2xl">
                <FontAwesomeIcon icon={faCalendarDay} className="text-xl"/>
                </span>
              </a>
            </li>
          </ul>
              <a href="#" onClick={ClickSetting}
                className="mt-auto flex items-center">
                <span className="flex items-center justify-center text-green-100 hover:bg-green-700 h-12 w-12 rounded-2xl">
                <FontAwesomeIcon icon={faCog} className="text-xl"/>
                </span>
              </a>
        </div>
      </div>
      <div className="flex-1">
        {subPage}
      </div>
  </div>
  )
}

export default Navbar;
