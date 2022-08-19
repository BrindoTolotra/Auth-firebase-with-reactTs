import React from "react";
import './Home.css'
import {useNavigate} from "react-router-dom";

const Home: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <p>AuthenticationFirebase Auth with React</p>
                {
                    currentUser ? (
                        <p>Welcome  {currentUser.email} !</p>
                    ) : (
                        <p>You can log in or create an account</p>
                    )
                }
                {
                    !currentUser ? (
                        <button className={"btn btn-outline-light btn-lg"} disabled>Private Home</button>
                    ) : (
                        <button className={"btn btn-outline-light btn-lg"} onClick={() => {
                            navigate("/private/private-home");
                        }}>Private Home</button>
                    )
                }
            </header>
        </div>
    )
}
