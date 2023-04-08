import React from 'react';


const styles = {
  main: {
    width: '50rem',
    height: '15rem',
    background: '#6f82a1',    
    marginTop: '5rem',
    marginLeft: '10.5rem',
    position: 'static'
  },
  li_a: {
    width: '30rem',
    height: '5rem',
    margin: '1rem auto',
    listStyleType: 'none',
    textAlign: 'right'
  },
  li_b: {
    width: '10rem',
    height: '5rem',
    margin: '1rem auto',
    listStyleType: 'none',
    lineHeight: '8rem'
    
  },
  ul: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  logoFont: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: '3rem',
    color: '#ffec5e',
  }
}

function Footer() {
  return (
    <footer style={styles.main}>
      
      <ul style={styles.ul}>
        <li style={styles.li_b}>
          <p style={styles.logoFont}>Mad_AD</p>
        </li>

        <li style={styles.li_a}>
          <p>보라 글로벌 트레이딩</p>
          <p>주소: 서울 서대문구 증가로25길 33 에덴소호</p>
          <p>Email: borabora8621@gmail.com</p>
          <p>대표: 정보라</p>
          <p>사업자 등록번호: 248-17-01671</p>
          <p>&copy; Since 2021 Bora Global Trading ALL RIGHTS RESERVED.</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;