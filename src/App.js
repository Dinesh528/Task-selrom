import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom'  

function App() {
  return (
    
   <div className=''>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   </div>
   
    
  );
}

export default App;
