import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleInfo, faUpload, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss';

const navItems = [
  { text: 'Edit', icon: faPenToSquare, color: '#3b3b3b' },
  { text: 'Courier info', icon: faCircleInfo, color: '#3b3b3b' },
  { text: 'Share', icon: faUpload, color: '#3b3b3b' },
  { text: 'Remove', icon: faCircleMinus, color: 'red', className: 'remove' }
]

const NavBar = () => {
  return (
    <div className='navbarContainer'>
      <ul>
        {navItems.map((item, index) => (
          <li key={item.text}>
            <span className={item.className}>{item.text}</span>
            <span>
              <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} size={item.size} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
