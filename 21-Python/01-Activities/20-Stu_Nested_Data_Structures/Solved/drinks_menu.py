"""This script prints a drinks menu"""


def display_drinks_menu(drinks_menu):
    """
    This function accepts a drinks menu nested dictionary in the format
    { "Drink name": { "Option": Price} }
    Then prints out a formatted version of the drinks menu
    """
    # Loop through the drinks menu dictionary
    for drink, options in drinks_menu.items():
        # Print the drink name
        print(f"\n{drink}:")
        # Loop through the drink options
        for option, price in options.items():
            # Print the option and price in the following format
            # "  {option}: ${price}"
            print(f"  {option}: ${price}")


if __name__ == "__main__":
    # Create a drinks menu dictionary
    drinks = {
        "Soda": {
            "Small": 1.99,
            "Medium": 2.49,
            "Large": 2.99
        },
        "Tea": {
            "Green": 2.49,
            "Thai iced": 3.99,
            "Irish breakfast": 2.49
        },
        "Coffee": {
            "Espresso": 2.99,
            "Flat white": 2.99,
            "Iced": 3.49
        }
    }

    display_drinks_menu(drinks)
