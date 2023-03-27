import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from '../src/images/logo.png';

import 'react-slideshow-image/dist/styles.css'

import Slideshow from './components/slideshow';


// import slide_1 from '../src/images/slide_1.jpg'


const styles = {
  main: {
    width: "100%",
    height: "800px"
  },
  inputs: {
    flex: 1,
    height: '800px',
    paddingTop: '3rem',
    flexDirection: 'column',
    justifyContent: 'space-between', //space-around
    marginLeft: '8rem',
    borderRadius: '50px',
    background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
    boxShadow: 'inset 13px 13px 26px #d0d0d0, inset -13px -13px 26px #f0f0f0'
    
  },
  inputText: {
      padding: "10px"
  },
  a: {
    backgroundColor: 'yellow'
  },
  

};





function App() {
  return (
    <div className="App" style={styles.main}>
      <div>
        <section>
          <Slideshow/>
        </section>
        <section className="one-fourth" style={styles.a}>
          <img src={logo} />
        </section>
        
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          noValidate
          autoComplete="off"
          style={ styles.inputs }
          maxWidth="md"
        >
      <TextField id="outlined-basic" label="이름" variant="outlined" />
      <TextField id="outlined-basic" label="핸드폰 번호" variant="outlined" />
      <TextField id="outlined-basic" label="매장 상호명" variant="outlined" />
      <TextField id="outlined-basic" label="매장 주소" variant="outlined" />
      <TextField id="outlined-basic" label="인기매뉴" variant="outlined" />
      <TextField id="outlined-basic" label="인기매뉴 가격" variant="outlined" />
      
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 4, width: '55ch', marginTop: '6rem' },
        }}
        noValidate
        autoComplete="off"
      >
      <div>
       
      <TextField
          id="outlined-multiline-static"
          label="간단한 매장 소개"
          multiline              
          rows={4}
          defaultValue=""
      />
        </div>
    </Box>
      </div>
    </div>
  );
}

export default App;
