import s from './NotFound.module.css';
import img from './notfound.png';
export const NotFound = () => {
  return (
    <div className={s.div}>
      <img
        src={img}
        alt="Not Found"
      />
    </div>
  );
};
