""" This program adds new data to the book sales data.
and then reads the data from the file and prints it to the console."""
from pathlib import Path
# Import the add_data and read_csv functions from the write_read_data module.
from csv_handler import add_data, read_csv


# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "book_sales.csv"

# Create a user prompts to add new data to the book_sales.csv file.
# The book title is a string.
book = input("What is the title of the book? ")
# The author is a string.
author = input("Who is the author of the book? ")
# The quantity is an integer.
quantity = int(input("How many copies were sold? "))
# The price is a float.
price = float(input("What is the price of the book? "))

# Add the new book data to list.
new_book_data = [book, author, quantity, price]

# Call the create_csv function and pass the file_path, and the new_book_data.
add_data(file_out_path, new_book_data)

# Check to see if the new data has been added properly.
read_csv(file_out_path)

####################################################
# Use the following data to test the program.
####################################################
# 'The Great Gatsby', 'F. Scott Fitzgerald', 6, 4.99),
# 'Huckleberry Finn', 'Mark Twain' , 10, 9.99),
# 'The Three-Body Problem', 'Liu Cixin', 15, 7.99),
# Crime and Punishment', 'Fyodor Dostoevsky', 3, 10.99),
# 'Moby Dick', 'Herman Melville', 1, 4.99)
