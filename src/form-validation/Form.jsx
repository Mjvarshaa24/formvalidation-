import React, { useState } from 'react'
import './Style.css'

const Form = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[confirm,setConfirm]=useState("");

    const[error,setError]=useState("");
    const[success,setSuccess]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        let errors={};
        const namePattern = /^[A-Za-z]{1,}(?:\s[A-Za-z]+)*$/;
        if(name.trim()==="")
        {
            errors.name="Name is required";
        }
        else if(!namePattern.test(name)){
            errors.name="Name should contain only letters";
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(email.trim()===""){
            errors.email="Email is required";
        }
        else if(!emailPattern.test(email)){
            errors.email="Enter a valid email";
        }
       
        if(pass ===""){
            errors.pass="Password is Required";
        }
        else if(pass.length<8)
        {
            errors.pass="Password must be at least 8 characters'";
        }
        if(confirm ===""){
            errors.confirm="Confirm your password";
        }
        else if(pass!==confirm){
            errors.confirm="Password doesn't match";
        }
        setError(errors)
        if(Object.keys(errors).length===0){
            alert("Registered Successfully");
            console.log("Name:",name);
            console.log("Email:",email);
            console.log("Password:",pass);
            console.log("Confirm password",confirm);
        }
        else{
            console.log("Enter a valid details")
            setSuccess("");
        }
    }

    return (
        <>

            <div className="contain">
                <div className="card">
                    <h2>Registration Form</h2>
                </div>
                <form className="forms" onSubmit={handleSubmit}>
                    <div className="group">
                        <label>Name</label>
                        <br></br>
                        <input type='text' name="name" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <p className="error">{error.name}</p>
                    </div>
                    <div className="group">
                        <label>Email</label>
                        <br></br>
                        <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <p className="error">{error.email}</p>
                    </div>
                    <div className="group">
                        <label>Password</label>
                        <br></br>
                        <input type="password" name="pass" placeholder="Enter your password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                        <p className="error">{error.pass}</p>
                    </div>
                    <div className="group">
                        <label>Confirm Password</label>
                        <br></br>
                        <input type="password" name="confirm" placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
                        <p className="error">{error.confirm}</p>
                    </div>
                    <br></br>
                    <div className="btn">
                        <button type="submit">Register</button>
                    </div>
                        <p>{success}</p>
                   
                </form>
            </div>  

        </>
    )
}

export default Form