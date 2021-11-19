import React, { Dispatch, Fragment } from 'react';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import LocalStorage from '../../services/localStorageService';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    
    
  } from '@material-ui/core';
  
import Alert from "@material-ui/lab/Alert";
import Button from "@mui/material/Button";
import { validationSchema } from '../../validationSchema/validationSchema';
import {  useMutation, useQuery } from '@apollo/client';
import { userAddQuery, userListQuery, userUpdateQuery } from '../../graphqlQuery/usersQuery';
import {  Snackbar, SnackbarCloseReason } from '@mui/material';


const UserRegisterGraph :React.FC = ()=> {
  
  const { id } :any= useParams();
  const query=  useQuery(userListQuery,{onCompleted:(data)=>console.log(data)})
  const values = query && query.data && query.data.users ? query.data.users:[];
  const history = useHistory();
  let initialState : IUser = {
    id:0,
    fname:'',
    lname:'',
    email:'',
    phone:''
  }
  if((id != undefined || id != 0 ) && values && values.length ){
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
  const [open, setOpen] = React.useState(false);
  
  const handleClose = (event:any, reason:SnackbarCloseReason):void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [addUser] = useMutation(userAddQuery);
  const [updateUser,{data,error}] = useMutation(userUpdateQuery);
    if(error){
      console.log("getting error",error)
    }
  const UserForm  = useFormik({
      initialValues: initialState,
      validationSchema ,
      onSubmit: values1 => {
        if(id == undefined || id == 0){
          addUser({ variables: values1 });
          setOpen(true);
        }
        else {
          updateUser({ variables:values1 });
          setOpen(true);
        }
          history.push('/userListNew');
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
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" severity="success" >
          This is a success message!
        </Alert>
      </Snackbar>
        </Box>
      </Paper>
      
    </Fragment>
  );
}
export default UserRegisterGraph;