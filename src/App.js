import React, {useState} from 'react'
import Loginform from './components/Loginform';
import './index.css';

function App() {
  const adminUser={
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, Sertuser] = useState({name:"" , email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password)
    { 
      console.log("Logged in");
      Sertuser({
        name: details.name,
        email: details.email
      })
      setError("");
    }
    else{
      console.log("Details not matched!");
      setError("Details not matched!");
      }

  }

  const Logout = ()=> {
    Sertuser({name: "",email : ""});
  }

  return (
    <div  classname="App">
     {(user.email != "") ? (
       <div id="App" className="Welcome">
         <h2 id="wel">Welcome, <span>{user.name}</span></h2>
         <button id="b1" onClick={Logout}>Logout</button>
       </div>
     ): (
       <div id="App">
      <Loginform  Login={Login} error={error}/>
      </div>
     )}
    </div>
  );
}

export default App;
