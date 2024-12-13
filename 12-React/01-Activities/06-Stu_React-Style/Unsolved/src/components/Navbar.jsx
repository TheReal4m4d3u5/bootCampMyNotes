// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const style = {
  nav: {
    backgroundColo: "green",
    display: "flex",
    justifyContent: "flex-end "
  }, 
  a: {
    color: "white",
    frontSize: "1.3 rem",
    textDecoration: "none",
    margin: 5, 
    lineHeight: 3
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className={navbar}>
      <a style={.navbar a} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
