""" This module provides a class for managing customer room reservations. """
import csv
from pathlib import Path
from rooms import Reservation

# Get the current script's directory
CURRENT_DIRECTORY = Path(__file__).parent
CUSTOMER_FILE_PATH = CURRENT_DIRECTORY / "Resources" / "customers.csv"


class Customer(Reservation):
    """
    A class to manage customer reservations, inheriting from Reservation.

    Attributes:
        first_name (str): The first name of the customer.
        last_name (str): The last name of the customer.
        nights (int): The number of nights the customer will stay.
        room_type (str): The type of room the customer wants to book.
        room (dict): The room booked by the customer.
    """
    # Define the __init__ method with the required parameters.
    def __init__(self, first_name, last_name, nights, room_type):
        """
        Initializes the Customer class with customer details
          and attempts to book a room.

        Args:
            first_name (str): The first name of the customer.
            last_name (str): The last name of the customer.
            nights (int): The number of nights the customer will stay.
            room_type (str): The type of room the customer wants to book.
        """
        # Call the __init__ method from the parent class
        super().__init__()
        # Set the customer details, the nights, and room type
        self.first_name = first_name
        self.last_name = last_name
        self.nights = nights
        self.room_type = room_type
        # Initialize the room attribute to None.
        # This will be set to the room dictionary if the room is available.
        self.room = None
        # Use an if statement to call the validate_room method
        if self.validate_room():
            # Call the book_room method
            # from the Reservation class to book the room.
            self.book_room()

    def validate_room(self):
        """
        Validates if the requested room type is available.

        Returns:
            bool: True if the room is available, False otherwise.
        """
        # Use a for loop to iterate over the rooms list from the parent class.
        for room in self.rooms:
            # Check if the room type matches the requested room type.
            if room['type'] == self.room_type:
                # Set the room attribute to the current room.
                self.room = room
                # Check if the room is available by comparing the
                # available attribute to less than or equal to 0.
                if self.room['available'] <= 0:
                    # Print a message if the room is not available.
                    print(f"Sorry, there are no {self.room_type}"
                          f" rooms available.")
                    return False
                return True
        # Print a message if the room type is not valid.
        print(f"Sorry, {self.room_type} is not a valid room type.")
        return False

    def book_room(self):
        """
        Books the room for the customer and updates the room availability.
        """
        # Decrement the available attribute of the room by 1.
        self.room['available'] -= 1
        # Call the save_rooms method from the parent class
        # to save the updated room data.
        self.save_rooms()
        # Save the customer data to the CSV file.
        self.save_customer_data()
        # Print a message confirming the booking.
        print(f"\n{self.first_name} {self.last_name} has booked a "
              f"{self.room_type} room for {self.nights} nights.")

    def save_customer_data(self):
        """
        Saves the customer data to a CSV file.

        The data includes the customer's first name,
          last name, number of nights,
        room type, and the total cost of the stay.
        """
        total_cost = self.nights * self.room['price']
        try:
            # Write the header if the file is empty
            if (
                not CUSTOMER_FILE_PATH.exists() or
                CUSTOMER_FILE_PATH.stat().st_size == 0
            ):
                with open(CUSTOMER_FILE_PATH, 'w',
                          newline='', encoding='utf-8') as file:
                    writer = csv.writer(file)
                    writer.writerow(["First Name", "Last Name", "Room",
                                    "Nights", "Total"])

            with open(CUSTOMER_FILE_PATH, 'a',
                      newline='', encoding='utf-8') as file:
                writer = csv.writer(file)

                writer.writerow([self.first_name,
                                self.last_name,
                                self.room_type,
                                self.nights,
                                total_cost])
        except OSError as e:
            print("An unexpected error occurred while "
                  f"saving customer data: {e}")
