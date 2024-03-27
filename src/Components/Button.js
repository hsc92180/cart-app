import React from 'react'

const Button = (prop) => {

  return (
        <>
            <button className={prop.cName} onClick={(value)=>prop.clickEvent(value)}>
                {
                    prop.sign
                }
            </button>
        
        </>
  )
}

export default Button