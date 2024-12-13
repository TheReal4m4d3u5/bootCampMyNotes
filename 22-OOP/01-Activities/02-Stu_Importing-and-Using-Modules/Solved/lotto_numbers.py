"""This program generates random lottery numbers."""
# Import the randint function from the random module.
from random import randint


def generate_lottery_numbers(value):
    """This function generates four random numbers between
    1 and 64 and prints them to the screen"""
    # Create an empty list to store the lottery numbers
    lottery_numbers = []
    # Use a for loop to generate 5 numbers
    # between 1 and 64 and add them to the list.
    for _ in range(value):
        # Assign a variable to the randint() function
        # to generate random numbers.
        number = randint(1, 64)
        lottery_numbers.append(number)
    # Return the list of lottery numbers.
    return lottery_numbers


# Call the function to generate lottery numbers
if __name__ == "__main__":
    # Assign the return value of the function to a variable.
    # Pass a number to  the function to generate random lottery numbers.
    my_numbers = generate_lottery_numbers(5)
    # Print the list of lottery numbers.
    print(f"Lottery numbers: {my_numbers}")
