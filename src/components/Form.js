import React from 'react';

export default function Form(props){
    const { onInput, onSubmit, values, disabled, errors, onCheckboxChange} = props;

    return(
             
            <form onSubmit={onSubmit}>

                <div className="container">
            
                <label>Name: 
                    <input className="name-input"
                    type="text"
                    name = "name"
                    value={values.name}
                    maxLength="20"
                    onChange={onInput}
                    />        
                </label>
           
    
       
                <label>Email: 
                    <input className="email-input"
                    type="text"
                    name = "email"
                    value={values.email}
                    maxLength="20"
                    onChange={onInput}
                    />        
                </label>
    
                
           
                <label>Password: 
                    <input className="password-input"
                    type="password"
                    name = "password"
                    value={values.password}
                    onChange={onInput}
                    />        
                </label>
               
                
            
                <label>Terms of Service
                    <input className="tos-input"
                    type="checkbox"
                    name="tos"
                    value={values.tos}
                    onChange = {onCheckboxChange}/>
                </label>

                    <button disabled={disabled} onClick={onSubmit}>Submit</button>
                
                </div>

                <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
                </div>
            
            </form>

    )
}