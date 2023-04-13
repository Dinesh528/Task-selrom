import React,{useState,useEffect} from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'; 
function Login() {
const [mobile_no,setMobile] = useState('');
const [password,setPassword] = useState('')

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(mobile_no,password)
    fetch("http://interview.wpos.live/api/user/login",{method:"POST",
    headers:{},
    body:JSON.stringify({
        
        mobile_no:mobile_no,
        password:password
        
    })})
    .then(res=>res.json())
    .then(data=>console.log(data))

    setMobile("");
    setPassword("");
}
  return (
   
    <div className='bg-secondary'>
         <div className='container '>
    <div className='row '>
        <div className='col-md-7'></div>
        <div className='col-md-5 LoginBg' >
         <div className='mb-4'>
        
        <form onSubmit={handleSubmit}>
         <div className='LoginCard'>  
         <h1 className='text-center' style={{color:"white"}}>Login</h1>
        <div className="mb-3 ">
                <label className="form-label" style={{color:"white"}}>Mobile Number</label>
                <input 
                className="form-control" 
                value={mobile_no} 
                type='number' 
                onChange={(e)=>setMobile(e.target.value)}
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
            <div className="form-label"  style={{color:"white"}}>Do you have account ? <Link to='/signup'>Sign Up</Link></div>
            </div> 
        </form>
        </div>   
        </div>
    </div>
    </div>
    </div>
  )
}
export default Login