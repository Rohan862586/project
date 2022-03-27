import React, { useState } from 'react'

const User = (props:any) => {

    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<number>();

    const usernamefun = (e:any) => {
        setUsername(e.target.value)
    }
    const useragefun = (e:any) => {
        setPassword(e.target.value)
    }

    const handleAction = (e:any) => {
        e.preventDefault();
        console.log(username, password)
        props.alldata(username,password)
        setUsername('')
        setPassword(0)
      
    }


      return (
          <div>
              <form onSubmit={handleAction}>
              <label htmlFor='username' >username</label>
              <input type='text' name='username' value={username} onChange={usernamefun} />
              <label htmlFor='age'>age</label>
              <input type='text' name='password' value={password} onChange={useragefun} />
              <button>click me</button>
              </form>
          </div>
        );
}

export default User

