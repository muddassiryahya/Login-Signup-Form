import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Profile from "../Pages/Profile";
import { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "../config/firebase";
import { Spin } from "antd";


function AppRouter() {
    const [isUser, setIsUser] = useState(false);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User-->", user);
                setIsUser(true);

            } else {
                console.log("User is signed out");
                setIsUser(false);
            }
            setLoader(false)
        });

    })
    return (
        <>
            {loader ?
                <div style={{ padding: 200 }}>
                    <Spin tip="Loading" size="large">
                        <div className="content" />
                    </Spin>
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element=
                            {isUser ? <Navigate to={"/profile"} /> : <Login />}
                        />
                        <Route path="/signup" element=
                            {isUser ? <Navigate to={"/profile"} /> : <Signup />}
                        />
                        <Route path="/profile" element=
                            {isUser ? <Profile /> : <Navigate to={"/"} />}
                        />
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}


export default AppRouter;