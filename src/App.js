import React from 'react';
import Profile from './profile/profile'
import './App.css';
import image from './pic.png';

function App() {
  const handleAlert=(name)=>{
    alert(name)
  }
  return (
    <div style={{border:"solid",display:"flex",justifyContent:"center",fontSize:"50px"}}>
    <Profile data = {{fullName:"Ahmed Abdelmoula",bio:"born in 10/10/1994",profession:"web dev"}} handleName={handleAlert}> 
    <img src={image} alt='profile pic'/>
    </Profile>
    </div>
  );
}

export default App;
