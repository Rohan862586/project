
import React from 'react'
import { useContactsQuery } from '../api/api'
import TableData from './TableData';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../reducer/reducerSlice';


const Table = () => {
    const { data, error, isLoading, isSuccess} = useContactsQuery();
    const dispatch = useDispatch()
      
    dispatch(add(data))

    const  val = useSelector((state:any)=>state.allvalues.add)


  return (
    <div>
        {isLoading && <h2>...........Loading</h2>}
        {error && <h2>something went wrong</h2>}
        {isSuccess && (
            <div>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>address</th>
                            <th>mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((data,key)=> (
                            <TableData data={data} key={key} />
                            // <tr>
                            //     {/* {key} */}
                            // <td>{data.id}</td>
                            // <td>{data.name}</td>
                            // <td>{data.address}</td>
                            // <td>{data.mobile}</td>
                            // <td>Edit</td>
                            // <td>Delete</td>
                            // </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        )}
    </div>
  )
}

export default Table