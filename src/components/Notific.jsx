import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h3 style={{ color: 'red' }}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
