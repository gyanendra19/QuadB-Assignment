import React from 'react'
import '../App.css'
import { useTicket } from '../contexts/TicketContex'

function Stats() {
  const [g, h, f, final] = useTicket()

  return (
    <div className="stats">
    <div className="min stats-common">
      <h1>0.42</h1>
      <span>%</span>
      <h3>5 Mins</h3>
    </div>
    <div className="hour stats-common">
      <h1>0.96</h1>
      <span>%</span>
      <h3>5 Hours</h3>
    </div>
    <div className="current-price stats-common">
      <p className='best-price'>Best Price To Trade</p>
      <h1>₹ {Math.floor(final?.sell)}</h1>
      <p>Average XRP/INR net price including commission</p>
    </div>
    <div className="day stats-common">
      <h1>3.12</h1>
      <span>%</span>
      <h3>1 Day</h3>
    </div>
    <div className="days stats-common">
      <h1>10.16</h1>
      <span>%</span>
      <h3>7 Days</h3>
    </div>
  </div>
  )
}

export default Stats