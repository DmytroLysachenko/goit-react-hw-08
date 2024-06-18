import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import s from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentContact } from '../../redux/contacts/selectors';

import { RxCross2 } from 'react-icons/rx';
import { editContactThunk } from '../../redux/contacts/operations';
import { addCurrentContact } from '../../redux/contacts/slice';

const initialValues = { name: '', number: '' };
const reg = /^\d{3}-?\d{2}-?\d{2}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required!')
    .min(3, 'Min 3 characters!')
    .max(50, 'Too long!'),
  number: Yup.string()
    .required('Required!')
    .matches(reg, 'Should be in "123-45-67" format'),
});

export const EditForm = () => {
  const contact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(editContactThunk({ ...values, id: contact.id }));
    actions.resetForm();
  };

  return (
    <>
      <div className={s.formWrapper}>
        <button
          className={s.closeBtn}
          onClick={() => {
            dispatch(addCurrentContact(null));
          }}
        >
          <RxCross2 />
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <label
              htmlFor={nameId}
              className={s.label}
            >
              Name:
              <Field
                type="text"
                name="name"
                id={nameId}
                className={s.input}
                placeholder="John Johnson"
              ></Field>
              <ErrorMessage
                name="name"
                component="span"
                className={s.error}
              />
            </label>
            <label
              htmlFor={numberId}
              className={s.label}
            >
              Number:
              <Field
                type="tel"
                name="number"
                id={numberId}
                className={s.input}
                placeholder="123-45-67"
              ></Field>
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <button
              type="submit"
              className={s.button}
            >
              Save
            </button>
          </Form>
        </Formik>
      </div>
      <div className={s.backdrop}></div>
    </>
  );
};
