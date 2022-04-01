// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { allRouter } from './router/allRouter'
// import { Routes ,Route, BrowserRouter } from 'react-router-dom';

// function App() {
//   // console.log(process.env.REACT_APP_API)
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           {
//             allRouter.map( ( {path,element},key) => (
//             <Route path={path} element={element} key={key} />
//             ))
//           }
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import CourseInput from './component/courseInput';

// function App() {
//   const addGoalHandler = (course:any) => {
//     console.log(course)
//   }

//   return (
//     <div>
//       <CourseInput onAdd={addGoalHandler}/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import CourseInput from './component/courseInput';

// function App() {

//   const newVal = (col:any) => {
//     console.log(col)
//   }

//   return (
//     <div>
//       <CourseInput newVal={newVal}/>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import CourseInput from './component/courseInput';

// function App() {

//   const [val, setVal] = useState('rohan')

//   const valGive = (giv:any) => {
//     console.log(giv)
//   }

//   return (
//     <div>
//       <CourseInput setVal={setVal} val={val} valGive={valGive} />
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import UserList from './component/UserList';
// import User from './component/User';

// function App() {

//   const [val, setVal] = useState<any[]>([]);

//   // useEffect(() => {
//   //   console.log('rohan')
//   // },[])

//   // useEffect(() => {
//   //   console.log('rohan')
//   // },[val])

//   // useEffect(() => {
//   //   console.log('rohan')
//   //   setTimeout(()=>{console.log('odel')},2000)
//   // },[])

//   const alldata = (username:any,password:any) => {
//     setVal([...val,{username:username, password: password}])
//     }

//   return(
//     <div>
//       <User alldata={alldata}/>
//       <UserList val={val} />

//     </div>
//   )
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import UserList from './component/UserList';
// import User from './component/User';
// import ProtalDemo from './component/ProtalDemo';
// import RefProgram from './component/RefProgram';
// // import NewReducer from './component/NewReducer';

// function App() {

//   const [val, setVal] = useState<any[]>([]);

//   const alldata = (username:any,password:any) => {
//     setVal([...val,{username:username, password: password}])
//     }

//   return(
//     <div>
//       <User alldata={alldata}/>
//       <UserList val={val} />
//       <ProtalDemo/>
//       <RefProgram/>

//       {/* <NewReducer/> */}

//     </div>
//   )
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {

//   const [val, setVal] = useState<any>(0);
//   const [temp, setTemp] = useState<any>(0);

//   // useEffect(() => {
//   //   console.log('rohan')
//   // },[])

//   // useEffect(() => {
//   //   console.log('rohan')
//   // },[val])

//  useEffect(() => {
//     console.log('rohan')
//   },[val,temp])

//  return(
//     <div>
//       <button onClick={()=> {setVal(val+1)}}>click</button>
//       <button onClick={()=> {setTemp(temp+1)}}>clickme</button>
//     </div>
//   )
// }

//export default App





import React, { useReducer } from 'react';
import './App.css';

const initialState = {count: 0};

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default App






// import React, { useContext } from 'react';
// import './App.css';

// const themes ={
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// }

// const ThemeContext = React.createContext(themes.light);

// function App() {

//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar/>
//     </ThemeContext.Provider>
//   );
// }

// function Toolbar(props:any){
//     const theme = useContext(ThemeContext);

//   return(
//     <div>
//       <Themebutton/>

//     </div>
//   )
// }

// function Themebutton() {
//   const theme = useContext(ThemeContext);
//   return(
//     <button style={{background:theme.background, color:theme.foreground}}>
//       I am styled by theme context!
//     </button>
//   )
// }

// export default App







