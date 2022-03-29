import React from 'react'

const Header = (props:any) => {
  return (
    <div>
        <header>
            <h1>ReactMeals</h1>
            <button>cart</button>

        </header>
        <div>
            <img src="images/acc.png"/>
        </div>
    </div>
  )
}

export default Header