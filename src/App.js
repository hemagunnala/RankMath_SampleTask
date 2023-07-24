import React, { useState } from 'react'
import './App.scss'
import Header from './atoms/Header/Header'
import NavBar from './atoms/NavBar/NavBar'
import Wallet from './atoms/Wallet/Wallet'
import Trade from './atoms/Trade/Trade'
import Footer from './atoms/Footer/Footer'
import Chart from './atoms/Chart/Chart'

function App () {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isWalletOpen, setIsWalletOpen] = useState(false)
  return (
    <>
      <div className='iphone' style={!isWalletOpen ? { gridTemplateRows: '1fr 1.5fr 1.7fr 1fr 0.7fr' } : { gridTemplateRows: '1.09fr 2.9fr 1fr 0.76fr' }} >
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Wallet isWalletOpen={isWalletOpen} setIsWalletOpen={setIsWalletOpen} />
        <Chart />
        {!isWalletOpen && <Trade isWalletOpen={isWalletOpen} />}
        <Footer />
        {isNavOpen && <NavBar />}
      </div>
    </>

  )
}

export default App
