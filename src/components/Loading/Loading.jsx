import { Circles } from 'react-loader-spinner';
import s from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={s.div}>
      <Circles
        height="80"
        width="80"
        color="aqua"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};
