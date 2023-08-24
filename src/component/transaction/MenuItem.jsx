import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../state/slice/cartSlice/cartSlice";


function MenuItem({ menu }) {

    const dispatch = useDispatch();

    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const [sugar, setSugar] = useState('');
    const [ice, setIce] = useState('');
    const [active, setActive] = useState(false);


    useEffect(() => {
        if (type && size && sugar && ice) {
            setActive(true);
        }
        console.log('this is running')
    }, [type, size, sugar, ice]);


    function handleAddToCart() {
        const updatedMenu = { ...menu, type, size, sugar, ice }
        dispatch(addNewItem(updatedMenu))
        resetVariant();
    }

    function resetVariant()
    {
        setType('');
        setSize('');
        setSugar('');
        setIce('');
        setActive(false);
    }

    return (
        <div className='card-menu'>
            <div className='card-menu-top'>
                <img src={menu.image} alt="" width={150} height={200} className='menu-img' />
                <div style={{ margin: "0 0 0 20px" }}>
                    <div className="menu-title font-lg">{menu.nama_menu}</div>
                    <p className='font-sm text-muted mt-2'>Caramel Syrup with coffee milk and whipped cream</p>
                    <NumericFormat value={menu.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp '} className='font-md text-bold' />
                </div>
            </div>
            <div className="card-menu-middle">
                <div>
                    <div className='font-md text-semibold mb-2'>Type</div>
                    <div className="d-flex gap-2">
                        <div className={`roundedCard text-semibold ${type === 'hot' ? "active" : ''}`} onClick={() => setType('hot')}>Hot</div>
                        <div className={`roundedCard text-semibold ${type === 'ice' ? "active" : ''}`} onClick={() => setType('ice')}>Ice</div>
                    </div>
                </div>
                <div>
                    <div className='font-md text-semibold mb-2'>Size</div>
                    <div className="d-flex gap-2">
                        <div className={`roundedCard text-semibold ${size === 'S' ? "active" : ''}`} onClick={() => setSize('S')}>S</div>
                        <div className={`roundedCard text-semibold ${size === 'M' ? "active" : ''}`} onClick={() => setSize('M')}>M</div>
                        <div className={`roundedCard text-semibold ${size === 'L' ? "active" : ''}`} onClick={() => setSize('L')}>L</div>
                    </div>
                </div>
                <div>
                    <div className='font-md text-semibold mb-2'>Sugar</div>
                    <div className="d-flex flex-wrap gap-2">
                        <div className={`roundedCard text-semibold ${sugar === 'L' ? "active" : ''}`} onClick={() => setSugar('L')}>L</div>
                        <div className={`roundedCard text-semibold ${sugar === 'R' ? "active" : ''}`} onClick={() => setSugar('R')}>R</div>
                        <div className={`roundedCard text-semibold ${sugar === 'E' ? "active" : ''}`} onClick={() => setSugar('E')}>E</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='font-md text-semibold mb-2'>Ice</div>
                        <div className="d-flex flex-wrap gap-2">
                            <div className={`roundedCard text-semibold ${ice === 'L' ? "active" : ''}`} onClick={() => setIce('L')}>L</div>
                            <div className={`roundedCard text-semibold ${ice === 'R' ? "active" : ''}`} onClick={() => setIce('R')}>R</div>
                            <div className={`roundedCard text-semibold ${ice === 'E' ? "active" : ''}`} onClick={() => setIce('E')}>E</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`card-button ${active ? "active" : ''}`} onClick={handleAddToCart}>Add to Cart</div>
        </div>
    );
}

export default MenuItem;
