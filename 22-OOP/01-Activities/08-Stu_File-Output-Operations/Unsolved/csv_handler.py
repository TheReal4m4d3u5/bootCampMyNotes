import csv

# TODO: Create a function that appends data to the end of the book sales data.
def add_data(path, data):
    """Create a CSV file and write the header row and data to it.

    Args:
    file (str): The path to the CSV file.
    book_data (list): The data rows to be written to the CSV file.
    """
    # TODO: Use the with open statement to create a new CSV file.
    # TODO: Use utf-8 encoding to ensure the data is written correctly.
    with open(path, 'a', encoding='utf-8') as outfile:
        # Create a CSV writer object using the writer function.
        writer = csv.writer(outfile)
        # Write the new data to the file.
        # TODO: Create a CSV writer object using the writer() function.
        writer.writerow(data)


        # TODO: Write the new data to the file.


# TODO: Create a function that reads the book sales data and prints it to the console.
def read_csv(path):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
      path (str): The path to the CSV file to read.

    Returns:
      list: The file contents by row.
    """
    try:

      with open(path, 'r', encoding='utf-8') as file:
          csv_data = csv.reader(file)
          contents = [row for row in csv_data]
          
          for row in csv_data:
              print(row)
          
          return contents

    # TODO: Open the CSV file using the csv module
    # TODO: Use the read mode and encoding='utf-8'.

        # TODO: Create a CSV reader object with the reader() function.

        # TODO: Iterate over each row in the CSV file

            # TODO: Print each row from the file.
    except FileNotFoundError:
        print(f"Error: The file at {path} was not found.")
        return []
    except Exception as e:
        print(f"An error occurred: {e}")
        return []