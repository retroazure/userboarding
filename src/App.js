import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import formSchema from './validation/formSchema';

const initialFormValues = {
  name:'',
  email:'',
  password:'',
  tos: false,
}

const initialFormErrors = {
  name:'',
  email:'',
  password:'',
  tos: false,
}

const initialUser = []; 
const initialDisabled = true;



function App() {

  const [users, setUsers] = useState(initialUser);
  const [formValue, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get("https://reqres.in/api/users").then((response)=>{
      console.log(response.data.data);
      setUsers(response.data.data);
    }).catch(()=>{
      console.log("An error has occurred.");
    })
  }

  const postUsers = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
    .then(res=> {
      setUsers([...users,res.data.data]);
      console.log(res.data.data);
    })
    .catch(err => {
      console.log("An error occurred.");
    })
    .finally(()=>
    {
      setFormValues(initialFormValues);
    }
    )
  }

  const onInput = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormValues({
      ...formValue,
      [name]: value
    })
  }

  const onCheckBoxChange = evt => {
    const { name } = evt.target;

    const { checked } = evt.target;
  }

  const onSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      name : formValue.name,
      email: formValue.email,
      password: formValue.password,
      tos: formValue.tos,
    }
    
    postUsers(newUser);
  }  

  useEffect(()=>{
    getUsers();
    
  }, []);

  useEffect(()=>{
   formSchema.isValid(formValue)
   .then(valid => {
     setDisabled(!valid);
   })
  }, [formValue]);

  return (
    <div className="App">
      <Form 
      values={formValue} 
      onSubmit={onSubmit} 
      onInput={onInput}
      errors={formErrors}
      disabled={disabled}
      onCheckBoxChange={onCheckBoxChange}
      />
    </div>
  );
}

export default App;
