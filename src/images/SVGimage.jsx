import icons from './icons.svg';
import css from './SVGimage.module.css';

const SVGimage = ({ name }) => {
  return (
    <svg className={css.Icon}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export { SVGimage };
