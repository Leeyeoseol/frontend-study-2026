//학생 객체 3개 배열
let students = [
  { name: "남예준", score: 90 },
  { name: "한노아", score: 78 },
  { name: "채밤비", score: 65 },
];

//getAverage(students)
function getAverage(students) {
  let sum = 0;

  for (let stu of students) {
    sum += stu.score;
  }

  //평균
  return sum / students.length;
}

//console.log
console.log(getAverage(students));
