import { current } from '@reduxjs/toolkit'
import React, { useRef, useState } from 'react'

const RefProgram = () => {

  const [username, setUsername] = useState<any>()
  const [password, setPassword] = useState<any>()


  const [val, setVal] = useState<any[]>([])
    const ref = useRef()

    const inputUser:any = useRef()

    const inputAge:any = useRef()

    const submitVal = (e:any) => {
        e.preventDefault();
        // console.log(inputUser.current.value)
        // console.log(inputAge.current.value)

        const aaa= inputUser.current.value
        const bbb= inputAge.current.value

        // setUsername(inputUser.current.value)
        // setPassword(inputAge.current.value)
        // console.log('===user===>',username)
        // console.log('===pass===>',password)

        // setTimeout(()=>{console.log('U: ',username)},1000)

        // setVal([...val,{username:username,password:password}])
        setVal([...val,{username:aaa,password:bbb}])

        // console.log('===array===>',val)


    }

  return (
    <div>
        <form onSubmit={submitVal}>
        <label>username</label>
        <input type='text' ref={inputUser}/>
        <label>age</label>
        <input type='text' ref={inputAge}/>
        <button>click me</button>
        </form>

        <ul>
         {val.map((user: any,key:any) => 

          <li key={key}>
              <h1>{user.username}</h1>
              <h2>{user.password}</h2>
          </li>
          )}
      </ul>

    </div>
  )
}

export default RefProgram