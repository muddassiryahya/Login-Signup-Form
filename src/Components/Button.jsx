import { Button } from 'antd';
import { useContext, useId } from 'react';
import User from '../context/UserContext';

function AppButton({ title, obj }) {
    const user = useContext(User);
    const id = useId()

    console.log("User-->", user);

    return (
        <Button onClick={() => console.log("Id", id)} type="primary" > {title} </Button >
    )
};

export default AppButton;