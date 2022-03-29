// import React from 'react'
// import ReactDOM from 'react-dom'

// const ProtalDemo = () => {
//   const root = document.getElementById("portal-root");
//   const portal = (root) ? ReactDOM.createPortal (
//           <h4>
//               This is portal file
//           </h4>,
//           root      
//       ) : <h4>Unable to find portal root</h4>;

//     return portal;
//   }  

// export default ProtalDemo




// import React from 'react'
// import ReactDOM from 'react-dom'

// const ProtalDemo = () => {
//       return ReactDOM.createPortal (
//           <h4>
//               This is portal file
//           </h4>,
//           document.getElementById('portal-root')
//       ) 
//   }  

// export default ProtalDemo




import React from 'react'
import ReactDOM from 'react-dom'

const ProtalDemo = () => {
  const root = document.getElementById("portal-root");
   return  (root) ? ReactDOM.createPortal (
          <h4>
              This is portal file
          </h4>,
          root      
      ) : <h4>Unable to find portal root</h4>;

  }  

export default ProtalDemo




