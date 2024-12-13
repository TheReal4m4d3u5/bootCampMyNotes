"""Creating a Car class with methods and instances"""

# Define the Car class with five parameters
class Car:
    """Creating a Car class with five parameters and instances"""
    # TODO: Create the __init__ method with five parameters
    # TODO: Initialize the five attributes
    def __init__(self, make, model, body, year, color):
        # Initialize the five attributes
        self.make = make
        self.model = model
        self.body = body
        self.year = year
        self.color = color

if __name__ == "__main__":
    # TODO: Create prompts for the user to enter the car information.
    car_make = input("Enter the make of the car: ")
    car_model = input("Enter the model of the car: ")
    car_body = input("Enter the body type for the car: ")
    car_year = int(input("Enter the year the car was made: "))
    car_color = input("Enter the color of the car: ")
    # TODO: Pass user information to the instance of the Car class.
    car = Car()


    print('Here is the information you enter for the car.')
    # TODO: Print the details of the car.
    print(f"Make: {car.make}")
    print(f"Model: {car.model}")
    print(f"Body: {car.body}")
    print(f"Year made: {car.year}")
    print(f"Color: {car.color}")