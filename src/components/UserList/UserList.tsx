import React, { Dispatch, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LocalStorage from '../../services/localStorageService';
import { Table,TableBody,TableCell ,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { deleteUser, getUser } from '../../redux/actionCreator';
const mapStateToProps = (state: userState) => ({
    userStates:(state: userState) => state.userStates,
});

const UserList = () => {
 
  const dispatch :Dispatch<any> =useDispatch();
 const [count, setCount] = useState(0);
  const history = useHistory();
  dispatch(getUser());
 const values : IUser[] = useSelector((state:userState) => state.userStates,shallowEqual)
  const handleDeleteSubmit = (user:IUser) => {
    console.log(user);
   dispatch(deleteUser(user))
    setCount(prevCount => prevCount + 1)
  };
  const handleEditSubmit = (id:string) => {
    
    console.log(id);
    history.push(`/userForm/${id}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {values && values.map((row:any,i:number) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                <input
                      type="button"
                      value="Edit"
                      name={row.id}
                      onClick={() => handleEditSubmit(row.id)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      name={row.id}
                      onClick={() => handleDeleteSubmit(row)}
                    /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  ); 
 }
export default  UserList ;