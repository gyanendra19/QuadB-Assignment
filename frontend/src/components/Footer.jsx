import React from 'react'
import '../App.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
        <p className="copyright">Copyright © 2019</p>
        <p className='hodlinfo'>HodlInfo.com</p>
        </div>
        <a className='support' href="mailto:support@hodlinfo.com" target='_blank'>Support</a>
    </div>
  )
}

export default Footer