import React, { useState, useEffect } from 'react'

import './transaction.css'

import Cart from '../../component/transaction/Cart'
import MainContent from '../../component/transaction/MainContent'

const Transaction = () => {



    return (
        <div className='wrapper'>
            <MainContent></MainContent>
            <Cart></Cart>
        </div>
    )
}

export default Transaction