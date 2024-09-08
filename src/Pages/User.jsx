import { Button } from "antd";
import AppLayout from "../Components/Layout";
import AppTable from "../Components/Table";
import { useState } from "react";

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Red',
        age: 72,
        address: 'Karachi No. 1 Lake Park',
        tags: ['cool', 'doctor'],
    },
];


function UsersPage() {
    const [page, setPage] = useState(0)
    const paginatedArray = () => {
        let arr = [];
        let chunk = 1;

        for (var i = 0; i < data.length; i += chunk) {
            arr.push(data.slice(i, i + chunk));
        }

        console.log(arr);
        
        return arr;

    }

    return (

        <AppLayout>
            <h1>Users Page</h1>
            <AppTable data={paginatedArray()[page]} />

            <div>
                <br />
                {

                    paginatedArray().map((v, i) =>
                        <Button onClick={() => setPage(i)} key={i}>{i + 1}</Button>)
                }
            </div>


        </AppLayout>
    )
}

export default UsersPage;