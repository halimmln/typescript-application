import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Col, Row, Table, Form, Button, Container } from 'react-bootstrap';
import LocalStorage from '../../services/localStorageService';
const AddUser = () => {
  
  const { id }:any = useParams();
  const history = useHistory();
  const LocalStorage1 =new LocalStorage();
  const values = LocalStorage1.getData('store');

  let initialState= {
    id:0,
    fname:'',
    lname:'',
    email:'',
    phone:''
  }
  if((id != undefined || id != null ) && values.length ){
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
  const [user, setUser] = React.useState(initialState);
  // const [values,setValues]= React.useState([]);
  const [fname, setFname] = React.useState();

  const [lname, setLname] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] =React.useState();
    //setValues(LocalStorage1.getData('store'));
   
  //alert(id);
  
  const handleSubmit = () => {
    
    if (user.id == undefined || user.id == null) {
      if (localStorage.getItem('store') == null) {
        user.id = 1;
      } else {
        user.id = values.length + 1;
      }
      values.push(user);
    } else {
      if (user.id != undefined || user.id == null) {
        let index = values.findIndex((i:any) => i.id == user.id);
        if(index != -1 ){
         
          
          values[index].fname = user.fname;
          values[index].lname =user.lname
          values[index].email = user.email
          values[index].phone = user.phone;
        
        }
      
      }
    }
    // //alert(JSON.stringify (this.values));
     //localStorage.setItem('store', JSON.stringify(this.values));
     LocalStorage1.setData('store',values);
     history.push('/userList');
  };
  const handleInputChange = (event:any) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUser({...user,
      [name]: value,
    });
  };
 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
      <div>
        <h2>Add User Page</h2>
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  value={user.fname}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label className="label">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  value={user.lname}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label className="label">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Group as={Col} controlId="formPhone">
                <Form.Label className="label">Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Group as={Col}>
                <Button variant="primary" type="button" onClick={handleSubmit}>
                  Next
                </Button>
              </Form.Group>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
};
export default AddUser;
