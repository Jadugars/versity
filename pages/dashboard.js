import Navbar from '../components/navbar'
import Calendar from '../components/calendar'
import { useState } from 'react'

function Dashboard(){
  const [subPage, setSubPage] = useState(<Calendar/>);
    return(
      <div>
        <div className="inline-block">
          <Navbar subPage={subPage} setSubPage={setSubPage}/>  
        </div>
        <div className="inline-block">
         {subPage}
        </div>
      </div>
    )
}

export default Dashboard
