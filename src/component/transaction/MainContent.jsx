import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NumericFormat } from 'react-number-format'
import { useSelector, useDispatch } from 'react-redux'
import { retrieveCategory } from '../../state/slice/categorySlice/categorySlice'

import MenuItem from './MenuItem'


export default function MainContent() {

    const dispatch = useDispatch();

    const categories = useSelector((state) => state.category.categoryItems);
    const [activeCategory, setActiveCategory] = useState("1");
    const [menus, setMenu] = useState([]);

    useEffect(() => {
        dispatch(retrieveCategory());
    }, [])

    useEffect(() => {
        const fetchMenu = async () => {
            try {

                const menuResponse = await axios.get(`http://localhost:4000/menu/byCategory/${activeCategory}`);

                setMenu(menuResponse.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchMenu();
    }, [activeCategory]);


    return (
        <div className="leftSide">
            <div className='topBar'>
                <div className='font-heading'>Choose Category</div>
                <div className='search-input'>
                    <input type="text" name="" id="" className='search-bar' placeholder='Search category or menu...' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
                </div>
            </div>
            <div className="midBar">
                <div className="cardWrapper">
                    {categories.map((category, index) => (
                        <div className='cardCategory' key={index} onClick={() => setActiveCategory(category.id)}>
                            <img src={category.icon} alt="" width={30} height={30} />
                            <div className='font-sm mt-3'>{category.nama}</div>
                        </div>
                    ))}

                </div>
                <div className="menuWrapper">
                    <div className='font-heading my-4'>Coffee Menu</div>
                    <div className="card-grid">

                        {menus.map((menu) => (
                            <MenuItem menu={menu} key={menu.id} />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}
