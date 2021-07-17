import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import contactsReducer from './reducers';

export default configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV === 'development',
});

// import contactsReducer from './slice';

// export default configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: [thunk, logger],
//   devTools: process.env.NODE_ENV === 'development',
// });
