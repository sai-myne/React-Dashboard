import React from 'react'

const Button = ({ icon, bgColor, color, size, text, borderRadius, click }) => {
  return (
    <button type='button' onClick={click} style={{ backgroundColor: bgColor, color, borderRadius}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {icon} {text}
    </button>
  )
}

export default Button
