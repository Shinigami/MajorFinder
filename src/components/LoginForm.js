import React, {useState} from 'react'

function LoginForm({LoginUser,error}) {
    
    const[details,setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        LoginUser(details);
    }
    
    
    let errorMessage;
    if (error != "") {
        errorMessage = <div className="error">{error}</div>
    }
    else {
        errorMessage = "";
    }
  return (

    <form onSubmit = {submitHandler}>
        <div className="login-form-inner">
        <h1>Hello MajorFinders. Login to get started! </h1>
            {/*Error!*/}
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type = "text" name="name" id = "name" onChange={e=> setDetails({...details,name: e.target.value})} value={details.name}/>
            </div>
            <div className = "form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id = "email" onChange={e=> setDetails({...details,email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type = "password" name = "password" id = "password" onChange={e=> setDetails({...details,password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="Login"/>    <input type = "sign-up" value = "Sign up"/>
            
        </div>
    </form>
  )
}

export default LoginForm