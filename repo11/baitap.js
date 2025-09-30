const students = [
    { name: "An", age: 20 },
    { name: "Bình", age: 21 },
    { name: "Châu", age: 20 },
    { name: "Dũng", age: 22 }
  ];
  
  
    const grouped = students.reduce((acc, student) => {
    if (!acc[student.age]) {
      acc[student.age] = [];
    }
    acc[student.age].push(student.name);
    return acc;
  }, {});
  
 
  for (let age in grouped) {
    console.log(`Age ${age}: ${grouped[age].join(", ")}`);
  }
  

const arr = [1, 2, 3, 2, 4, 2, 5, 3, 3, 3, 2];


const frequency = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});


for (let num in frequency) {
  console.log(`Element ${num} appears ${frequency[num]} times`);
}
