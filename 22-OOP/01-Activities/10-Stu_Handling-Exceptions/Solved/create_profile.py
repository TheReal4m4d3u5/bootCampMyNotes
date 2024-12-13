"""
This program prompts the user to enter their first name,
last name, email, and password. It then validates the email and password
using the validation function from the CSV_module module.
Next, it generates a unique ID for the student using the create_ID function.
The student data, including the ID, first name, last name, email, and password,
is stored in a list. Finally, the add_data function from the CSV_module
module is called to add the student data to a CSV file.
The read_csv function is then called to display the contents of the CSV file.
"""
# Import the Path class from the pathlib module.
from pathlib import Path
# Import the functions from the Student_Profile module.
from Student_Profile import validation, create_id
# Import the functions from the CSV_handler module.
from csv_handler import create_csv, read_csv


# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "students.csv"

# Create a variable for the header that contains the column names.
column_data = ['ID', 'First Name', 'Last Name', 'Email', 'Password']

# Create user prompts for the student to enter their data.
# Create a prompt to enter the first name.
student_first_name = input("Enter your first name: ")
# Create a prompt to enter the last name.
student_last_name = input("Enter your last name: ")
# Create a prompt to enter the email.
student_email = input("Enter your email: ")
# Create a prompt to enter the password.
student_password = input("Enter a password.\n"
                         "Your password should be" +
                         "at least 8 characters long: ")

# Call the validation function and pass the email and password.
validation(student_email, student_password)

# Call the create_ID function and pass the first and last name.
# Add set the return value to a variable.
student_id = create_id(student_first_name, student_last_name)

# Add the student data and ID to a list.
student_data = [student_id, student_first_name, student_last_name,
                student_email, student_password]

# Call the csv_file_manager function
# Pass the file path, column data, and student data.
create_csv(file_out_path, column_data, student_data)

# Call the read _csv function to print the contents of the CSV file.
read_csv(file_out_path)
