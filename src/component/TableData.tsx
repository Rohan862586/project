import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteContactMutation } from '../api/api'
import { deletes } from '../reducer/reducerSlice'

const TableData = (props:any) => {
  const dispatch = useDispatch()
  const {id,name,address,mobile} = props.data

  const [ deleting ] = useDeleteContactMutation();
  const  val = useSelector((state:any)=>state.allvalues.add)

  console.log(val)
  // deleting(deleteselect)


  // const contact = useSelector((store:any)=>store.allvalues.deletes)

  // console.log(contact)
  const ccc = (id:any) => {
    dispatch(deletes(id))
     deleting(id)
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
    <td>Edit</td>
    <td> <a onClick={() => {ccc(id)}}>Delete </a></td>
    </tr>




  )
}

export default TableData