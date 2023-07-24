import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import Trade from '../Trade/Trade'
import './wallet.scss'

const Wallet = ({ isWalletOpen, setIsWalletOpen }) => {
  return (
    <div className='wallet' >
      <div className='wallet__header'>
      <div className='titleBar'>
        <div className='icon'>
        <FontAwesomeIcon icon={faBitcoinSign} style={{ color: '#ffffff', fontSize: '1.6rem' }} />
        </div>
        <div className='title'>Bitcoin</div>
      </div>
        <div className='subtitle'>BTC</div>
      </div>
    <div className='combinedValue'>
    <div className='wallet__value'>
        3.529020 BTC
      </div>
      <div className='wallet__subvalue'>
        <span className='wallet__subvalue__value'>$19.153 USD</span>
        <span className='wallet__subvalue__percentage'>-2.32%</span>
      </div>
    </div>
      {isWalletOpen && <Trade isWalletOpen={isWalletOpen} />}
      <div className='wallet__icon' onClick={() => { setIsWalletOpen(!isWalletOpen) }}>
      <FontAwesomeIcon icon={isWalletOpen ? faChevronUp : faChevronDown} style={{ color: '#aeb8c4' }} />
      </div>
    </div>
  )
}

export default Wallet
