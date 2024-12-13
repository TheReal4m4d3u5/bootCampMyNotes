"""This script represents a shopping list"""

# Define the shopping list collection globally
shopping_list = {}


# Define the add_item function
def add_item(item_name, quantity):
    """Add an item to the shopping list"""

    # Check if the item is already in the shopping list
    if item_name in shopping_list:
        # Add the quantity to the existing quantity
        shopping_list[item_name] += quantity
    else:
        # Add the item to the shopping list
        shopping_list[item_name] = quantity

    print(f"Adding {quantity} {item_name} to the shopping list.")


# Define the remove_item function
def remove_item(item_name, quantity):
    """Remove an item from the shopping list"""

    # Check if the item is in the shopping list
    if item_name in shopping_list:
        # Check if the quantity to remove is greater than the quantity in the
        # shopping list
        if quantity >= shopping_list[item_name]:
            # Remove the item from the shopping list
            del shopping_list[item_name]
        else:
            # Subtract the quantity to remove from the quantity in the shopping
            # list
            shopping_list[item_name] -= quantity

        print(f"Removing {quantity} {item_name} from the shopping list.")
    else:
        print(f"{item_name} is not in the shopping list.")


# Define the show_list function
def show_list():
    """Show the items in the shopping list"""

    print("Shopping List:")
    print("--------------")

    # Check if the shopping list is empty
    if not shopping_list:
        print("The shopping list is empty.")
    else:
        print(shopping_list)


if __name__ == "__main__":
    menu_options = {
        "1": "Add item",
        "2": "Remove item",
        "3": "Show list",
        "4": "Exit"
    }

    print("Welcome to the Shopping List App!")

    while True:
        print("\nPlease select an option:\n"
              "1: Add item\n"
              "2: Remove item\n"
              "3: Show list\n"
              "4: Exit")

        choice = input("Choice: ")
        if choice in menu_options:
            # Check the user's choice
            # 1 - Add item
            if choice == "1":
                item_name = input("Enter the item name to add: ")
                quantity = int(input("Enter the quantity: "))
                # Create a dictionary with the arguments

                arguments = {"item_name": item_name, "quantity": quantity}
                # Call the add_item function with the arguments
                # This is an example of unpacking a dictionary
                add_item(**arguments)
            # 2 - Remove item
            elif choice == "2":
                item_name = input("Enter the item name to remove: ")
                quantity = int(input("Enter the quantity to remove: "))

                # Create a dictionary with the arguments
                arguments = {"item_name": item_name, "quantity": quantity}
                # Call the remove_item function with the arguments
                # This is an example of unpacking a dictionary
                remove_item(**arguments)
            # 3 - Show list
            elif choice == "3":
                show_list()
            # 4 - Exit
            elif choice == "4":
                break
        else:
            print("Invalid choice. Please try again.")
