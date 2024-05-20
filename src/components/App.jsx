import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Layout } from './Layout/Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegForm } from './RegForm/RegForm';
import { Contacts } from '../pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/register"
          element={<RegForm />}
        />
        <Route
          path="/login"
          element={<LoginForm />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
      </Routes>
    </Layout>
  );
};
