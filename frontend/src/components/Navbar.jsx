import React, { useEffect, useState } from 'react'
import headLogo from '../img/headLogo.png'
import telegram from '../img/telegram.png'
import '../App.css'
import { useTicket } from '../contexts/TicketContex'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [data, input, setInput] = useTicket()

    const changeToggle = () => {
        setToggle(prev => !prev)
    }

    const changeInput = (inp) => {
        setInput(inp)
    }

    useEffect(() => {
        document.querySelector('.drop-down').classList.remove('display-hidden')
        if (toggle) {
            document.querySelector('.drop-down').classList.remove('display-hidden')
        } else {
            document.querySelector('.drop-down').classList.add('display-hidden')
        }
    }, [toggle])


    return (
        <div className='navbar'>
            <div className="head-logo">
                <img src={headLogo} alt="" />
            </div>
            <div className="nav-center">
                <button className='nav-box'>INR</button>
                <button onClick={() => changeToggle()} className='nav-box drop-down-parent'>
                    <div className='drop-down display-hidden'>
                        {data.map(el => (
                            <input type="text"
                                value={el.name.split('/')[0]}
                                onClick={(e) => changeInput(e.target.value)}
                                readOnly
                            />
                        ))}
                    </div>
                    <span>{input}</span>
                </button>
                <button className='nav-box-buy'>BUY BTC</button>
            </div>
            <div className="nav-right">
                <div className="count">32</div>
                <div className="connect-telegram">
                    <img src={telegram} alt="" />
                    <a href='https://hodlinfo.com/connect/telegram'>Connect Telegram</a>
                </div>
                <input type="checkbox" name="" id="check" />
                <label htmlFor="check" className='button'></label>
            </div>
        </div>
    )
}

export default Navbar