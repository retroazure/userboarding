import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {

  const initialFormValues = {
    username:'',
    email:'',
    password:'',
    tos: false,
  }

  const initialFormErrors = {
    username:'',
    email:'',
    password:'',
  }

  const userData = {
    username:'',
    email:'',
    password:'',
    tos: false,
  }

  const [userMember, setUser] = useState('userData');

  const [formValue, setForm] = useState('initialFormValues');

  const onSubmit = evt => {

  }

  const onInput = evt => {
    
  }


  return (
    <div className="App">
      <Form values={userMember} onSubmit={onSubmit} onInput={onInput}/>
    </div>
  );
}

export default App;
