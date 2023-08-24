import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';

function ToastComponent({ showToast, setShowToast }) {

    const handleShow = () => setShowToast(false);

    return (
        <ToastContainer position={'top-end'} style={{ zIndex: 1 }} className='p-3'>
            <Toast autohide show={showToast} delay={2200} bg={'light'} onClose={handleShow}>
                <Toast.Header>
                    <strong className="me-auto">React Toast</strong>
                    <small>50 mins ago</small>
                </Toast.Header>
                <Toast.Body>Lorem ipsum dolor sit adipiscing elit.</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastComponent;
