import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faCompass, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { FOOTER_CONSTANTS } from '../../App.constants'
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
        <FontAwesomeIcon icon={faWallet} style={{ color: FOOTER_CONSTANTS.icon_color_selected, fontSize: FOOTER_CONSTANTS.icon_size }} />
        <FontAwesomeIcon icon={faCompass} style={{ color: FOOTER_CONSTANTS.icon_color, fontSize: FOOTER_CONSTANTS.icon_size }} />
        <FontAwesomeIcon icon={faBell} style={{ color: FOOTER_CONSTANTS.icon_color, fontSize: FOOTER_CONSTANTS.icon_size }} />
        <FontAwesomeIcon icon={faGear} style={{ color: FOOTER_CONSTANTS.icon_color, fontSize: FOOTER_CONSTANTS.icon_size }} />
        </div>
        <div className='line'></div>
    </div>
  )
}

export default Footer
