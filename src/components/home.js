import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Album from './Album';
import DashboardSummary from './dashboard-summary';
import Dashboard from './dashboard';

import './home.css';

export function Home(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (

        <div className="home">
            <Header
            appName="mood today"
            currentUser="owais" />
            <Album></Album>
            <DashboardSummary></DashboardSummary>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
