"""This program allows a user deposit and withdraw from their account"""
from bank_account import SavingsAccount

# Prompt the user to set the starting balance.
starting_balance = float(input('Enter your starting balance: '))

# Create an instance of the `BankAccount`
# class that sets the users starting balance.
savings = SavingsAccount(starting_balance)

# Prompt the user to deposit their paycheck.
pay = float(input('How much were you paid this week? '))
print(f"I will deposit $, {pay:,.2f}, into your account.")

# Pass the user's pay to the deposit
# method using the instance of the BankAccount class.
savings.deposit(pay)

# Display the balance and format the amount
# to two decimal places and thousands.
print(f"Your account balance is ${savings.get_balance():,.2f}")

# Prompt the user to withdraw an amount.
cash = float(input('How much would you like to withdraw? '))
print(f"I will withdraw ${cash:,.2f} from your account.")

# Pass the user's amount they want to the withdraw method
# using the instance of the BankAccount class.
savings.withdraw(cash)

# Display the balance and format the amount
# to two decimal places and thousands.
print(f"Your account balance is ${savings.get_balance():,.2f}")
