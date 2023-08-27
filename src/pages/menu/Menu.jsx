import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './menu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUtensils, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Form, Button, Table, Modal } from 'react-bootstrap';

import ToastComponent from '../../component/toast/Toast';
import MenuItem from '../../component/menu/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveMenu, createMenuItem } from '../../state/slice/menuSlice/menuSlice';
import { retrieveCategory } from '../../state/slice/categorySlice/categorySlice';

const Menu = () => {

  const [show, setShow] = useState(false);
  const [filePhoto, setFile] = useState();
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const categoryItems = useSelector((state) => state.category.categoryItems);

  const [productInput, setProductInput] = useState({
    nama_menu: '',
    harga: '',
    description: '',
    kategori_id: ''
  });


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (key, value) => {

    const newProductInput = { ...productInput };
    newProductInput[key] = value;
    setProductInput(newProductInput);

  };

  // function handleImageUpload(e) {
  //   const uploadedImageURL = e.target.files[0];
  //   const newProductInput = {...productInput};
  //   newProductInput.image = uploadedImageURL;
  //   setProductInput(newProductInput);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createMenuItem(productInput));
    setShow(false);
  };
  useEffect(() => {

    dispatch(retrieveMenu());
    dispatch(retrieveCategory());

  }, []);

  return (
    <>
      <div className='menu-wrapper'>
        <div className='menu-topbar shadow' >
          <h4><FontAwesomeIcon icon={faUtensils} /> Menu</h4>
        </div>
        <div className='menu-container'>
          <div className="d-flex align-items-center">
            <Form.Select style={{ maxWidth: '300px' }}>
              <option>All</option>
              <option value="1">Coffee</option>
              <option value="2">Juice</option>
              <option value="3">Milk</option>
              <option value="4">Snack</option>
              <option value="5">Rice</option>
              <option value="6">Dessert</option>
            </Form.Select>
            <div className='search-input ms-3'>
              <input type="text" name="" id="" className='search-bar' placeholder='Search category or menu...' />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            </div>
            <Button className='ms-auto me-5 buttonSecondary' onClick={handleShow}>
              <FontAwesomeIcon icon={faPlus} /> Tambah Menu
            </Button>
          </div>
          <Table className='mt-4 tableMenu'>
            <thead>
              <tr>
                <th className='text-center'>Product ID</th>
                <th>Product</th>
                <th>Price</th>
                <th>Category</th>
                <th>Variant</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((menu) => (
                <MenuItem menu={menu} key={menu.id} />
              ))}

            </tbody>
          </Table>
        </div>
        {showToast ? <ToastComponent showToast={showToast} setShowToast={setShowToast} /> : null}

      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='form-group'>
            <label htmlFor="">Product Category <span className='text-danger'>*</span></label>
            <select name="" id="" className='form-control' onChange={(e) => handleInputChange('kategori_id', e.target.value)}>
              <option value="" hidden>--Select Category--</option>
              {categoryItems.map((category) => (
                <option value={category.id} className='form-control' key={category.id}>
                  {category.nama.charAt(0).toUpperCase() + category.nama.slice(1)}
                </option>
              ))}


            </select>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor="">Product Name <span className='text-danger'>*</span></label>
            <input type="text" className='form-control' placeholder='Insert Product Name Here...' onChange={(e) => handleInputChange('nama_menu', e.target.value)} value={productInput.nama_menu} />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor="">Product Price</label>
            <input type="number" className='form-control' placeholder='Insert Product Price Here...' onChange={(e) => handleInputChange('harga', e.target.value)} value={productInput.harga} />
          </div>
          <div className='form-group mt-3'>
            <label htmlFor="">Product Description</label>
            <textarea name="" id="" cols="20" rows="3" className='form-control' placeholder='Insert Product Description...' onChange={(e) => handleInputChange('description', e.target.value)} value={productInput.description}></textarea>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor="">Product Image</label>
            <input type="file" className='form-control'
              onChange={(e) => {
                handleInputChange('image', e.target.files[0]);
                setFile(URL.createObjectURL(e.target.files[0]));
              }}
            />
            {filePhoto ? (
              <img
                className='border border-secondary mt-2'
                src={filePhoto}
                width={100}
                height={100}
                style={{ objectFit: 'cover' }}
                alt="JEMBUT"
              />
            ) : (
              ''
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='buttonSecondary' onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Menu