import React,{useState} from 'react'
// import "./Style1.css"

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
    <div className="wraper" >
        <form action="" onSubmit={submitForm} >
            <div className='input-box'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete='off'  value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="input-box">
                <label htmlFor="email">Password</label>
                <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button type="submit" className='btn'>Login</button>
        </form>    
        
        </div> 
        <div>
          { 
            allEntry.map((curElem)=>{

              return(
                <div className="showDataStyle">
                  <p>{curElem.email}</p>
                  <p>{curElem.password}</p>

                </div>
              )
            })
          }
        </div>       
    </>
  )
}

export default BasicForm;
