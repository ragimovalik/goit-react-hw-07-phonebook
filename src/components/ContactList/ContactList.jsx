import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const { items, filter } = contacts;

  const filterContacts = (items, filter) => {
    const normalizedText = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedText),
    );
  };

  const filteredContacts = filterContacts(items, filter);

  return (
    <div className={styles.ContactList}>
      <h3 className={styles.ContactList__title}>Contact List</h3>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
