import { useSelector } from 'react-redux';
import { getLoading, getFilteredContacts } from '../../redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import Spinner from '../Spinner';
import styles from './ContactList.module.css';

const ContactList = () => {
  const loading = useSelector(getLoading);
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <div className={styles.ContactList}>
      <h3 className={styles.ContactList__title}>Contact List</h3>
      {loading && <Spinner />}

      <ul>
        {filteredContacts.length >= 1 ? (
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <p>Nothing to show. Please add your first contact </p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
