""""
This class stores the user's account information
and saves it to a JSON file.
"""
import json


class AccountCreation:
    """A class that creates an email and password for a user."""

    def __init__(self,
                email=None,
                password=None,
                first_name=None,
                last_name=None):
        self._email = email
        self._password = password
        self._first_name = first_name
        self._last_name = last_name

    # Use the @property decorator or the first name getter method
    @property
    def first_name(self):
        """Gets the first name of the user."""
        return self._first_name

    # Use the @property decorator for the last name getter method
    @property
    def last_name(self):
        """Gets the last name of the user."""
        return self._last_name

    # Use the @property decorator for the email getter  method
    @property
    def email(self):
        """Gets the email of the user."""
        return self._email

    # Use the @property decorator for the password getter method
    @property
    def password(self):
        """Gets the password of the user."""
        return self._password

    # Use the @property decorator for the first name setter method
    @first_name.setter
    def first_name(self, value):
        """Sets the first name of the user."""
        self._first_name = value

    # Use the @property decorator for the last name setter method
    @last_name.setter
    def last_name(self, value):
        """Sets the last name of the user."""
        self._last_name = value

    # Use the @property decorator for the email setter method
    @email.setter
    def email(self, value):
        """Sets the email of the user if it is in the correct format."""
        if "@" not in value or "." not in value:
            raise ValueError("That is an invalid email format.")
        self._email = value

    # Use the @property decorator for the password setter method
    @password.setter
    def password(self, value):
        """
        Sets the password of the user if it is at least 8 characters long.
        """
        if len(value) < 8:
            raise ValueError("The password must be at least 8 characters long")
        self._password = value

    def save_account(self, filename):
        """Saves the account information to a JSON file."""
        data = {
            'first_name': self._first_name,
            'last_name': self._last_name,
            'email': self._email,
            'password': self._password
        }
        with open(filename, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4)


if __name__ == "__main__":
    # Create an instance of the AccountCreation class.
    account_info = AccountCreation()

    # Ask the user to enter their first name.
    user_first_name = input("Enter your first name: ")
    # Set the first name using the property setter
    account_info.first_name = user_first_name

    # Ask the user to enter their last name.
    user_last_name = input("Enter your last name: ")
    # Set the last name using the property setter
    account_info.last_name = user_last_name

    while True:
        # Ask the user to enter an email address.
        user_email = input("Enter your email address: ")
        # Set the email using the property setter
        try:
            account_info.email = user_email
            break
        except ValueError as e:
            print(e)

    while True:
        print("Create a password that is at least 8 characters long.")
        # Ask the user to enter a password.
        user_pwd = input("Enter your password: ")
        # Set the password using the property setter
        try:
            account_info.password = user_pwd
            break
        except ValueError as e:
            print(e)

    # Save the account information to a JSON file
    account_info.save_account('account_info.json')

    # Print the confirmation message.
    print("Check your email for confirmation.")
