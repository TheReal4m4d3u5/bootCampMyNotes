const studentList: (number | string)[] = [2, 'Matt', 'Amy', 'Shane', 'Josh', 'Pria'];

const checkStudentRoster = (arr: (string |number)[]): void => {
  arr.forEach((student: (string |number)) => {
    console.log(`${student} is present!`);
  });
};

// Why does this function not fail?
// studentsLIst is an array list and students is a string
studentList.forEach((student) => {
  console.log(`${student} is here!`);
});
