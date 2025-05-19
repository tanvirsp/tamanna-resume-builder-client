
import { useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/profileSlice';
import { useNavigate } from 'react-router-dom';




const CategoryPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    
   const handleCategoryID =(id)=>{
    //adding Profession value to local storage
    localStorage.setItem("professionID", id )

    dispatch(updateProfile({ professionID: id }));
    navigate('/profile')
   }


  return (
    <section style={{backgroundColor: "#ffffff40", padding: "45px", borderRadius: "20px"}}>
      
        <h3 style={{textAlign:"center", fontSize:"36px", fontWeight: "400", marginBottom: "20px", padding: "20px"}}>Choose A Profession</h3>
    
      <Grid container spacing={2}>
      <Grid item xs={6}>
         <Paper elevation={3}  sx={{
            p: 2,
            textAlign: 'center',
            padding: '40px',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#EBCA37',
            },
          }}>
          <Typography variant="h6" onClick={()=>handleCategoryID('1')}>Doctor</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3}  sx={{
            p: 2,
            textAlign: 'center',
            transition: '0.3s',
            padding: '40px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#EBCA37',
            },
          }}>
          <Typography variant="h6" onClick={()=>handleCategoryID('2')}>IT Expert</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
         <Paper elevation={3}  sx={{
            p: 2,
            textAlign: 'center',
            padding: '40px',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#EBCA37',
            },
          }}>
          <Typography variant="h6" onClick={()=>handleCategoryID('3')}>Teacher</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
       <Paper elevation={3}  sx={{
            p: 2,
            textAlign: 'center',
            padding: '40px',
            transition: '0.3s',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#EBCA37',
            },
          }}>
          <Typography variant="h6" onClick={()=>handleCategoryID('4')}>Freelancer</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}  sx={{
            p: 2,
            textAlign: 'center',
            transition: '0.3s',
            padding: '40px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#EBCA37',
            },
          }}>
          <Typography variant="h6" onClick={()=>handleCategoryID('5')}>Others</Typography>
        </Paper>
      </Grid>
    </Grid>
   
    </section>
    
  )
}

export default CategoryPage