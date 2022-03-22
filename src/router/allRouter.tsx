
import AddData from "../component/AddData"
import Table from "../component/Table"
import UpdateData from "../component/UpdateData"

export const allRouter = [
    {
        path: '/',
        element: <Table/>
    },
    {
        path: '/add',
        element: <AddData/>
    },
    {
        path: '/update',
        element: <UpdateData/>
    }
]

