import { useEffect, useState } from 'react'
import DetailBox from './components/DetailBox'
import Stats from './components/stats'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TicketContext from './contexts/TicketContex'
import axios from 'axios'


function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('BTC')
  const [final, setFinal] = useState(data[0])

  useEffect(() => {
    axios.get('/api/v1/tickets')
    .then(result => setData(result.data))
  },[])


  // const everyMinute = () => {

  //     let time = 59
  //     const timer = () => {
  //       let sec = String(time % 60)
  //       document.querySelector('.count').textContent = sec;
  
  //       if(time === 0){  
  //         axios.patch('/api/v1/tickets/update')
  //         .then(() => console.log('done'))
  //         clearInterval(tick)
  //       }
  
  //       time--
  //     }

  //     const tick = setInterval(timer, 1000)
      
  //     return tick;
    
  // }

  const changeFinal = (found) => {
    setFinal(found)
  }
  
  useEffect(() => {
    const found = data.find(el => el.name.split('/')[0] === input)
    changeFinal(found)
  }, [input, data])

  return (
    <TicketContext.Provider value={[data, input, setInput, final, everyMinute]}>
    <>
    <div className='main'>
      <Navbar />
      <Stats />
      <DetailBox />
      <Footer />
    </div>
    <div className='add-to-home'>
      <p className='add-home-box'>Add hodlinfo to home screen</p>
    </div>
    </>
    </TicketContext.Provider>
    
  )
}

export default App
