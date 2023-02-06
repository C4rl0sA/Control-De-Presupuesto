import PropTypes from 'prop-types';

export const Error = ({ mensaje }) => {
  return <p className='alert alert-warning error'>{mensaje}</p>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
