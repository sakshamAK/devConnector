import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export const Register = () => {
  const { registerPassword, setRegisterPassword, username, setUsername, rePassword, setRePassword, getSignupCredentials, togglePassMsg, setPassMsg } = useAuth();

  registerPassword === rePassword ? setPassMsg(false) : setPassMsg(true)

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          Sign Up Your Account
        </p>
        <div className="form">
          <div className="form-group">
            <label htmlFor = "username">Username:</label>
            <input type="text" placeholder="Username" name="username" value = { username } onChange = { e => setUsername(e.target.value) } required />
          </div>
          <div className="form-group">
            <label htmlFor = "email">email:</label>
            <input type="email" placeholder="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor = "password">Password</label>
            <input type="password" placeholder="Password" name="password" minLength="6" value = { registerPassword } onChange = { e => setRegisterPassword(e.target.value) } />
          </div>
          <div className="form-group">
            <label htmlFor = "password">Re-enter Password</label>
            <input type="password" placeholder="Password" name="password" minLength="6" value = { rePassword } onChange = { e => setRePassword(e.target.value) } />
            { togglePassMsg && <small>Passwords do not match</small> }
          </div>
          <button className="btn btn-primary" onClick = { () => getSignupCredentials() } >Sign up</button>
        </div>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </>
  );
};
