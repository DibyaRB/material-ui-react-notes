import React, { useState } from 'react';
import styled from 'styled-components'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography'
import { Button, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@mui/material';

const CreateStyles = styled.div`
    .field{
      margin-top:  20px;
      margin-bottom: 20px;
      display: block;
    }
`;

// const useStyles = makeStyles({

// // btn:{
// //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// //   border: 0,
// //   borderRadius: 3,
// //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
// //   color: 'white',
// //   height: 48,
// //   padding: '0 30px',
// //   fontSize: 100
// // },
// // title:{
// //   textDecoration: 'underline',
// //   marginBottom: 20
// // }

//   field : {
//     marginTop: '20px',
//     marginBottom: '20px',
//     display: 'block'
//   }


// });


export default function Create() {


  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError]= useState(false);
  const [detailsError, setDetailsError]= useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if(title===''){
      setTitleError(true);
    }
    if(details===''){
      setDetailsError(true);
    }
    if (title && details) {
      console.log(title, details);
    }
  }



  return (

    <CreateStyles>


      <Container>


        <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
          Create a New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField onChange={(e) => {
            setTitle(e.target.value);
          }} className="field" label="Note Title" variant="outlined" fullWidth required error={titleError}/>


          <TextField className="field"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            label="Details" variant="outlined" fullWidth required multiline rows="4" error={detailsError}/>
          <Button

            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            error={detailsError}
          >
            Submit
          </Button>
        </form>



      </Container>

    </CreateStyles>

  )
}
