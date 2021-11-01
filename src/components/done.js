import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './done.css';

export class Done extends Component{

    render() {

        return (

            <div className="done">

                <h2>Thank you for filling out your daily entry! 
                    <br/>Please enable your front facing camera to measure heart rate.</h2>



            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(Done);

// taking this with me
//                 <Link to="/dashboard" className="return-button">Return to Dashboard</Link>