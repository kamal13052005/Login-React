import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './style.css' 

function App() {
  const navigate = useNavigate()
  
  // States are initialized to empty strings to ensure the boxes are clear on load
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  function handleuser(evt) {
    setUser(evt.target.value)
  }

  function handlepass(evt) {
    setPass(evt.target.value)
  }

  function check() {
    var logindetails = axios.post("http://localhost:5000/login", { "username": user, "password": pass })
    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/success")
      }
      else {
        navigate("/fail")
      }
    })
  }

  return (
    <div className="login-container">
      <h1 className="main-title">Login Page</h1>
      
      {/* Adding value={user} and value={pass} makes these "Controlled Components".
          Adding autoComplete="off" prevents the browser from filling them automatically.
      */}
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
        placeholder="Enter Password..." 
        autoComplete="new-password" 
        required
      />
      
      <button onClick={check} id="validsub">Log in</button>
      
      <a href="#" className="helper-text">Forgot your scroll?</a>
    </div>
  )
}

export default App