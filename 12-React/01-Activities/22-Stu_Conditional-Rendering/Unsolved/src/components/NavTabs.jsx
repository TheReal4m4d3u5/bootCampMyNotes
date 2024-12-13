// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}  // Calls the handlePageChange function with 'Home' as the argument to update the current page state. inline event handler

          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          
          /*
            The expression className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} 
            is using a ternary operator to conditionally set the className attribute of the <a> 
            element based on the value of currentPage. 
          */
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"



          //The expression onClick={() => handlePageChange('About')} is used to handle click events in a React component. 
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing


          /*
            The expression className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
            is used to dynamically assign a CSS class to an element based on a condition in a React component. 
            Here's a breakdown of this line:
          */

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"

          //The expression onClick={() => handlePageChange('Blog')} serves a similar purpose in the context of handling click events in a React component. 
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing


          /*
              The expression className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'} 
              is a common way to dynamically set the CSS class of an element in React based on the component's state or props.
          */

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a

          //The attribute href="#contact" in an anchor (<a>) tag is used to create a link that targets an element with the id of "contact" on the same page. 
          href="#contact"
          
          //  TODO: Add a comment explaining what this logic is doing
          /*
              The onClick={() => handlePageChange('Contact')} line is an event handler 
              for a click event on the anchor (<a>) tag.  
          */
          onClick={() => handlePageChange('Contact')}

          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
