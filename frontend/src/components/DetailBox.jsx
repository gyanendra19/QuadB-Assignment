import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import wazir from '../img/wazir-logo.png'
import { useTicket } from '../contexts/TicketContex'


function DetailBox() {
  const  [h, f, g, final] = useTicket()

  return (
    <div className="details">
        <div className="details-box">
        <h2 className="top-col">#</h2>
        <h2 className="top-col">Platform</h2>
        <h2 className="top-col">Last Traded Price</h2>
        <h2 className="top-col">Buy / Sell Price</h2>
        <h2 className="top-col">Difference</h2>
        <h2 className="top-col">Savings</h2>
        </div>
        <div className="details-box info">
        <h2 className="hash">1</h2>
        <h2 className="platform">
          <img src={wazir} alt="" />
          <span>WazirX</span>
        </h2>
        <h2 className="last-traded">₹ {+final?.last}</h2>
        <h2 className="buy-sell">₹ {+final?.buy} / ₹ {+final?.sell}</h2>
        <h2 className="difference">-2.00%</h2>
        <h2 className="saving">₹  0.900</h2>
        </div>
      </div>
  )
}

export default DetailBox