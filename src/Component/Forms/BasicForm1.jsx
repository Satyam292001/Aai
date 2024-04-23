import React,{useState } from 'react'
import './style.css'


function BasicForm() {
    const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");
  console.log(email)
  console.log(password);
  const [allEntry, setAllEntry]= useState([]);  

  const submitForm=(e)=>{
    e.preventDefault();
    const newEntry={ email:email,password: password};

    setAllEntry([...allEntry, newEntry]);
    console.log("allEntry Variable  Value :",allEntry);
  }
  return (
    <>  
     <div 
     >
        <div className="from-box login">
            <h2>Login</h2>
            <form action="#" onSubmit={submitForm}>
                <div className="input-box">
                    <span className="icon"> <ion-icon name="mail"></ion-icon> </span>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <label>Email</label> 
                </div>
                <div className="input-box">
                    <span className="icon"> <ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" value={password} onChange={(e)=>setEmail(e.target.value)} required/>
                    <label>Password</label>
                    
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>Remember me</label>
                    <a href="#"> Forgot Password?</a>
                </div>
                <button  type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account? <a href="#" className="register-link"> Register</a></p>
                </div>
            </form>S
        </div>
     </div>
    </>
  )
}

export default BasicForm
