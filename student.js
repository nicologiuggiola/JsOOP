class Student{

    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.grades = [];
    }

    calculateMean(){ 
        let sum = this.grades.reduce((p, c) => p + c, 0);
        let mean = sum / this.grades.length;
        return mean;
    }

    generateCode(student){
        let now = new Date();
        let actualYear = now.getFullYear();
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }

    addGrade(grade){
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
        }
    }

    toString(){
        let mean = this.calculateMean();

        if (mean === -1) {
            mean = "N/c";
        }

        let studentDescription = "Nome: " + this.name + "\n"
                                + "Cognome: " + this.surname + "\n"
                                + "Età: " + this.age + "\n"
                                + "Media: " + mean;

        return studentDescription;
    }
}






// let student1 = {name: "pippo", surname: "de paolis", age: 13, gender: "M", grades:[7, 9, 10, 3, 2.5]};

// function calculateGradeMean(student){
//     let sum = student.grades.reduce((p, c) => p + c);
//     let mean = sum / student.grades.length;
//     return mean;
// }

// function generateStudentCode(student) {
//     let now = new Date();
//     let actualYear = now.getFullYear();
//     let birthYear = actualYear - student.age;
//     let code = student.name[0] + student.name[1] + student.surname[0] + student.surname[1] + birthYear;
//     return code;
// }
// console.log(generateStudentCode(student1));
// console.log(calculateGradeMean(student1));