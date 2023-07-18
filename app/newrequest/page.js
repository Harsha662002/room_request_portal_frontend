import React from 'react'
import "./newrequest.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function page() {
  return (
    <div>
    <div className='top'>
       <div className='clgname'>
       <img  src="/images/logo.png" />
          <br/>
          <p>Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram</p>
       </div>
       <div className='logout'>
          Log Out
       </div>
    </div>
    <div className='second'>
      <div className='cn'>Club Name</div>
      <div className='pn'>PIC name</div>
    </div>
    <hr/>
    <div className='reqform'>
      <div className='name'>
              <p>Name of the event</p>
              <textarea className='namebox'/>
      </div>
      <div className='datetime'>
          <div className='date'>
                <p>Date</p>
                <textarea className='datebox' />
          </div>
          <div className='cal'>
            <CalendarMonthIcon className='calendaricon'/>
          </div>
          <div className='start'>
            <p>Start Time</p>
            <textarea className='startbox' />
          </div>
          <div className='end'>
            <p>End time</p>
            <textarea className='endbox' />
          </div>
      </div>
      <div className='halls'>
        <div className='npe'>
          <p>Number of people expecting</p>
          <textarea className='expecbox' />
        </div>
        <div className='ah'>
          <p>Available halls</p>
          <div className='new'>
          <textarea className='hallbox'/>
          <div className='dropdown'>v</div>
          </div>
        </div>
      </div>
      <div className='staffchoice'>
        <p>Staff choice(if other that technical affairs club)</p>
        <textarea className='staffbox' />
      </div>
      <div className='request'>
        <p>Request</p>
        <textarea className='reqbox' />
      </div>
      <div>
        <button className='submit'>Submit Request</button>
      </div>
    </div>
    
    </div>
  )
}

export default page
