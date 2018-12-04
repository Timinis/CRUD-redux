import { createStore, combineReducers } from redux;

import peopleReducer from './peopleReducer';

const rootReducer = {
  people: peopleReducer,
  person: personReducer,
}

export default () => createStore(rootReducer)