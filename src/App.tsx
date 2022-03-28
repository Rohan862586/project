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




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { ClockCircleOutlined } from '@ant-design/icons';

// function App() {
//   console.log(process.env.REACT_APP_API)
//   return (
//     <div>
//         <div className='new'>
//           <img src="images/logo.png"/>
//           <button style={{marginLeft:'60%',height:'40px'}} className='btn btn-secondary btn-sm'>Login</button>
//           <button style={{marginLeft:'30px',height:'40px'}} className='btn btn-prippmary btn-sm'>join</button>
//         </div>
//         <div className='one'>
//           <h5>Booking Confirmation</h5>
//           <div className='two'>
//           <h6>Thak You. Your Booking Order is Congiremed Now.</h6>
//           <button className='btn btn-primary btn-sm' style={{marginLeft:'60%'}}>PRINT DETAILS</button>
//           </div>
//           <p>A confirmation email has been sent to your provided email address</p>
//         </div>

//         <div className='abc container'>
//             <div className='xyz col-8'>
//                   <h3 style={{marginTop:'30px'}}>Trip Confirmation and Overview</h3>
//                   <div className='abc'>
//                     <div className='col-6'>
//                     <p>confirmation number: 656454</p>
//                     <p>Leaving from: Toronto (YYZ)</p>
//                     <p>Depart: Apr.24.2014 </p>
//                     <p>Travel Provider by: sunquest Vacations </p>
//                     <p>Room: junior sulte ocean view </p>
//                       </div>
//                       <div className='col-6'>
//                       <p>confirmation Date: wed.Dec.23.2014 </p>
//                       <p>Destination: Acapulco(ACU)</p>
//                       <p>Return: may.4.2014 </p>
//                       <p>Hotel: Memories Grand Bahama Beach</p> 
//                       <p>meal plan: All inclusive </p>
//                       </div>
//                     </div>
//                     <div className='rolling'>
//                       <h3 className='second'>Hotel Details</h3>
//                       <h5 className='secondplus'>Confirmation Number:46811073</h5>
//                     </div>
//                     <div className='row' style={{marginTop:'15px'}}>
//                       <div className='col-5'>
//                         <img src='images/hotel.jpg'/>
//                       </div>
//                       <div className='col-7'>
//                       <b>Memories Grand Bahama Beach And Casino</b>
//                       <p>232 Blueway Avenue</p>
//                       <p>1x Junior Suite</p> 
//                       <p> 7 Nights All inclusive</p>
//                       <p> Check-in sun,jun.9,2014 |check-out:sat,jun.16.2014 </p>
//                       </div>
//                     </div>
//                     <hr/>
//                     <div>
//                         <h3>cancelling policy</h3> 
//                     </div>
//                     <div>
//                     <p> we understand that something travel plans change.We do not change fee.However, this</p>
//                       <p>   property (csesare places)imposese the follwing penalty customers that we are requied to pass:on</p>
//                       <p>  cancelltions or changes made after 11.59 Am(GMT-08.00) pacific time (US&Canada)on aug7,2005</p>
//                       <p>   are subject a 1 night Room & Tax penlaty.The Property makes no fefunds for no shows or early checkout </p>  
//                     </div>

//                     <div>
//                     <h2> Flight Details<span className='pqr'>Confirmation Number:46811073</span></h2>
//                     </div>


//                  <table>
//                  <tr>
//                      <th>Airrline</th>
//                      <th>Departing</th>
//                      <th>Arriving</th>
//                  </tr>
//                  <tr>
//                      <td><img src="images/air-canada.jpg" className='xyz'/>AIR CANADA (VIA YU)<p>FLIGHT 201,ECONOMY(VIA YU)</p> </td>
//                      <td><h6>1:00(yyz)ToORNTO</h6><p>SEPT.24,2014</p></td>
//                      <td><b>3:pm(FRT)</b>FORT LAUDERDALE<p>SEPT.24,2014</p></td> 
//                  </tr>
//                   <tr>
//                   <td><img src="images/air-canada.jpg" className='xyz'/>AIR CANADA (VIA YU)<p>FLIGHT 201,ECONOMY(VIA YU)</p> </td>
//                      <td><h6>1:00(yyz)ToORNTO</h6><p>SEPT.24,2014</p></td>
//                      <td><b>3:pm(FRT)</b>FORT LAUDERDALE<p>SEPT.24,2014</p></td> 
//                  </tr>
//                   <tr>
//                   <td><img src="images/air-canada.jpg" className='xyz'/>AIR CANADA (VIA YU)<p>FLIGHT 201,ECONOMY(VIA YU)</p> </td>
//                      <td><h6>1:00(yyz)ToORNTO</h6><p>SEPT.24,2014</p></td>
//                      <td><b>3:pm(FRT)</b>FORT LAUDERDALE<p>SEPT.24,2014</p></td> 
//                  </tr>
//              </table>

//              <h2> Car Details<span className='three'>Confirmation Number:46811073</span></h2>

//                 <h2><a>Traveller and Insurance Details</a></h2><hr/>
//                 <h2><a>Contact Information</a></h2><hr/>
//                 <h2><a>Excursions and other optios</a></h2><hr/>
//                 <h2><a>Price Summary</a></h2><hr/>
//                 <h2><a>Payment Details</a></h2><hr/>
//                 <h2><a>Mandatory Information</a></h2><hr/>

//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diagnissin arcu eros, id ullamcorper sem vestibulum
//                  quis, Ut vitae dignissim erat. suspendlsse potenti,  DO not hard over your card or disclose your pin card  Duis sagittis massa sit 
//                 amet nibh mattis laoreet. Duis vulputute lorem . deatail to thired party app or person under any cirumastamse 
//                 varius quis sed runa. Proin facillisis varius nisi, id porttitor ex lobortis in. Curabitur at auctor neque. In urna magna,
//                 mollis sit amet laculis pretium bloandit ut libero. </p>

//                 <h2>Special Request</h2><hr/>
//                 <p>
//                     Minimum deposite has been selected. Amount applied on credit card today: $150.00 The remaining balance of $4872.30 will be automatically charged on this credit on Nov,17,2014.<br/>Audit 1: Wheekchair access,next, next <br/>Audit 2 : Wheekchair access,next, next<br/> child 1 :Strolle
//                 </p>


//                 <h2>Additional Information</h2><hr/>
//                 <p>
//                     Lorem ipsum dolot sit amet, consectetur adipiscing elit. Eatiam dignissim arcu eros, id ullamcorper sem cestibulum<br/>  quis. Ut dignissim erat. Suspendisse potenti.Nulla scelerisque eget orci sed vehicula. Duis sagittis massa sit
//                  <br/>amet nibh mattis laoreert.Duls vulputate lorem nec dapibus fringilla. Donec lacinia odio sit amet llgua posuere
//                   <br/>varius quis sed urna. Proin facilisis varius nisi, id porttitor ex lobortis in, Curabitur at auctor neque, In urna magna,
//                   <br/> mollis sit amet iacukis pretium, blandit ut libero.
//                 </p>


//                 <h2>Agency Details</h2><hr/>
//                 <p>
//                     Minimum deposite has been selected. Amount applied on credit card today: $150.00<br/>The remaining balance of $4872.30 will be automatically charged on this credit on Nov,17,2014.<br/>
//                 </p>

//                 <table>
//                     <tr>
//                         <td>Agency Name:</td>
//                         <td>last minutes club</td>
//                         <td>postal/Zip code:</td>
//                         <td>L4W 4Y6</td>
//                        </tr>
//                        <tr>
//                            <td>Address:</td>
//                            <td>2355 skymark avg,suite200</td>
//                            <td>Telephone:</td>
//                            <td>416-449-5400</td>


//                        </tr>
//                        <tr>
//                         <td>City</td>
//                         <td>Missing</td>
//                         <td>Toll Free:</td>
//                         <td>1-877-970-0076</td>
//                     </tr>
//                     <tr>
//                         <td>Province/State</td>
//                         <td>Ontario</td>
//                         <td>Fax:</td>
//                         <td>905-366-0076</td>
//                     </tr>
//                 </table>

//             </div>
          
//             <div className='col-3 jjj' style={{margin:'100px'}}>
//             <h3>Need Help?</h3>
//             <p> we would be more thand happy to help you our tern advisor are 24/7 at your service to help you</p>
//             <p>1-877-970-3500</p> 
//             <p>contact@lastminute.com</p>
//             <hr/>
//             <h3>Why Book with us?</h3>    
//             <p>save money with last minute club</p> 
//             <hr/>   
//             <p>customers come first</p>
//             <hr/>
//             <p>Memver Benefits</p>
//             </div> 
//         </div>

      
//           <footer className='ttt'>
//             <div>
//                 <img src="images/acc.png"/>
//                 <img src="images/mca.png"/>
//                 <img src="images/geo.png"/>
//                 <p className='yyy'><h5>2355 Skymark Ave, Suite 100 ON,L4W 4Y6<br/>Copyright @ 2004-2015 stminuteclub.com.ALL RIGHTS RESERVED</h5></p>
//             </div>
//           </footer>

//     </div>
//   );
// }

// export default App;







import React, { useState } from 'react';
import './App.css';
import UserList from './component/UserList';
import User from './component/User';


function App() {
  
  const [val, setVal] = useState<any[]>([]);

  const alldata = (username:any,password:any) => {
    setVal([...val,{username:username, password: password}])
    }

  return(
    <div>
      <User alldata={alldata}/>
      <UserList val={val} />

    </div>
  )
}

export default App;









// import React, { useEffect, useState } from 'react';
// import './App.css';
// import User from './component/user';
// import UserList from './component/UserList';


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








