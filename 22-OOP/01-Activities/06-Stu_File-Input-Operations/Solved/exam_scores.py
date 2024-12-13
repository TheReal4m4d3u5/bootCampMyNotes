"""This program reads a CSV file and calculates
the average score for a given subject."""
import csv
from pathlib import Path

# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
# to the 'exam_scores.csv' file.
file_path = current_directory / "Resources" / "exam_scores.csv"


def get_averages(file_path):
    """
    Reads a CSV file containing student exam scores
    and calculates the average score for each subject.

    Args:
        file_path (str): The file path to the CSV file.

    Returns:
        None

    Prints:
        The class average score for each subject.
    """
    # Initialize a dictionary to store the scores for each subject.
    # The subjects are: Composition, Biology, Math, and Speech.
    subject_scores = {
        "Composition": [],
        "Biology": [],
        "Math": [],
        "Speech": []
    }

    # Open the CSV file, using the read mode and encoding='utf-8'.
    with open(file_path, 'r', encoding='utf-8') as file:
        # Create a CSV reader object using the DictReader() class.
        csv_data = csv.DictReader(file)

        # Iterate over each row in the CSV file
        for row in csv_data:
            # Use a for loop to iterate over each subject.
            for subject in subject_scores:
                # Extract the subject score and
                # add it to the subject list as an integer.
                subject_scores[subject].append(int(row[subject]))

    # Use a for loop to iterate over the subject_scores dictionary.
    for subject, scores in subject_scores.items():
        # Calculate the average score for each subject.
        average_subject_score = sum(scores) / len(scores)
        # Print the average score for each subject.
        print(f"The class average score for {subject}" +
              f" is {average_subject_score:.1f}")


if __name__ == "__main__":
    # Call the function with
    get_averages(file_path)
