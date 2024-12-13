""" This program simulates a coin toss. """
import sys
from random import randint


class CoinToss:
    """A class representing a coin toss.
    Attributes:
      side_up (str): The current side of the coin facing up.
    """
    def __init__(self):
        # Initialize the side up attribute to `None`.
        self.side_up = None

    def toss(self):
        """
        Simulates a coin toss by randomly setting the side up
        attribute to either 'Heads' or 'Tails'.
        """
        if randint(0, 1) == 0:
            self.side_up = "Heads"
        else:
            self.side_up = "Tails"

    def get_side_up(self):
        """Returns the current side of the coin facing up."""
        return self.side_up


if __name__ == "__main__":
    # Create an instance of the CoinToss class.
    my_coin = CoinToss()

    # Ask the user which side of the coin to choose.
    user_choice = input("Choose a side of the coin: " +
                        "Heads or Tails: ").capitalize()

    # Ensure the user input is valid.
    if user_choice not in ["Heads", "Tails"]:
        print("Invalid choice. Please choose 'Heads' or 'Tails'.")
        sys.exit()

    # Toss the coin.
    print("I am tossing the coin.")
    my_coin.toss()

    # Display the side of the coin that is facing up.
    print("The side up is:", my_coin.get_side_up())

    # Determine who starts based on the coin toss result.
    if my_coin.get_side_up() == user_choice:
        print("You start first!")
    else:
        print("Your opponent starts first.")
