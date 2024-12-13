"""This script demonstrates how to collect user input and perform calculations.
"""

# Ask the user the name of the product they are purchasing.
# Store the name of the product in a variable called product_name.
product_name = input("What is the name of the product you are purchasing "
                     "from the grocery store? ")

# Ask the user the quantity of the product they are purchasing.
# Store the quantity in a variable called product_quantity.
# Convert the quantity to an integer.
product_quantity = int(input("What quantity of " + product_name
                             + " are you purchasing? "))

# Ask the user the price of the product they are purchasing.
# Store the price in a variable called product_price.
# Convert the price to a float.
product_price = float(input("What is the price of " + product_name + "? "))

# Ask the user the tax rate for the product they are purchasing.
# Store the tax rate in a variable called tax_rate.
# Convert the tax rate to a float.
tax_rate = float(input("What is the tax rate for " + product_name + "?\n"
                       "Enter the tax rate as a percentage: "))

if product_quantity <= 0 or product_price <= 0 or tax_rate < 0:
  print("Please enter positive values for quantity, price, and tax rate.")
# Calculate the total cost of the purchase.
# Store the total cost in a variable called total.
# Round the total to two decimal places.
total = round(product_price * product_quantity * (1 + tax_rate / 100), 2)

# Print a summary of the purchase.
print(f"{product_quantity} {product_name} (s) will cost ${str(total)}")
