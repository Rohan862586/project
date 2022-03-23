// import React, { useState } from 'react';

// const CourseInput = (props:any) => {
//     const [val, setVal] = useState()
//     // const [val, setVal] = useState<string>()

//     const inputGiven = (e:any) => {
//         setVal(e.target.value)
//         props.onAdd(val)
//     }
//     const formSubmit = (e:any) => {
//         e.preventDefault();
//     }


//   return (
//     <div>
//         <h1>enter value</h1>
//         <input type='text' onChange={inputGiven} />
//         <button onClick={formSubmit}>click</button>
//     </div>
//   )
// }

// export default CourseInput





// import React, { useState } from 'react';

// const CourseInput = (props:any) => {
//     const val = useState('rohan')
   
//     const formSubmit = () => {
//         props.onAdd(val)
//     }


//   return (
//     <div>
//         <button onClick={formSubmit}>click</button>
//     </div>
//   )
// }

// export default CourseInput







// import React, { useState } from 'react';

// const CourseInput = (props:any) => {

//     const now='rohan';

//     const valGive = () => {
//         props.newVal(now)
//     }
   
//   return (
//     <div>
//         <button onClick={valGive}>click me</button>
//     </div>
//   )
// }

// export default CourseInput




import React, { useState } from 'react';

const CourseInput = (props:any) => {

    
  const nowVal = () => {
    console.log(props.val)
  }

  const givenVal = () => {
      props.valGive('odel')
  }


  return (
    <div>
       <button onClick={nowVal}>clicks</button>
       <button onClick={givenVal}>click me</button>

    </div>
  )
}

export default CourseInput


