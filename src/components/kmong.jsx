import km_1 from '../images/km_1.png';
import km_2 from '../images/km_2.png';
import km_3 from '../images/km_3.png';
import km_4 from '../images/km_4.png';

const styles = {
  main: {
    width: '75%',
    height: 'auto',
    marginTop: '2rem'
  },
  h2: {
    backgroundColor: 'black',
    color: '#03fc35',
    width: '45%',
    marginLeft: '20rem',
    height: '3rem',
    lineHeight: '3rem'
  }
};
function KmongImages() {
  
  return (
    <div>
      <img src={ km_4 } alt="km_4" style={ styles.main } />;
      <h2 style={ styles.h2 }>이렇게 비싼 광하시려고요?</h2>
      
      <img src={ km_2 } alt="km_2" style={ styles.main } />;
      <h2 style={ styles.h2 }>효과는 진짜 있을까요?</h2>
      
      <img src={ km_3 } alt="km_3" style={ styles.main } />;
      <h2 style={styles.h2}>관리는 잘 될까요?</h2>
      
      <img src={ km_1 } alt="km_1" style={ styles.main } />;
      <h2 style={styles.h2}>저렴하고 강력한 광고로 매출 올리세요.</h2>
    </div>
  )
};

export default KmongImages;

