import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const setFilter = createAction('contacts/setFilter');

/*
const headers = {
  'Content-Type': 'application/json',
};

const body = { name, number: phone };

const b = () => {
  fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  .then(res => res.json())
  .then(console.log);
};

const toDel = 'XPDelA6';

const c = () => {
  fetch(`${BASE_URL}/contacts/${toDel}`, {
    method: 'DELETE',
  });
};


//=======================================================
*/
