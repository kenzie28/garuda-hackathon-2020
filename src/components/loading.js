import React, {Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import Loader from 'react-loader-spinner';
import Result from './result';
import './loading.css'
import {connect} from 'react-redux';

export class Load extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render () {

        let classification = this.props.newEntry.classification;

        return (
       <div>
            <h1 className='loading'>Loading</h1>
            <Loader type="ThreeDots" color="#4D6CB6" height="100" width="100" />
            <Result></Result>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(Load);