import s from './Home.module.css';
import { GiNotebook } from 'react-icons/gi';
const Home = () => {
  return (
    <div className={s.div}>
      <div className={s.content_wrapper}>
        <GiNotebook
          color="gray"
          className={s.svg}
        />
        <div className={s.text_wrapper}>
          <h1 className={s.title}>Phonebook</h1>
          <p className={s.text}>
            With our phonebook app, you can keep all your phone numbers in one
            place. Add and find contacts quickly and easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
