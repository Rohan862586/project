import React from 'react'
import CartIcon from '../Cart/CartIcon'


const HeaderCartButton = (props:any) => {
  return (
    <div>
        <button>
            <span>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span>
                3
            </span>
        </button>
    </div>
  )
}

export default HeaderCartButton