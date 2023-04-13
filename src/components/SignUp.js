import React,{useState,useEffect} from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom';
 
function SignUp() {
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [aadharNo,setAadharNo] = useState('');
const[address,setAddress] = useState('')   
const [mobile,setMobile] = useState('');
const [password,setPassword] = useState('')

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(mobile,password)
    fetch("http://interview.wpos.live/api/user/register",
    {method:"POST",
    body:JSON.stringify({
        mobile_no:mobile,
        password:password,
        first_name:firstName,
        last_name:lastName,
        aadhar_no:aadharNo,
        address:address,

    })})
    .then(res=>res.json())
    .then(data=>console.log(data))

    setMobile("");
    setPassword("");
    setAadharNo("");
    setAddress("");
    setFirstName("");
    setLastName("");
}
  return (
    <div className='bg-secondary'>
    <div className='container'>
    
    <div className='row '>
        <div className='col-md-7'></div>
        <div className='col-md-5 LoginBg' >
         <div className='mb-4'>
        
        <form onSubmit={handleSubmit}>
         <div className='SignUpCard'>  
         <h1 className='text-center' style={{color:"white"}}>SignUp</h1>
        <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>First Name</label>
                <input 
                className="form-control" 
                value={firstName} 
                type='text' 
                onChange={(e)=>setFirstName(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Last Name</label>
                <input 
                className="form-control" 
                value={lastName} 
                type='text' 
                onChange={(e)=>setLastName(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Mobile Number</label>
                <input 
                className="form-control" 
                value={mobile} 
                type='number' 
                onChange={(e)=>setMobile(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Aadhar Number</label>
                <input 
                className="form-control" 
                value={aadharNo} 
                type='text' 
                onChange={(e)=>setAadharNo(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Address</label>
                <input 
                className="form-control" 
                value={address} 
                type='text' 
                onChange={(e)=>setAddress(e.target.value)}
                />
            </div>
            <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Password</label>
                <input 
                className="form-control" 
                value={password} 
                type='password'
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className="d-grid gap-2 ">
                <button className='btn btn-danger' type='submit'>Let's Go</button>
            </div>
            <div className="form-label"  style={{color:"white"}}>Already have an  account ? <Link to="/">Login</Link></div>
            </div> 
        </form>
        </div>   
        </div>
    </div>
    </div>
    </div>
  )
}
export default SignUp