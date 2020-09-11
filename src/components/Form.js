import React from 'react';

export default function Form(props){
    const {onInput, onSubmit, values} = props;

    return(
             
            <form>

                <div className="container">
            
                <label>Name: 
                    <input className="name-input"
                    type="text"
                    name = "name"
                    value={values.name}
                    maxLength="20"
                    />        
                </label>
           
    
       
                <label>Email: 
                    <input className="email-input"
                    type="text"
                    name = "email"
                    value={values.email}
                    maxLength="20"
                    />        
                </label>
    
                
           
                <label>Password: 
                    <input className="password-input"
                    type="password"
                    name = "password"
                    value={values.password}
                    />        
                </label>
               
                
            
                <label>Terms of Service
                    <input className="tos-input"
                    type="checkbox"
                    name="tos"
                    value={values.tos}/>
                </label>

        
                    <button onClick={onSubmit}>Submit</button>
                </div>
            
            </form>

    )
}