import * as actions from './actions';
import toast from 'react-hot-toast';

const BASE_URL = 'http://localhost:3001';

export const getContacts = () => async dispatch => {
  dispatch(actions.getContactsRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`);
    const data = await response.json();
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    toast.error(error.message);
    dispatch(actions.getContactsError(error.message));
  }
};

const headers = {
  'Content-Type': 'application/json',
};

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    dispatch(actions.addContactSuccess(data));

    toast.success('Contact successfully added');
  } catch (error) {
    toast.error(error.message);
    dispatch(actions.addContactError(error.message));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await fetch(`${BASE_URL}/contacts/${contactId}`, {
      method: 'DELETE',
      body: JSON.stringify(contactId),
    });
    dispatch(actions.deleteContactSuccess(contactId));
    toast.success('Contact deleted');
  } catch (error) {
    toast.error(error.message);
    dispatch(actions.deleteContactError(error.message));
  }
};
