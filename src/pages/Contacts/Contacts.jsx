import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectConfirmModal,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { ContactList } from '../../components/ContactList/ContactList';
import s from './Contacts.module.css';
import { ConfirmModal } from '../../components/ConfirmModal/ConfirmModal';
import { fetchContactsThunk } from '../../redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const modal = useSelector(selectConfirmModal);

  return (
    <>
      {modal.state && <ConfirmModal />}
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.div}>
        <div>
          <h2 className={s.subtitle}>Add contact Form</h2>
          <ContactForm />
        </div>
        <div className={s.contacts_div}>
          <SearchBox />
          {error && <Error />}
          {loading && <Loading />}
          {!error && !loading && <ContactList />}
        </div>
      </div>
    </>
  );
};

export default Contacts;
