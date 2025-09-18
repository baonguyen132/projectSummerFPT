import React from 'react'
import "./css/ModalCulture.css"

const ModalCulture = ({ image, icon, title, subtitle }) => {
  return (
    <div className="modal-container">
        <img src={image} className="modal-image" />
        <div className='modal-body'>
            <img src={icon} className="modal-icon" />
            <div className='modal-content'>
                <label className="modal-title">{title}</label>
                <p className="modal-subtitle">{subtitle}</p>
            </div> 
        </div>
    </div>
  )
}

export default ModalCulture
