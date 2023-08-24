import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Transaction from '../transaction/Transaction'

import RoutesIndex from '../../routes/index'

const Home = () => {
  return (
    <div className='app'>
      <Sidebar></Sidebar>

      <RoutesIndex>

      </RoutesIndex>
    </div>
  )
}

export default Home