# Import PyMongo
from pymongo import MongoClient
from pprint import pprint

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the MongoClient.
client = MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.toy_store

# Declare the collection
stock = db.toys


def add_toy_to_collection(toy, category, retail_price, sale_price=0.0,
                          in_stock=0):
    """Add a toy to the stock collection"""

    if sale_price == 0.0:
        sale_price = retail_price

    # A dictionary that represents the document to be inserted
    document = {
        'toy': toy,
        'category': category,
        'in_stock': in_stock,
        'retail_price': retail_price,
        'sale_price': sale_price
    }

    # Pass the dictionary into `insert_one` to insert the document into the
    # database.
    # The database and collection, if they don't already exist, will be
    # created at this point.
    stock.insert_one(document)

    print(f"Added {toy} to the toy store collection.")


def print_collection(query={}, field=None):
    """Print the toy store collection"""

    # Check if field is provided
    if field:
        # Retrieve the documents from the collection
        toys = stock.find(query, field)
    else:
        # Retrieve the documents from the collection
        toys = stock.find(query)

    # Iterate through each document and print the document
    for toy in toys:
        pprint(toy)


if __name__ == "__main__":
    # A dictionary that represents the document to be inserted
    post = {
        'toy': 'Forbidden Island',
        'category': 'board game',
        'in_stock': 20,
        'retail_price': 20.99,
        'sale_price': 19.99
    }

    while True:
        # Ask the user if they want to add a toy
        another = input("Add a toy to the collection? (y/n): ")
        if another.lower() != 'y':
            break

        print("Enter a toy to add to the collection")
        toy = input("Toy: ")
        category = input("Category: ")
        retail_price = float(input("Retail Price: "))

        post = {
            'toy': toy,
            'category': category,
            'retail_price': retail_price,
        }

        # Insert the document into the database using the add_toy_to_collection
        # function
        add_toy_to_collection(**post)

    print("\nPrinting the toy store collection next.\n")

    while True:
        # Ask the user if they would like to filter the collection

        filter_collection = input("Would you like to filter the collection? "
                                  "(y/n): ")
        if filter_collection.lower() == 'y':
            # Get the categories available in the collection
            categories = stock.distinct("category")

            # Print the categories
            print("Categories available in the collection:")
            print(", ".join(categories))

            # Ask the user for the filter criteria
            value = input("Enter the category to filter by: ")

            if value not in categories:
                print(f"{value} is not a valid category.")
                print("Returning to the filter prompt.")
                continue

            # Print the collection with the filter
            print_collection({"category": value})
            break

        # Print the collection
        print_collection()
        break
