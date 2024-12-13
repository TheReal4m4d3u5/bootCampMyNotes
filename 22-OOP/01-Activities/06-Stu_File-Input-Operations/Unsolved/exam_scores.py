"""This program reads a CSV file and calculates
the average score for a given subject."""
# TODO: Import the csv module
# TODO: Import the Path module from the pathlib library
import csv
from pathlib import Path

# TODO: Get the current script's directory.
current_directory = Path(__file__).parent

# TODO: Set the path to the current directory
# TODO: and, the 'Resources' directory, and the 'exam_scores.csv' file.
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

    # TODO: Open the CSV file, using the read mode and encoding='utf-8'.
    with open(file_path, 'r', encoding='utf-8') as file:
        # TODO: Create a CSV reader object using the DictReader() class.
        csv_data = csv.DictReader(file)
        # TODO: Iterate over each row in the CSV file
        for row in csv_data:
            # TODO: Iterate over each subject.
            for subject in subject_scores:
                # TODO: Extract the subject score and
                # TODO: add it to the subject list as an integer.
                subject_scores[subject].append(int(row[subject]))

    # TODO: Iterate over the subject_scores dictionary.
    for subject, scores in subject_scores.items():
        # TODO: Calculate the average score for each subject
        average_subject_score = sum(scores) / len(scores)
        # TODO: Print the average score for each subject.
        print(f"The class average score for {subject}" +
              f" is {average_subject_score:.1f}")

if __name__ == "__main__":
    # TODO: Define the path to the CSV file
    # TODO: Call the function with the file path.
    get_averages(file_path)