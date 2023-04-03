import * as React from 'react';
import Box from '@mui/material/Box';
import Logo from './components/logo';
import Slideshow from './components/slideshow';

import BasicTextFields from '../src/components/form';
import Footer from './components/footer';
import 'react-slideshow-image/dist/styles.css'
import './App.css'; 


// import slide_1 from '../src/images/slide_1.jpg'


const styles = {
  main: {
    width: '70%',
    height: 'auto',
    alignText: 'center',
    backgroundColor: 'green',
    margin: '3rem auto'
  },
  // inputs: {

  inputText: {
      padding: "10px"
  },
  a: {
    width: '50%',
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
        
      
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '60ch' },
          }}
          noValidate
          autoComplete="off"
          style={ styles.inputs }
          maxWidth="md"
        >

            <BasicTextFields />
          
        </Box>
       
 
      
       <Footer/>
      
      </div>
   
      </div>
    
  );
}

export default App;
