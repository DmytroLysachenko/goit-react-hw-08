import { Field, Form, Formik } from 'formik';
import s from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = ({ email, password }, actions) => {
    dispatch(logIn({ email, password }));
    actions.resetForm(initialValues);
  };
  return (
    <>
      <h3 className={s.title}>Login Form</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            type="email"
            className={s.input}
            required
          />
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            type="password"
            className={s.input}
            required
          />
          <button
            type="submit"
            className={s.button}
          >
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
