
import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


    export const validationSchema = Yup.object().shape({
        fname: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lname: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        phone:Yup.string().required().matches(phoneRegExp,"Enter valid phone number"),
      })