import { useReducer, useState } from "react";
import AppCard from "../Components/Card";
import AppLayout from "../Components/Layout";
import { INITIAL_STATE, reducer } from '../reducer';

function Profile() {
    const [obj, setObj] = useState({ name: "Muhammad", age: 33 });
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    console.log("state", state)

    return (
        <AppLayout>
            <h1>Profile Page</h1>
            <br />
            <AppCard obj={obj} />
            <br />
            <br />
            <div>
                <h1>Use Reducer</h1>
                <h2>Theme: {state.theme}</h2>
                <button onClick={() => dispatch({ type: "update_theme", theme: "dark" })}>Update</button>
            </div>
        </AppLayout>

    )
}

export default Profile;