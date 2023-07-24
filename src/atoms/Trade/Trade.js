import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './trade.scss';

const tradeButtons = [
  { type: 'buy', backgroundColor: '#dd7973', title: 'Buy BTC' },
  { type: 'sell', backgroundColor: '#dd7973', title: 'Sell BTC' }
]

const getTradeStyles = (isWalletOpen) => {
  return {
    trade: {
      justifyContent: isWalletOpen ? 'space-around' : 'space-between',
      margin: isWalletOpen ? '0 1rem' : '0 3.2rem'
    }
    // button: {
    // //   backgroundColor: 'white'
    // }
  }
}

function Trade ({ isWalletOpen }) {
  const styles = getTradeStyles(isWalletOpen)

  return (
    <div className='trade' style={styles.trade}>
      {tradeButtons.map((button, index) => (
        <div key={index} className={button.type} style={isWalletOpen ? styles.button : {}}>
          <div className='icon'>
            <FontAwesomeIcon icon={faDollarSign} style={{ color: '#ffffff', fontSize: '1.6rem' }} />
          </div>
          <div className='title'>{button.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Trade
