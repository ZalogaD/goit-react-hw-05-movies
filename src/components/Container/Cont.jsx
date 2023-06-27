import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cont = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

Cont.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Cont;
