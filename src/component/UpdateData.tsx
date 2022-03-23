// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

// const UpdateData = () => {

//   const [newVal, setNewVal] = useState({
//     name:'',
//     address:'',
//     mobile:''
//   });

//   const  updateVal = useSelector((store:any) => store.allvalues.edit)
//   console.log(updateVal)

//   const abc = () => {

//   }

//   return (
//  <div>
//     <div className="popup-box">
//     <div className="box">
//           <div>
//             <h1> Update data </h1>
//           </div> 
//             <div>
//                 <input className="form-control" type="text" id='name' placeholder="name"  name="name" value={newVal.name}  onChange={(e:any) => {setNewVal({ name: e.target.value })}}/>
//             </div><br/>        
//             <div>
//                 <input className="form-control" type="text" id='address' placeholder="address"  name="address" value={updateVal.address}  />
//             </div><br/>
//             <div>
//                 <input className="form-control" type="text" id='mobile' placeholder="mobile"  name="mobile" value={updateVal.mobile} />
//             </div><br/>
//             <br/>
//             <div >
//                 <button className="btn btn-primary mr-1" onClick={()=>{ abc()}}>update</button>
//             </div>
//      </div>
//      </div>  
//      </div>  )
// }

// export default UpdateData





import { userInfo } from 'os';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useUpdateContactMutation } from '../api/api';
import { Data } from '../model/model';


const UpdateData = () => {
  const  updateVal = useSelector((store:any) => store.allvalues.edit)
  const navigate = useNavigate();
  const [updateContact] = useUpdateContactMutation();

  // const [newVal, setNewVal] = useState<User>({});

  const [newVal, setNewVal] = useState<Data>({ id:updateVal.id,
                                               name:updateVal.name, 
                                               address:updateVal.address,
                                               mobile:updateVal.mobile });

                                               
                                               
  const abc = async() => {
  await updateContact(newVal)
    navigate('/');
  }

  return (
 <div>
    <div className="popup-box">
    <div className="box">
          <div>
            <h1> Update data </h1>
          </div> 
            <div>
                <input className="form-control" type="text" id='name' placeholder="name"  name="name" value={newVal.name}  onChange={(e:any) => {setNewVal({ name: e.target.value})}} />
            </div><br/>        
            <div>
                <input className="form-control" type="text" id='address' placeholder="address"  name="address" value={newVal.address}   onChange={(e:any) => {setNewVal({ address: e.target.value })}} />
            </div><br/>
            <div>
                <input className="form-control" type="text" id='mobile' placeholder="mobile"  name="mobile" value={newVal.mobile}   onChange={(e:any) => {setNewVal({ mobile: e.target.value })}} />
            </div><br/>
            <br/>
            <div >
                <button className="btn btn-primary mr-1" onClick={()=>{ abc()}}>update</button>
            </div>
     </div>
     </div>  
     </div>  )
}

export default UpdateData

