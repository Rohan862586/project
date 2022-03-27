import React from 'react'

const UserList = (props:any) => {
  return (
      <div>
              {/* <ul>
              {props.val.map((tik:any) => 
                  <li>{tik.username}</li>
                  <li>{tik.password}</li>
                )}

              </ul> */}


       <ul>
         {props.val.map((user: any,key:any) => 

          <li key={key}>
              <h1>{user.username}</h1>
              <h2>{user.password}</h2>
          </li>
          )}
      </ul>

      </div>
    )
}

export default UserList