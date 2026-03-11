import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './style.css' 

function App() {
  const navigate = useNavigate()
  
  // States for the input boxes
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function handleuser(evt) {
    setUser(evt.target.value)
  }

  function handlepass(evt) {
    setPass(evt.target.value)
  }

  function check() {
const API_URL = "https://your-backend-service.onrender.com/login";
var logindetails = axios.post(API_URL, { "username": user, "password": pass })
    .then(function (data) {
      if (data.data === true) {
        navigate("/success")
      }
      else {
        // Clear inputs if login fails
        setUser("")
        setPass("")
        navigate("/fail")
      }
    })
    .catch(function (error) {
      console.error("The Ninja server is not responding:", error);
      alert("Connection failed! Check if your backend is running.");
    })
  }

  return (
    <div className="login-container">
      <h1 className="main-title">Shinobi Login</h1>
      
      <input 
        type="text" 
        value={user} 
        onChange={handleuser} 
        name="username" 
        placeholder="Enter Your Name..." 
        autoComplete="off"
        required
      />
      
      <input 
        type="password" 
        value={pass} 
        onChange={handlepass} 
        name="password" 
        placeholder="Enter Code..." 
        autoComplete="new-password" 
        required
      />
      
      <button onClick={check} id="validsub">Log In</button>
    </div>
  )
}

export default App