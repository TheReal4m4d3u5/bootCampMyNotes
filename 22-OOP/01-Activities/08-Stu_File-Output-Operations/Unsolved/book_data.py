""" This program adds new data to the book sales data.
and then reads the data from the file and prints it to the console."""

# TODO: Import the functions from the CSV_handler module.
# Import the Path module from the pathlib library.
from pathlib import Path

from csv_handler import add_data, read_csv

# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "book_sales.csv"

# TODO: Create a user prompts to add new data to the book_sales.csv file.
# TODO: The book title is a string.
book = input("What is the title of the book? ")

# TODO: The author is a string.
author = input("Who is the author of the book? ")
# TODO: The quantity is an integer.
quantity = int(input("How many copies were sold? "))
# TODO: The price is a float.
price = float(input("What is the price of the book? "))

# TODO: Add the new book data to list.
new_book_data = [book, author, quantity, price]

# TODO: Call the function and pass the file path and the new book data.
add_data(file_out_path, new_book_data)

# TODO: Call the read function to see if the new data has been added properly.
read_csv(file_out_path)