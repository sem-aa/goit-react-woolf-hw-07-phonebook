import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operation';

const ContactList = () => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          <p>
            {name}: {number}
          </p>

          <button
            className={styles.button}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
