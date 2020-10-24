import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from './Pages/signup'
import SignIn from './Pages/signin'
import Dashboard from './Pages/dashboard'
const PageRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Route path="/" exact>
                    <SignUp />
                </Route>

            </Switch>
        </Router>
    )
}

export default PageRouter;