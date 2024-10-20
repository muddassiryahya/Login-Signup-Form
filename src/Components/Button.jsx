import { Button } from 'antd';
import { useContext } from 'react';
import User from '../context/UserContext';

function AppButton({ title, obj }) {
    const user = useContext(User);

    console.log("User-->", user);

    return (
        <Button onClick={() => user.setUser({ email: "ahmed@gmail.com", name: "Ahmed" })} type="primary">{title} </Button>
    )
};

export default AppButton;