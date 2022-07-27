import styles from "./Navbar.module.css"
export const Navbar = () => {

  return (
    <nav className={`${styles["bg-dark"]} ${styles.navbar}`}>
      <h1>
        DevConnector
      </h1>
    </nav>
  );
};
