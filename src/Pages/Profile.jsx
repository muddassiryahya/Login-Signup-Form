import { useState } from "react";
import AppCard from "../Components/Card";
import AppLayout from "../Components/Layout";

function Profile() {
    const [obj, setObj] = useState({ name: "Muhammad", age: 33 });

    return (
        <AppLayout>
            <h1>Profile Page</h1>
            <br />
            <AppCard obj={obj}/>
        </AppLayout>

    )
}

export default Profile;