import { useSelector } from 'react-redux';
import { AuthNav } from '../components/AuthNav/AuthNav';
import { Navigation } from '../components/Navigation/Navigation';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import s from './AppBar.module.css';
export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
