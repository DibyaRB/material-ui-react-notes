import React from 'react';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography'
import {Button,Container} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const useStyles = makeStyles({

// btn:{
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
//   fontSize: 100
// },
// title:{
//   textDecoration: 'underline',
//   marginBottom: 20
// }


});


export default function Create() {

  const classes= useStyles();

  return (
   

      <Container>

     
        <Typography variant="h6"  component="h2" color="textSecondary" gutterBottom>
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
