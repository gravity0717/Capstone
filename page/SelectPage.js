import React,{useState} from 'react'
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import UploadButtons from '../components/UploadButtons';
import UploadPage from './UploadPage';
function SelectPage() {
  const [comp,setComp]=useState('');
  return (
    <Grid container direction="column-reverse" spacing={2} justifyContent="center" alignContent="center">
      <UploadButtons/>
      <Link to='/UploadPage'>
        <Button size='large' variant='contained' color="primary" onClick={()=>setComp(UploadPage)}>Next</Button>
      </Link>
    </Grid>
  )
}

export default SelectPage