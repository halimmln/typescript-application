import React, { Dispatch, Fragment } from 'react';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import LocalStorage from '../../services/localStorageService';
import IStateInterface from "../../interfaces/IStateInterface";
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    
  } from '@material-ui/core';
  
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../redux/actionCreator';
import { validationSchema } from '../../validationSchema/validationSchema';
const UserRegister :React.FC<{}> = ()=> {
  const { id } :any= useParams();
 
  const LocalStorage1 =new LocalStorage();
  const values = LocalStorage1.getData('store').userStates;
  const history = useHistory();
  const dispatch :Dispatch<any> =useDispatch();
  let initialState : IUser = {
    id:0,
    fname:'',
    lname:'',
    email:'',
    phone:''
  }
  if((id != 0 || id != 0 ) && values && values.length ){
    let index = values.findIndex((i:any) => i.id == id);
    if(index != -1 ){
      initialState ={
      id:id,
      fname:values[index].fname,
      lname:values[index].lname,
      email:values[index].email,
      phone:values[index].phone
    }
   
  }
  }
  
const UserForm  = useFormik({
    initialValues: initialState,
    validationSchema ,
    onSubmit: values1 => {
      if(values1.id == 0)
       dispatch(addUser(values1))
       else 
       dispatch(updateUser(values1))
       history.push('/userList');
      },

});

return (
    <Fragment >
      
      <Paper  >
        <Box  sx={{ p: 2, border: '1px solid grey' }} width={600} height={500} >
          <Typography >
            User Registration Form
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fname"
                name="fname"
                label="First Name"
                fullWidth
                margin="dense"
                onChange={UserForm.handleChange}
                value={UserForm.values.fname}
               
              />
              <Typography variant="inherit" color="textSecondary">
               {UserForm.errors.fname ? <div>{UserForm.errors.fname}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lname"
                name="lname"
                label="Last Name"
                fullWidth
                margin="dense"
                onChange={UserForm.handleChange}
                value={UserForm.values.lname}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.lname ? <div>{UserForm.errors.lname}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                margin="dense"
                onChange={UserForm.handleChange}
                value={UserForm.values.email}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.email ? <div>{UserForm.errors.email}</div> : null}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                fullWidth
                margin="dense"
                onChange={UserForm.handleChange}
                value={UserForm.values.phone}
              />
              <Typography variant="inherit" color="textSecondary">
              {UserForm.errors.phone ? <div>{UserForm.errors.phone}</div> : null}
              </Typography>
            </Grid>
            
          </Grid>

          <Box mt={3}>
            <Button variant="contained" 
            onClick={ () => UserForm.handleSubmit()}
            >
              {UserForm.values.id ? 'Update':'Add User'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
}
export default UserRegister;