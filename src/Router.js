import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './services/authentication/PrivateRoute'
import SignIn from './pages/SignIn/SignIn'
import Home from './pages/frontend/home/Home'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import SignUp from './pages/SignUp/Signup'
import About from './pages/frontend/about/About'
import Service from './pages/frontend/service/Service'
import Team from './pages/frontend/team/Team'
import Contact from './pages/frontend/contact/Contact'
import Dashboard from './pages/backend/Dashboard/Dashboard'
import Profile from './pages/backend/Profile/Profile'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Frontend */}
                <Route exact={true} path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                
                {/* Backend */}
                <PrivateRoute path="/backend/dashboard" component={Dashboard} />
                <PrivateRoute path="/backend/profile" component={Profile} />

                {/* Global */}
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <Route path="/forgotpassword" component={Forgotpassword} />

                {/* <Route
                    exact
                    path="/genres/:genreName/:genreId"
                    component={GenreList}
                />
                <Route exact path="/movie/:id" component={MovieDetailsContainer} /> */}

                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
