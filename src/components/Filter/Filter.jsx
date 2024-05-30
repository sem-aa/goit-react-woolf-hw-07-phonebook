import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(setStatusFilter(e.target.value));

  return (
    <label className={styles.label}>
      Search
      <input
        className={styles.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleFilterChange}
        required
      />
    </label>
  );
};

export default Filter;
