import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import { GiNotebook } from 'react-icons/gi';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const buildLinkClassLogo = ({ isActive }) => {
    return clsx(s.logo, isActive && s.active);
  };
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            className={buildLinkClassLogo}
            to="/"
          >
            <GiNotebook
              color="white"
              className={s.svg}
            />
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              className={buildLinkClass}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
