import React from 'react';
import {connect} from 'react-redux';
import Login from './login';
import {Link, Redirect} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import RecipeReviewCard1 from './RecipeCard1';
import RecipeReviewCard2 from './RecipeCard2';
import RecipeReviewCard3 from './RecipeCard3';

import './home.css';

export function DashboardSummary(props) {

    function header() {
        if (props.name == null) {
            return "Your Dashboard";
        }
        else {
            return "Patient Dashboard";
        }
    }

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    const divCard = {
        display: "inline-block",
        margin: "0 auto",
        padding:"50px",
    }

    return (
        <div>
        <Jumbotron fluid>
            <Container>
                <h1>{header()}</h1>
                <p>
                    Find useful analytics and visualization of stress patterns
                </p>
            </Container>
        </Jumbotron>
        <div style={{alignItems: "center"}}>
            <div style={divCard}>
                <RecipeReviewCard1 name={props.name}></RecipeReviewCard1>
            </div>
            <div style={divCard}>
                <RecipeReviewCard2 name={props.name}></RecipeReviewCard2>
            </div>
            <div style={divCard}>
                <RecipeReviewCard3 name={props.name}></RecipeReviewCard3>
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashboardSummary);

