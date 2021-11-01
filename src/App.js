import React, {Component} from 'react';
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import History from './components/history';
import FormEntry from './components/form-entry';
import Checkout from './components/Checkout';
import ControlledCarousel from './components/quick-tips-2';
import {refreshAuthToken} from './actions/auth';
import Loading from './components/loading';
import Therapist from './components/therapist';
import DashboardSummary from './components/dashboard-summary';
import Result from './components/result';
import Anxiety from './components/anxiety';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.min.css";




import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Protected from './components/protected';
import './App.css';

import '@progress/kendo-theme-default/dist/all.css';

export class App extends Component{

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <Router >
                <div className="App">
                    <main role="main">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/anxiety-tips' component={Anxiety} />
                        <Route exact path='/therapist-view' component={Therapist} />
                        <Route exact path='/result' component={Result} />
                        <Route exact path='/dashboard-summary' component={DashboardSummary} />
                        <Route exact path='/book-appointment' component={Checkout} />
                        <Route exact path='/quick-tips' component={ControlledCarousel} />
                        <Route exact path='/loading' component={Loading} />
                        <Route exact path='/book-appointment' component={Checkout}/>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/dashboard' render={(props) => <Protected render={() => <Dashboard/>}/>} />
                        <Route exact path='/history' render={(props) => <Protected render={() => <History/>}/>} />
                        <Route path='/form-entry' component={FormEntry} />
                    </main>

                </div>
            </Router>
      );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default connect(mapStateToProps)(App);
