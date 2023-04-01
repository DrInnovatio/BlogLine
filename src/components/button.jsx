import * as React from 'react';
import Button from '@mui/material/Button';
import { getDocs, collection, addDoc } from 'firebase/firestore';

const submit = async () => {
    await addDoc()
};

export default function SubmitButton() {
  return (
    <Button onClick={ submit }  variant="contained" style={{width: '15rem'}}>
      제출
    </Button>
  );
}