import { gql } from "@apollo/client";

export  const userListQuery = gql`
  query users{
      users {
        id
        fname
        lname
        email
        phone
      }
    }
  `;

  
export const userAddQuery = gql`
mutation AddUser($fname: String, $lname: String, $email: String, $phone: Int) {
  addUser(fname: $fname, lname: $lname, email: $email, phone: $phone) {
    fname
    lname
    email
    phone
  }
}
`;

export const userUpdateQuery = gql`
mutation UpdateUser($id:ID ,$fname: String, $lname: String, $email: String, $phone: Int) {
  updateUser(id:$id,fname: $fname, lname: $lname, email: $email, phone: $phone) {
    id
    fname
    lname
    email
    phone
  }
}
`;
export const userdeleteQuery = gql`
mutation DeleteUser($id: ID) {
    deleteUser(id: $id) {
      id
    }
  }
`;