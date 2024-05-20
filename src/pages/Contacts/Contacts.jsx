import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/contactsOps';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { ContactList } from '../../components/ContactList/ContactList';
import s from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={s.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <Error />}
      {loading && <Loading />}
      {!error && !loading && <ContactList />}
    </div>
  );
};
