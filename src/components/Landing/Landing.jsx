import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

export const Landing = () => {
  return (
    <div>
      <section className={ styles["container"] } >
        <div className="dark-overlay">
          <div className={ styles["login-signup"] }>
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
