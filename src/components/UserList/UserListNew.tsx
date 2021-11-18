import { useHistory } from 'react-router-dom';
import { Table,TableBody,TableCell ,TableContainer,TableHead,TableRow,Paper} from '@mui/material';

import { useQuery,gql, useMutation } from "@apollo/client";
import { userdeleteQuery ,userListQuery } from '../../graphqlQuery/usersQuery';

  

const UserList = (  ) => {
  
    const [deleteUser, { data, loading, error }] = useMutation(userdeleteQuery);
    const query=  useQuery(userListQuery,{onCompleted:(data)=>console.log(data)})
    const values = query && query.data && query.data.users ? query.data.users:[];
    const history = useHistory();
    const handleDeleteSubmit = (user:IUser) => {
        deleteUser({ variables: user });
    };
    const handleEditSubmit = (id:string) => {
    history.push(`/userFormGraphql/${id}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
    <div >
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
export default UserList;