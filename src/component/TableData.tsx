import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteContactMutation } from '../api/api'
import { deletes, edit } from '../reducer/reducerSlice'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router'


const TableData = (props:any) => {

  // const navigate = useNavigate();

  const dispatch = useDispatch()
  const {id,name,address,mobile} = props.data

  const [ deleting ] = useDeleteContactMutation();
  const  val = useSelector((state:any)=>state.allvalues.add)

  // console.log(val)
  // deleting(deleteselect)
  // const contact = useSelector((store:any)=>store.allvalues.deletes)

  const ccc = (id:any) => {
    dispatch(deletes(id))
     deleting(id)
  }

  const ddd = (data:any) => {
    dispatch(edit(data))
    // navigate('/update')
  }

  return (
    // <tr>
    // <td>{props.data.id}</td>
    // <td>{props.data.name}</td>
    // <td>{props.data.address}</td>
    // <td>{props.data.mobile}</td>
    // <td>Edit</td>
    // <td>Delete</td>
    // </tr>

    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{address}</td>
    <td>{mobile}</td>
    {/* <td><a onClick={() => {ddd(props.data)}}><Link to="/update">Edit</Link></a></td> */}
    <td><Link to="/update" onClick={() => {ddd(props.data)} } >Edit</Link></td>
    {/* <td><a onClick={() => {ddd(props.data)}}>Edit</a></td> */}
    <td> <a onClick={() => {ccc(id)}}>Delete</a></td>
    </tr>

  )
}


export default TableData

