import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faBatteryFull, faSignal, faChevronLeft, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import './header.scss'

const headerIcons = [
  { icon: faSignal, color: '#434358' },
  { icon: faWifi, color: '#434358' },
  { icon: faBatteryFull, color: '#434358' }
]

const Header = ({ isNavOpen, setIsNavOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='header'>
      <div className='header__notch'>
      <div className='time'>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div className='icons'>
          {headerIcons.map((item, index) => (
            <FontAwesomeIcon key={index} icon={item.icon} style={{ color: item.color }} />
          ))}
        </div>
      </div>

      <div className='header__nav'>
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#aeb8c4' }} />
        <span className='title'>BitCoin Wallet</span>
        <div className='navIcon'>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={{ color: '#aeb8c4' }}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
