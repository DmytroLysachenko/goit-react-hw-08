import { FaHouse } from 'react-icons/fa6';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.div}>
      <h3 className={s.title}>Welcome Home!</h3>
      <FaHouse
        className={s.icon}
        color="coral"
      />
    </div>
  );
};

export default Home;
