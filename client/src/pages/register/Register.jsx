import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
			<span className="registerTitle">Register</span>
      <form className="registerForm">
	 			<label>Username</label>
				<input type="text" className="registerInput" placeholder="Enter your username..."></input>
				<label>Email</label>
				<input type="text" className="registerInput" placeholder="Enter your email..."></input>
				<label>Password</label>
				<input type="password" className="registerInput" placeholder="Enter your password..."></input>
				<button className="registerButton">Register</button>
			</form> 
			{ /* CAUSES WEIRD LOGIN BUTTON ON HOME PAGE
			<button className="registerLoginButton">
				<Link to="/login" className="Link">Login</Link>
			</button>
  			*/}
    </div>
  )
}
