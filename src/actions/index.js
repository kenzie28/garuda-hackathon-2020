import {API_BASE_URL} from '../config';
import React from 'react';
import NotesEntry from '../components/notes-entry';
const bodyParser = require('body-parser');

export const ADD_STRESS = 'ADD_STRESS';
export const addStress = stress => ({
    type: ADD_STRESS,
    stress
});

export const ADD_ENERGY = 'ADD_ENERGY';
export const addEnergy = energy => ({
    type: ADD_ENERGY,
    energy
});

export const ADD_CONCENTRATION = 'ADD_CONCENTRATION';
export const addConcentration = concentration => ({
    type: ADD_CONCENTRATION,
    concentration
});

export const ADD_SLEEP_QUALITY = 'ADD_SLEEP_QUALITY';
export const addSleepQuality = sleep_quality => ({
    type: ADD_SLEEP_QUALITY,
    sleep_quality
});

export const ADD_SLEEP_QUANTITY = 'ADD_SLEEP_QUANTITY';
export const addSleepQuantity = sleep_quantity => ({
    type: ADD_SLEEP_QUANTITY,
    sleep_quantity
});

export const ADD_FOOD = 'ADD_FOOD';
export const addFood = food => ({
    type: ADD_FOOD,
    food
});

export const ADD_NOTES = 'ADD_NOTES';
export const addNotes = notes => ({
    type: ADD_NOTES,
    notes
});


export const ADD_MOOD_TYPES = 'ADD_MOOD_TYPES';
export const addMoodTypes = moodTypes => ({
    type: ADD_MOOD_TYPES,
    moodTypes
});

export const REMOVE_MOOD_TYPES = 'REMOVE_MOOD_TYPES';
export const removeMoodTypes = moodTypes => ({
    type: REMOVE_MOOD_TYPES,
    moodTypes
});

export const fetchEntry = () => dispatch => {
    //alert("Fetch");
    dispatch(fetchEntryRequest());
    fetch(`${API_BASE_URL}/entries_trigger/:id`)
        .then(res => res.json())
        .then(entry => {
            dispatch(fetchEntrySuccess(entry));
        })
        .catch(error => {
            dispatch(fetchEntryError(error));
        });
};

export const FETCH_ENTRY_REQUEST = 'FETCH_ENTRY_REQUEST';
export const fetchEntryRequest = () => ({
    type: FETCH_ENTRY_REQUEST
});

export const FETCH_ENTRY_SUCCESS = 'FETCH_ENTRY_SUCCESS';
export const fetchEntrySuccess = entry => ({
    type: FETCH_ENTRY_SUCCESS,
    entry
});

export const FETCH_ENTRY_ERROR = 'FETCH_ENTRY_ERROR';
export const fetchEntryError = error => ({
    type: FETCH_ENTRY_ERROR,
    error
});

export const fetchEntries = () => dispatch => {
    //alert("Fetch Plural");
    dispatch(fetchEntriesRequest());
    fetch(`${API_BASE_URL}/entries`)
        .then(res => res.json())
        .then(entries => {
            dispatch(fetchEntriesSuccess(entries));
        })
        .catch(error => {
            dispatch(fetchEntriesError(error));
        });
};

export const FETCH_ENTRIES_REQUEST = 'FETCH_ENTRIES_REQUEST';
export const fetchEntriesRequest = () => ({
    type: FETCH_ENTRIES_REQUEST
});

export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';
export const fetchEntriesSuccess = entries => ({
    type: FETCH_ENTRIES_SUCCESS,
    entries
});

export const FETCH_ENTRIES_ERROR = 'FETCH_ENTRIES_ERROR';
export const fetchEntriesError = error => ({
    type: FETCH_ENTRIES_ERROR,
    error
});

const username = 'kerney';
let nowEntry = [];
export const addEntry = (entry) => dispatch => {
    //console.log(JSON.stringify(entry));
    entry.username = username;
    nowEntry.push(entry);
    dispatch(addEntryRequest());
    fetch(`${API_BASE_URL}/entries_trigger`, {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(entry),
        headers:{
            "Content-type": 'application/json'
        }
        })
        .then(res => {
            //console.log(r.json());
            return res.json()
        })
        .then(json =>{
            nowEntry[0]["classification"] = json
            //dispatch(addEntry(nowEntry[0]));
            //dispatch(addEntryLater(nowEntry[0]));
            //rend("owais")
            //alert(json);
        })
        .then(entry =>{
            console.log(nowEntry)
            //rend("owais")
            //alert(json);
        })
        .catch(error => {
            //waisu(error)
            //dispatch(addEntryError(error));
        });
};

export const ADD_ENTRY_REQUEST = 'ADD_ENTRY_REQUEST';
export const addEntryRequest = () => ({
    type: ADD_ENTRY_REQUEST
});

export const ADD_ENTRY_LATER = 'ADD_ENTRY_LATER';
export const addEntryLater = (entry) => ({
    type: ADD_ENTRY_REQUEST
});

export const ADD_ENTRY_SUCCESS = 'ADD_ENTRY_SUCCESS';
export const addEntrySuccess = entry => ({
    type: ADD_ENTRY_SUCCESS,
    entry
});

export const ADD_ENTRY_ERROR = 'ADD_ENTRY_ERROR';
export const addEntryError = error => ({
    type: ADD_ENTRY_ERROR,
    error
});

export const editEntry = (entry) => dispatch => {
    //alert("Edit Entry");
    dispatch(editEntryRequest());
    fetch(`${API_BASE_URL}/entries_trigger`, {
        method: 'put',
        body: JSON.stringify(entry),
        headers:{
            "Content-type": 'application/json'
        }
    })
        .then(res => res.json())
        .then(entry => {
            dispatch(editEntrySuccess(entry));
        })
        .catch(error => {
            dispatch(editEntryError(error));
        });
};

export const EDIT_ENTRY_REQUEST = 'EDIT_ENTRY_REQUEST';
export const editEntryRequest = () => ({
    type: EDIT_ENTRY_REQUEST
});

export const EDIT_ENTRY_SUCCESS = 'EDIT_ENTRY_SUCCESS';
export const editEntrySuccess = entry => ({
    type: EDIT_ENTRY_SUCCESS,
    entry
});

export const EDIT_ENTRY_ERROR = 'EDIT_ENTRY_ERROR';
export const editEntryError = error => ({
    type: EDIT_ENTRY_ERROR,
    error
});
