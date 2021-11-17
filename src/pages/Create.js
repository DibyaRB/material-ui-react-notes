import React from 'react';
import Typography from '@mui/material/Typography'
import {Button,Container} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Create() {
  return (
   

      <Container>

     
        <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
          Create a New Note
        </Typography>

        <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon/>}
 
        >
          Submit
        </Button>
   
        </Container>
  
  )
}
