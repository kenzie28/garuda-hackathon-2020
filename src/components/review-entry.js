import React, {Component} from 'react';
import {connect} from 'react-redux';

import './review-entry.css';

export class ReviewEntry extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        let moodDescriptionValue = this.props.newEntry.stress;
        let moodDescription;

        let moodTypesDescriptionValue = this.props.newEntry.moodTypes;
        let moodTypesDescription;

        let sleepDescriptionValue = this.props.newEntry.sleep;
        let sleepDescription;

        let eatingDescriptionValue = this.props.newEntry.eating;
        let eatingDescription;

        let exerciseDescriptionValue = this.props.newEntry.exercise;
        let exerciseDescription;

        let notesDescriptionValue = this.props.newEntry.notes;
        let notesDescription;

        if (moodDescriptionValue == null) {
            moodDescription = "not entered";
        } else if (moodDescriptionValue === 5) {
            moodDescription = "great";
        } else if (moodDescriptionValue === 4) {
            moodDescription = "good";
        } else if (moodDescriptionValue === 3) {
            moodDescription = "okay";
        } else if (moodDescriptionValue === 2) {
            moodDescription = "meh";
        } else if (moodDescriptionValue === 1) {
            moodDescription = "bad";
        }

        if (moodTypesDescriptionValue.length === 0) {
            moodTypesDescription = "not entered";
        } else if (moodTypesDescriptionValue !== null) {
            moodTypesDescription = moodTypesDescriptionValue.join(", ");
        }

        if (sleepDescriptionValue == null) {
            sleepDescription = "not entered";
        } else if (sleepDescriptionValue === 5) {
            sleepDescription = "great";
        } else if (sleepDescriptionValue === 4) {
            sleepDescription = "good";
        } else if (sleepDescriptionValue === 3) {
            sleepDescription = "okay";
        } else if (sleepDescriptionValue === 2) {
            sleepDescription = "meh";
        } else if (sleepDescriptionValue === 1) {
            sleepDescription = "bad";
        }

        if (eatingDescriptionValue == null) {
            eatingDescription = "not entered";
        } else if (eatingDescriptionValue === 5) {
            eatingDescription = "great";
        } else if (eatingDescriptionValue === 4) {
            eatingDescription = "good";
        } else if (eatingDescriptionValue === 3) {
            eatingDescription = "okay";
        } else if (eatingDescriptionValue === 2) {
            eatingDescription = "meh";
        } else if (eatingDescriptionValue === 1) {
            eatingDescription = "bad";
        }

        if (exerciseDescriptionValue == null) {
            exerciseDescription = "not entered";
        } else if (exerciseDescriptionValue !== null) {
            exerciseDescription = exerciseDescriptionValue;
        }

        if (notesDescriptionValue == null) {
            notesDescription = "not entered";
          } else if (notesDescriptionValue !== null) {
              notesDescription = notesDescriptionValue;
          }

        return (
            <div className="review">

                <p>MAZEL HELP</p>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    newEntry: state.entry.newEntry,
})

export default connect(mapStateToProps)(ReviewEntry);
