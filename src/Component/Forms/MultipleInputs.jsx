import React,{useState} from 'react'

function MultipleInputs() {
  
  const [userRegistration, setUserRegistration]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  });


  const [records, setRecords]=useState([]);
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);

    setUserRegistration({...userRegistration, [name]:value });
  }
  const  handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={...userRegistration ,id: new Date().getTime().toString() }
    console.log(newRecord);
    setRecords([...records, newRecord]);
    console.log(records); 
    setUserRegistration({ username:"", email:"", Phone:"", password:""});
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <lable htmlFor="username">FullName </lable>
            <input type="text" autoComplete='off' value={userRegistration.username} onChange={handleInput} name="username" id="username" placeholder="Enter UserName" required/>
          </div>
      
          <div>
            <lable htmlFor="username">Email</lable>
            <input type="text" autoComplete='off'   value={userRegistration.email} onChange={handleInput} name="email" id="email" placeholder="Enter Email"  required />
          </div>
      
          <div>
            <lable htmlFor="username">Phone</lable>
            <input type="Number"  autoComplete='off' value={userRegistration.phone}  onChange={handleInput} name="phone" id="phone" placeholder="Enter Phone Number" required />
          </div>
      
          <div>
            <lable htmlFor="username">Password</lable> 
            <input type="password" autoComplete='off' value={userRegistration.password} onChange={handleInput} name="password" id="password " placeholder="Enter Password" required />
          </div>
          <button type="submit">Registration</button>
        </form>
        <div>
          {
            records.map((curElem)=>{
              const {id, username, email,phone , password}= curElem;
              return(
                <div className='showDateStyle' key={curElem.id}>
                  <p>{username} </p>
                  <p>{email} </p>
                  <p>{phone} </p>
                  <p>{password} </p>
                </div>
              );
            })
          }

        </div>
      </div>
    </>
    
  );
}

export default MultipleInputs;
