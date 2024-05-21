import { useDispatch, useSelector } from 'react-redux';
import { closeConfirmModal } from '../../redux/contacts/contactsSlice';
import { RxCross2 } from 'react-icons/rx';
import s from './ConfirmModal.module.css';
import toast from 'react-hot-toast';
import { deleteContactThunk } from '../../redux/contacts/contactsOps';
import { selectConfirmModal } from '../../redux/contacts/selectors';
export const ConfirmModal = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectConfirmModal);
  return (
    <>
      <div className={s.wrapper}>
        <button
          className={s.closeBtn}
          onClick={() => {
            dispatch(closeConfirmModal());
          }}
        >
          <RxCross2 />
        </button>
        <h2 className={s.title}>Are you sure about that?</h2>
        <button
          className={s.button}
          onClick={() => {
            dispatch(deleteContactThunk(id));
            toast.success('Successfully deleted!');
            dispatch(closeConfirmModal());
          }}
        >
          Confirm
        </button>
      </div>
      <div className={s.backdrop}></div>
    </>
  );
};
