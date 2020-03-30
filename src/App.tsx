import React, {Component} from "react";
import {
    BrowserRouter as Router, Redirect,
    Route
} from "react-router-dom";
import LoginForm from "./components/auth/login";
import UserInfo from "./components/profile/userInfo";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" exact render={props => <LoginForm {...props}/>}/>
                    <AuthenticatedRoute path="/user" render={UserInfo}/>
                </div>
            </Router>
        )
    }
}

const AuthenticatedRoute = ({render: Component, ...rest}: any) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);