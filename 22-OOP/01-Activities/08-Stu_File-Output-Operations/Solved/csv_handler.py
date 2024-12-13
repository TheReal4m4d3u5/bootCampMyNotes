""" These functions are used to read and write data to a CSV file. """
import csv


def add_data(path, data):
    """Create a CSV file and write the header row and data to it.

    Args:
    file (str): The path to the CSV file.
    header (list): The header row for the CSV file.
    book_data (list): The data rows to be written to the CSV file.
    """
    # Use the with open statement to create a new CSV file.
    # Use utf-8 encoding to ensure the data is written correctly.
    with open(path, 'a', encoding='utf-8') as outfile:
        # Create a CSV writer object using the writer function.
        writer = csv.writer(outfile)
        # Write the new data to the file.
        writer.writerow(data)


def read_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
      path (str): The path to the CSV file to read.

    Returns:
      list: The file contents by row.
    """
    try:
      # Open the CSV file using the csv module
      # Use the read mode and encoding='utf-8'.
      # This is the standard encoding for CSV files.
      with open(path, 'r', encoding='utf-8') as file:
          # Create a CSV reader object with the reader() function.
          csv_data = csv.reader(file)

          # Read all rows into a list
          contents = [row for row in csv_data]
          
          # Iterate over each row in the CSV file
          for row in csv_data:
              # Print each row from the file.
              print(row)
          
          return contents

    except FileNotFoundError:
        print(f"Error: The file at {path} was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []
