"""
This program validates the email address and password.
And, creates a student ID from the first and last name.
"""
# Import the sys module.
import sys


def validation(email, password):
    """
    Validates the email address and password.

    Parameters:
    - email (str): The email address to validate.
    - password (str): The password to validate.

    Returns:
    - Tuple[str, str]: A tuple containing validated
      email and password if both are valid.

    Raises:
    - ValueError: If the email address is invalid or the password is too short.

    Exits the program with an error message if validation fails.
    """
    # Using a try-except block to catch invalid input for email and password.
    try:
        # Check if the email address is valid.
        if "@" not in email:
            # Raise a ValueError if the email address is invalid.
            raise ValueError("Invalid email.")
        # Check if the password is at least 8 characters long
        if len(password) < 8:
            # Raise a ValueError if the password is invalid.
            raise ValueError("Password must be at least 8 characters long.")
        # Return the email and password if they are valid.
        return email, password
    # Catch any ValueError exceptions and print an error message.
    except ValueError as e:
        # Print an error message.
        print(f"\nError: {e}")
        # Exit the program and print the reason why.
        sys.exit("Exiting the program due to invalid input.")


def create_id(first_name, last_name):
    """
    This function creates a student ID from the first and last name.
    Parameters:
    - first_name (str): The first name of the student.
    - last_name (str): The last name of the student.

    Returns:
    - str: The student ID.
    """
    # Create a student ID from the first and last name.
    base_id = first_name[0].lower() + last_name.lower()
    student_id = base_id + str(len(first_name) + len(last_name))
    return student_id
