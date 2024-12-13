export default class Validate {

  isValidUsername(username: string) {
      // TODO: Write code that throws an error if no username is given.
      // TODO: Write code that checks if the username is less than 8 characters and returns false if so.
      // This regex pattern makes sure that a provided string is all lowercase
    // TODO: Write code the checks if the username contains all lowercase characters.
    // It should return true if it does, and false if not.

        
        if (!username) {
          throw new Error('Username cannot be empty');
        }
    
       
        if (username.length < 8) {
          return false;
        }

        if (username.length > 16) {
          return false;
        }
    
        const pattern = /^[a-z]*$/;
        return pattern.test(username);

  }

  isValidPassword(password: string) {
    // TODO: Write code that throws an error if no password is given.
    
    // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
    
    // This regex pattern makes sure that a provided string has at least 1 uppercase, lowercase, and number.

    // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number.
    // It should return true if it does, and false if not.
  
    if (!password) {
      throw new Error('Password cannot be empty');
    }

    // Return false if the password is less than 8 characters
    if (password.length < 8) {
      return false;
    }

    // Check if the password contains at least 1 uppercase, lowercase, and number
    // const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

    return pattern.test(password);
  
  };
}
