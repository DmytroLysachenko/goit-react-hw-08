import { Field, Form, Formik } from 'formik';
import s from './RefForm.module.css';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
export const RegForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(registerThunk({ name, email, password }));
    actions.resetForm(initialValues);
  };
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Registration Form</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            className={s.input}
            required
            placeholder="John Johnson"
            id="outlined-basic"
          />
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            type="email"
            placeholder="example@mail.com"
            className={s.input}
            required
          />
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            type="password"
            placeholder="password"
            className={s.input}
            required
          />
          <Link
            className={s.link}
            to="/login"
          >
            Already have account?
          </Link>
          <button
            type="submit"
            className={s.button}
          >
            Register!
          </button>
        </Form>
      </Formik>
    </div>
  );
};
