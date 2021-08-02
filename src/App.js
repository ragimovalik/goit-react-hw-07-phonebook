import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import PageTitle from './components/PageTitle/PageTitle';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { getContacts } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []); //eslint-disable-line

  return (
    <>
      <PageTitle title={'HW #7 / Async Redux'} />
      <Form />
      <Filter />
      <ContactList />
      <Toaster />
    </>
  );
};

export default App;
