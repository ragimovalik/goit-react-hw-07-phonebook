import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { combineReducers } from 'redux';

const items = createReducer([], {
  [actions.getContactsSuccess]: (state, action) => action.payload,

  [actions.addContactSuccess]: (state, action) => [...state, action.payload],

  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [actions.setFilter]: (state, action) => action.payload,
});

const error = createReducer(null, {});

const loading = createReducer(false, {
  [actions.getContactsRequest]: true,
  [actions.getContactsSuccess]: false,
  [actions.getContactsError]: false,

  [actions.addContactRequest]: true,
  [actions.addContactSuccess]: false,
  [actions.addContactError]: false,

  [actions.deleteContactRequest]: true,
  [actions.deleteContactSuccess]: false,
  [actions.deleteContactError]: false,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
