import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export const Login = () => {
  const { password, setPassword, username, setUsername, getCredentials } = useAuth();

  

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          Sign Into Your Account
        </p>
        <div className="form">
          <div className="form-group">
            <label htmlFor = "username">Username:</label>
            <input type="text" placeholder="Username" name="username" value = { username } onChange = { e => setUsername(e.target.value) } required />
          </div>
          <div className="form-group">
            <label htmlFor = "password">Password</label>
            <input type="password" placeholder="Password" name="password" minLength="6" value = { password } onChange = { e => setPassword(e.target.value) } />
          </div>
          <button className="btn btn-primary" onClick = { () => getCredentials() } >Log In</button>
        </div>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </section>
    </>
  );
};
