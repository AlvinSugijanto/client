import React from 'react'
import { NumericFormat } from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function MenuItem({ menu }) {
    return (
        <tr key={menu.id}>
            <td className='text-center'>#{menu.id}</td>
            <td className='text-bold'>{menu.nama_menu}</td>
            <td><NumericFormat value={menu.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} className='' /></td>
            <td>{menu.kategori}</td>
            <td>
                <div className="variantWrapper">
                    <div className='variantCard'>Type</div>
                    <div className='variantCard'>Size</div>
                    <div className='variantCard'>Hot</div>
                    <div className='variantCard'>Ice</div>
                </div>
            </td>
            <td>
                <div className='statusCard font-sm'>Active</div>
            </td>
            <td>
                <div className="d-flex">
                    <FontAwesomeIcon icon={faPenToSquare} style={{ color: 'green' }} />
                    <FontAwesomeIcon className='ms-2' icon={faTrash} style={{ color: 'red' }} />

                </div>
            </td>
        </tr>
    )
}

export default MenuItem