"""This Python script simulates a food ordering system."""


# According to the PEP 8 style guide, functions in Python should be separated
# by two blank lines
# See https://peps.python.org/pep-0008/#blank-lines

# For additional recommendations on functions, see:
# See https://peps.python.org/pep-0008/#other-recommendations

# The following block of code is an example of a function in Python.
# The function accepts four parameters: food, price, tax, and quantity.
# Each parameter has a default value, which means that the function can be
# called without providing any arguments.
# The function calculates the total cost of an order and prints a summary.
def order(food="pizza", price=5.99, tax=6.5, quantity=1):
    """
    Prints a summary of an order including the dish, total cost, and quantity.

    Parameters:
    food (str): The name of the food being ordered.
    price (float): The price of the food.
    tax (float): The tax rate for the order.
    quantity (int): The number of meals being ordered.
    """

    # According to the PEP 8 style guide, there should be a space after each
    # comma in a function call, but no space before the comma, and no
    # whitespace immediately inside the parentheses
    # See
    # https://peps.python.org/pep-0008/#whitespace-in-expressions-and-statements

    # Calculate the total cost of the order
    # round() is a built-in Python function that rounds a number
    # to a specified number of decimal places
    total = round(price * quantity * (1 + tax / 100), 2)

    # Print a summary of the order
    print(f"{quantity} order(s) of {food} will cost ${total}")


# The following block of code will only run if this script is run directly
if __name__ == "__main__":
    # order_options is an example of a dictionary in Python
    order_options = {
        "pizza": 5.99,
        "pasta": 6.99,
        "salad": 5.49,
        "soup": 3.99
    }

    # The following block of code is an example of a continuous while loop
    while True:

        # Prompt the user to enter the name of the meal they would like to
        # order
        meal = input("What would you like to order?\n"
                     "Choose from the following options: "
                     + ", ".join(order_options.keys()) + " ")

        # Check if the user's input is a valid meal option
        if meal in order_options:
            # Retrieve the price of the selected meal
            price = order_options[meal]

            # Prompt the user to enter the quantity of the selected meal
            quantity = input("How many orders of " + meal
                             + " would you like? ")

            # Check if the user's input is a valid number
            while not quantity.isdigit():
                # If the user's input is not a valid number,
                # prompt the user to enter a valid number
                quantity = input("Please enter a valid number. ")

            # Call the order() function with the user's input
            order(meal, price, quantity=int(quantity))
        # If the user's input is not a valid meal option
        else:
            # Print an error message
            print("Invalid order. Try again.")
            # Return to the beginning of the while loop
            continue

        # Ask the user if they would like to order another dish
        continue_ordering = input("Would you like to order another dish? "
                                  "(y/n) ")

        # The PEP 8 style guide says that there should always be a space
        # before and after binary operators like != and ==
        # See https://peps.python.org/pep-0008/#other-recommendations

        # Check if the user's input is not "y" or "Y"
        if continue_ordering.lower() != "y":
            # If the user's input is not "y" or "Y", break out of the loop
            break
