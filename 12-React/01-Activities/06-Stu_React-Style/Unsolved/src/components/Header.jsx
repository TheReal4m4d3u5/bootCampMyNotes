// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    backgroud: "read",
  
    fonSize: 100
  },
  h1: {
    fonSize: 100
  }

}


function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header className={backgroud.backgroud}>
      <h1 style={.header h1}>Welcome</h1>
    </header>
  );
}

export default Header;
