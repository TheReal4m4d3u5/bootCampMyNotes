const student = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');

saveButton.addEventListener('click', function (event) {
  event.preventDefault();

  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };

  const studentGradeString = JSON.stringify(studentGrade);

  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
  renderMessage();
});

function renderMessage() {
  const readFromLocalStorage = localStorage.getItem('studentGrade');
  const lastGrade = JSON.parse(readFromLocalStorage);

  console.log(lastGrade, typeof lastGrade);

  if (lastGrade !== null) {
    document.querySelector('.message').textContent =
      lastGrade.student + ` received a/an ${lastGrade.grade}`;
  }
}
