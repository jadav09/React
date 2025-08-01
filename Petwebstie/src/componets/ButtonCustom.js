import React from 'react'

function ButtonCustom({ Button_Name, handleclick }) {
  return (
    <button className='custom-button' onClick={handleclick}>
      <p> {Button_Name}</p>
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  )
}

export default ButtonCustom