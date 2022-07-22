import React from 'react';

function Title({ children }) {
  return <div style={styles}>{children}</div>;
}

const styles = {
  fontSize: '2rem',
  fontWeight: 700,
  color: 'red',
  marginBottom: 24,
  width: '100%',
  textAlign: "center",
};

export default Title;
