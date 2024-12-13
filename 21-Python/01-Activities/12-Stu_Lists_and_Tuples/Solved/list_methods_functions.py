"""This script demonstrates the use of list methods and functions"""

# Define the hobbies and feb_temperatures lists
hobbies = ["windsurfing", "bowling", "mini golf", "stand-up comedy",
            "knitting", "acrobatics", "cross-stitch"]

feb_temperatures = [28, 32, 27, 34, 35, 33, 28, 28, 27, 25, 29, 30, 30, 27, 27,
                    30, 27, 26, 27, 30, 26, 25, 22, 26, 28, 24, 25, 22]

# List methods

# Add "bowling" to the hobbies list
hobbies.append("bowling")

# To check that the new hobby was added correctly, print the list.
print(hobbies)

# Remove "bowling" from the hobbies list
hobbies.remove("bowling")
print(hobbies)

# Remove an element at a specific index
popped_element = hobbies.pop(6)
print(hobbies)
print(f"{popped_element} was removed from the hobbies list")

# Built-in functions

# Print the length of the feb_temperatures list
print(len(feb_temperatures))

# To find the maximum temperature, we can use the `max()` function.
print(max(feb_temperatures))

# To find the hobby that starts with the letter closest to the end of the
# alphabet, we can use the `max()` function.
print(max(hobbies))

# To find the minimum temperature, we can use the `min()` function.
print(min(feb_temperatures))

# To find the hobby that starts with the letter closest to the beginning of the
# alphabet, we can use the `min()` function.
print(min(hobbies))

# Use sum() to add all the temperatures together
print(sum(feb_temperatures))

# Find the average temperature using the summed temperatures and the length of
# the list
print(sum(feb_temperatures) / len(feb_temperatures))

# Find the average temperature using the summed temperatures and the length of
# the list, rounded to 3 decimal places
print(round(sum(feb_temperatures) / len(feb_temperatures), 3))

# To delete the second and third elements in the hobbies list, we can use the
# `del` statement.
del hobbies[1:3]
print(hobbies)
