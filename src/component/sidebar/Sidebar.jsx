import React from 'react'
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faGaugeSimpleHigh, faFolder, faUser, faUtensils, faHome } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <FontAwesomeIcon icon={faMugHot} size="xl" />
        <div className="font-heading">Coffee<span style={{ color: '#783708' }}>Shop</span></div>
      </div>
      <div className="text-muted font-sm" style={{ padding: '0px 15px' }}>Modern Point Of Sales</div>
      <hr style={{ border: '1px solid #783708', opacity: '0.7' }} />
      <Link to="/transaction">
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faHome} />
          <div className="sidebar-text">Transaction</div>
        </div>
      </Link>
      <Link to="/menu">
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faUtensils} />
          <div className="sidebar-text">Menu</div>
        </div>
      </Link>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faGaugeSimpleHigh} />
        <div className="sidebar-text">Dashboard</div>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faFolder} />
        <div className="sidebar-text">Order</div>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faUser} />
        <div className="sidebar-text">Customer</div>
      </div>
    </div>

  );
}

export default Sidebar 