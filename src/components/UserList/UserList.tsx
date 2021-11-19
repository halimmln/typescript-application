import  { Dispatch, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table,TableBody,TableCell ,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';

import { deleteUser, getUser } from '../../redux/actionCreator';

const mapState = (state: userState) => ({
  userStates: state.userStates
}
) 

const UserList = (props:any) => {
  
  const dispatch :Dispatch<any> =useDispatch();
  const [count, setCount] = useState(0);
  const history = useHistory();
   //
  //console.log(props.location.pathname)
  useEffect(()=> {
    dispatch(getUser())
  },[])
  const values : IUser[] = props.userStates;
  const handleDeleteSubmit = (user:IUser) => {
    dispatch(deleteUser(user))
    setCount(prevCount => prevCount + 1)
  };
  const handleEditSubmit = (id:string) => {
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
export default connect(mapState) (UserList) ;