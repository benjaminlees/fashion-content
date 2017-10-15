import React from 'react';
require('./Modal.scss');

const Modal = ({ children }) => {
  
  return (
    <div className='Modal'>
      <div className='Modal-contents'>
        { children }
      </div>
    </div>
  )
}
export default Modal;