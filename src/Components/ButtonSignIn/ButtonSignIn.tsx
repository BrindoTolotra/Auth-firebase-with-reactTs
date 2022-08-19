import React from "react";
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
import signInWithProvider from "../../firebase/authentification";
import {facebookProvider, githubProvider, googleProvider} from "../../firebase/providers";
import 'bootstrap-icons/font/bootstrap-icons.css';

const ButtonSignIn:React.FC<{disableModal: () => void,setCurrentUser:any }> = (props) => {
    const {disableModal,setCurrentUser} = props;
    const handleClick = async (provider: GoogleAuthProvider | FacebookAuthProvider | GithubAuthProvider) => {
        const res = await signInWithProvider(provider);
        await setCurrentUser(res);
        await disableModal();
    }
    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <button className={"btn btn-google m-3"} onClick={() => {
                handleClick(googleProvider);
            }}><i className="bi bi-google"></i>
            </button>
            <button className={"btn btn-facebook m-3"} onClick={() => {
                handleClick(facebookProvider);
            }}><i className="bi bi-facebook"></i>
            </button>
            <button className={"btn btn-github m-3"} onClick={() => {
                handleClick(githubProvider);
            }}><i className="bi bi-github"></i>
            </button>
            
        </div>
    )
}
export default ButtonSignIn;
