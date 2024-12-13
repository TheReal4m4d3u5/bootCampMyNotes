"""This program calculates the monthly payment for a car loan."""

# Import the calculate_monthly_payment function from the car_loan file.
from car_loan import calculate_monthly_payment

# Prompt the user to enter the price of the car.
loan_amount = float(input("Enter the price of the car (loan amount): "))
# Prompt the user to enter the annual interest rate.
apr = float(input("Enter the annual interest rate (APR), i.e., 3.5: "))
# Prompt the user to enter the number of months to pay off the loan.
months = int(input("Enter the number of months to pay off the loan: "))

# Call the function and pass the user's input as arguments.
# Assign the result to a variable.
monthly_payment = calculate_monthly_payment(loan_amount, apr, months)

# Print the monthly payment to two decimal places.
print(f"Your monthly payment is: ${monthly_payment:,.2f}.")
