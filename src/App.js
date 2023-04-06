import * as React from 'react';
import Box from '@mui/material/Box';
//import Logo from './components/logo';
import Slideshow from './components/slideshow';
import BasicTextFields from '../src/components/form';
import Footer from './components/footer';
import KmongImages from './components/kmong';
import 'react-slideshow-image/dist/styles.css'
import './App.css'; 


// import slide_1 from '../src/images/slide_1.jpg'


const styles = {
  main: {
    width: '75%',
    height: 'auto',
    alignText: 'center',
    margin: '2rem auto',
    backgroundColor:'green'
  },
  // inputs: {

  inputText: {
      padding: "1rem"
  },
  
};

function App() {
  return (
    <div className="App" style={styles.main}>

        <section>
            <Slideshow/>
        </section>
        
        <section>
            <KmongImages/>
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
    
  );
}

export default App;
