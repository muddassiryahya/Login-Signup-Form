import { Link } from "react-router-dom";
import SignupForm from "../Components/SignupForm";
import { createUserWithEmailAndPassword, auth } from "../config/firebase"

function Signup() {
    const registerUser = (values) => {
        // console.log("Values--->", values);
        createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User-->", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error-->", errorMessage);
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center p-5">
                <div className="col-6 p-5">
                    <SignupForm registerUser={registerUser} />
                    Already have an account? <Link to={'/'}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;