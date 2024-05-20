import { FaHouse } from 'react-icons/fa6';
import s from './Home.module.css';

export const Home = () => {
  return (
    <div className={s.div}>
      <FaHouse className={s.icon} />
      <h3 className={s.title}>Home page</h3>
    </div>
  );
};
