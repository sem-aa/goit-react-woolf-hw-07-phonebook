import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operation';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.number) {
      return alert('The name and number field must be filled in');
    }

    const existContact = contacts.find(
      item =>
        item.name.toLocaleLowerCase() === formData.name.toLocaleLowerCase()
    );

    if (existContact) {
      return alert(`${formData.name} contact already exists`);
    }

    dispatch(addContact(formData));
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={formData.number}
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
