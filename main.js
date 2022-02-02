 //let student1 = {name: "pippo", surname: "de paolis", age: 13, gender: "M", grades:[7, 9, 10, 3, 2.5]};

 let student1 =  new Student("pippo", "de paolis", 13, "M");

 student1.addGrade(7);
 student1.addGrade(9);
 student1.addGrade(10);
 student1.addGrade(3);
 student1.addGrade(2.5);

 let student2 =  new Student("paperino", "duck", 13, "M");

 console.log(student1.grades)
 console.log(student1.calculateMean());
 console.log(student1.generateCode());
 console.log(student1.toString());
 console.log(student2.toString());
// console.log(generateStudentCode(student1));
// console.log(calculateGradeMean(student1));