import React from 'react'

function Buttons({className,texto,OnClick}) {
  return (
    <div>
      <button className={className} onClick={OnClick} > {texto} </button>
    </div>
  )
}

export default Buttons
