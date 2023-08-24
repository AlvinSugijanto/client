import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { NumericFormat } from 'react-number-format'
import { useSelector } from 'react-redux'

export default function Cart() {

    const cartItems = useSelector((state)=> state.cart.cartItems);

    return (
        <div className="rightSide">
            <div className="font-heading text-center"><FontAwesomeIcon icon={faCartShopping} /> Cart</div>
            <div className='font-lg text-bold'>Items</div>
            <div className="cart-wrapper">
                
                {cartItems.map((item, index) => (
                    <div className='cart' key={index}>
                        <div className="cart-item">
                            <img src={item.image} alt="" className='menu-img' />
                            <div>
                                <div className="font-md text-semibold">{item.nama_menu}</div>
                                <div className='d-flex flex-wrap'>
                                    <div className='text-muted font-sm'>Type : {item.type}, &nbsp;</div>
                                    <div className='text-muted font-sm'>Size : {item.size}, &nbsp;</div>
                                    <div className='text-muted font-sm'> Sugar : {item.sugar}, &nbsp;</div>
                                    <div className='text-muted font-sm'> Ice : {item.ice}, </div>
                                </div>
                            </div>
                            <NumericFormat value={item.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} className='font-md text-bold' />
                        </div>
                        <div className='cart-qty'>
                            <FontAwesomeIcon icon={faPlus} className='icon'/>
                            <div className='text-bold'>1x</div>
                            <FontAwesomeIcon icon={faMinus} className='icon'/>

                        </div>
                    </div>
                ))}

            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Subtotal</div>
                <div className="font-md text-bold">Rp. 130.000</div>
            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Tax</div>
                <div className="font-md text-bold">Rp. 130.000</div>
            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Total</div>
                <div className="font-md text-bold">Rp. 130.000</div>
            </div>
            <div className="cart-pay text-bold">
                Pay Now
            </div>

        </div>
    )
}
