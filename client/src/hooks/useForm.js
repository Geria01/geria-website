import { useState } from 'react';
import { omit } from 'lodash';

const useForm = (callback) => {
  const fields = [
    {
      "label": "First name",
      "value": "firstname"
    },
    {
      "label": "Last name",
      "value": "lastname"
    },
    {
      "label": "Email",
      "value": "email"
    },
    {
      "label": "Residential address",
      "value": "address"
    },
    {
      "label": "Phone",
      "value": "phone"
    },
    {
      "label": "Password",
      "value": "password"
    },
    {
      "label": "Gender",
      "value": "gender"
    },
    {
      "label": "Date of birth",
      "value": "dob"
    }
  ];

  //Form values
  const [values, setValues] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {

    //A function to validate each input values
    switch (name) {
      case 'firstname':
        if (!value) {
          setErrors({
            ...errors,
            firstname: 'First name is required'
          });
        } else if (value && value.length <= 2) {
          setErrors({
            ...errors,
            firstname: 'First name should atleast have 2 letters'
          });
        } else {
          let newObj = omit(errors, "firstname");
          setErrors(newObj);
        }
        break;

      case 'lastname':
        if (!value) {
          setErrors({
            ...errors,
            lastname: 'Last name is required'
          });
        } else if (value.length <= 2) {
          setErrors({
            ...errors,
            lastname: 'First name should be atleast have 2 letters'
          });
        } else {
          let newObj = omit(errors, "lastname");
          setErrors(newObj);
        }
        break;

      case 'email':
        if (!value) {
          setErrors({
            ...errors,
            email: 'Email is required'
          });
        } else if (
          !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
        ) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address'
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case 'address':
        if (!value) {
          setErrors({
            ...errors,
            address: 'Address is required'
          });
        } else {
          let newObj = omit(errors, "address");
          setErrors(newObj);
        }
        break;

      case 'password':
        if (!value) {
          setErrors({
            ...errors,
            password: 'Password is required'
          });
        } else
          if (
            !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
          ) {
            setErrors({
              ...errors,
              password: 'Password should have atleast 8 characters, 1 uppercase, 1 lowercase character and numbers'
            })
          } else {
            let newObj = omit(errors, "password");
            setErrors(newObj);
          }
        break;

      default:
        break;
    }
  }

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    validate(event, name, value);
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      const errors = {};
      for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        const value = [field.value];
        errors[field.value] = `${field.label} is required.`;
      }
      setErrors({ ...errors });
    }
  }

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm;
