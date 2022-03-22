
import React from 'react'
import { Navigate } from 'react-router';
import { useContactsQuery } from '../api/api'
import TableData from './TableData';
import { useNavigate } from 'react-router-dom';



const Table = () => {

    const navigate = useNavigate()
    const { data, error, isLoading, isSuccess} = useContactsQuery();

  return (
    <div>

        <button type="button" className="btn btn-primary" onClick={() => { navigate('/add')} }> Add Data </button>

        {isLoading && <h2>...........Loading</h2>}
        {error && <h2>something went wrong</h2>}
        {isSuccess && (
            <div>
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">address</th>
                            <th scope="col">mobile</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>images</th>
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