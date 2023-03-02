import { useState } from 'react';

const useMultiPartForm = (callback) => {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(
    {
      experience: [
        {
          employer: '',
          jobTitle: '',
          startDate: '',
          endDate: '',
          currentlyWorkHere: false,
          description: '',
        }
      ],
      education: [
        {
          institution: '',
          degree: '',
          startDate: '',
          endDate: '',
        }
      ],
    }
  );

  const validate = (event, name, value) => { }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  }

  const addExperienceFields = (event) => {
    event.preventDefault();

    const newfield = {
      employer: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      currentlyWorkHere: '',
      description: '',
    };

    setValues({
      ...values,
      experience: [...values.experience, newfield]
    })
  }

  const addEducationFields = (event) => {
    event.preventDefault();

    const newfield = {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    };

    setValues({
      ...values,
      education: [...values.education, newfield]
    })
  }

  const removeExperienceFields = (idx, event) => {
    event.preventDefault();

    const data = [...values.experience];
    data.splice(idx, 1);

    setValues({
      ...values,
      experience: [...data]
    });
  }

  const removeEducationFields = (idx, event) => {
    event.preventDefault();

    const data = [...values.education];
    data.splice(idx, 1);

    setValues({
      ...values,
      education: [...data]
    });
  }

  const handleChange = (event, idx = null, type = null) => {
    
    const { name, value } = event.target;

    if (idx != null && type != null) {
      const data = [...values[type]];
      data[idx][name] = value;
      if (type === 'education') {
        setValues({
          ...values,
          education: [...data]
        });
      }
      if (type === 'experience') {
        setValues({
          ...values,
          experience: [...data]
        });
      }
    } else {
      validate(event, name, value);
      setValues({ ...values, [name]: value });
    }
  }

  return {
    values,
    setValues,
    errors,
    handleSubmit,
    handleChange,
    addExperienceFields,
    addEducationFields,
    removeExperienceFields,
    removeEducationFields,
  }
}

export default useMultiPartForm;
