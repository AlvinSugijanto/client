import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMinus, faPlus, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { NumericFormat } from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { addQty, decreaseQty, removeItem } from '../../state/slice/cartSlice/cartSlice'

export default function Cart() {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="rightSide">
            <div className="font-heading text-center"><FontAwesomeIcon icon={faCartShopping} /> Cart</div>
            <div className='font-lg text-bold'>Items</div>
            <div className="cart-wrapper">

                {cart.cartItems.map((item, index) => (
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
                            <FontAwesomeIcon icon={faPlus} className='icon' onClick={() => dispatch(addQty(item.id)) }/>
                            <div className='text-bold'>{item.jumlah}x</div>
                            <FontAwesomeIcon icon={faMinus} className='icon' onClick={() => dispatch(decreaseQty(item.id)) }/>

                        </div>
                        <div className="cart-delete">
                            <FontAwesomeIcon icon={faTrashCan} style={{ color:'red', fontSize:'16px', cursor:'pointer' }} onClick={()=> dispatch(removeItem(item.id))}/>
                        </div>
                    </div>
                ))}

            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Subtotal</div>
                <NumericFormat value={cart.subtotal} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} className='font-md text-bold' />
            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Tax</div>
                <NumericFormat value={cart.tax} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} className='font-md text-bold' />
            </div>
            <div className='cart-total'>
                <div className="font-md text-muted">Total</div>
                <NumericFormat value={cart.total} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} className='font-md text-bold' />
            </div>
            <div className="cart-pay text-bold">
                Pay Now
            </div>

        </div>
    )
}
