"""This program calculates the monthly payment for a car loan."""

# TODO: Import the calculate_monthly_payment function from the car_loan file.
from car_loan import calculate_monthly_payment


def main():
    """Main program to calculate car loan monthly payments."""
    print("Welcome to the Car Loan Payment Calculator!")
    # TODO: Prompt the user to enter the price of the car.
    # TODO: Convert the price to a floating point number.
    car_price = float(input("Enter the price of the car: "))



    # TODO: Prompt the user to enter the annual interest rate.
    # TODO: Convert the interest rate to a floating point number.
    annual_interest_rate = float(input("Enter the annual interest rate (APR) in percentage (e.g., 5 for 5%): "))
    
    # TODO: Prompt the user to enter the number of months to pay off the loan.
    # TODO: Convert the number of months to an integer.
    loan_months = int(input("Enter the number of months to pay off the loan: "))
    # TODO: Call the function and pass the user's input as arguments.
    # TODO: Assign the result to a variable.
    monthly_payment = calculate_monthly_payment(car_price, annual_interest_rate, loan_months)

# TODO: Print the monthly payment to two decimal places.
    print(f"The monthly payment for your car loan is: ${monthly_payment:.2f}")


