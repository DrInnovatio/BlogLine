import React from 'react';

const styles = {
  main: {
    width: '100%',
    height: '10rem',
    background: 'gray',    
    marginTop: '8rem'
  }
}

function Footer() {
  return (
    <footer style={styles.main}>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
}

export default Footer;