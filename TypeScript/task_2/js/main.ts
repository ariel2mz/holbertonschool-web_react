interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};



interface StudentInstance {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentInstance{
    firstName: string;
    lastName: string;

    constructor(nombre: string, apellido: string) {
        this.firstName = nombre;
        this.lastName = apellido;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}

interface DirectorInterface {
    workFromHome() : string;
    getCoffeBreak() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface {
    workFromHome() : string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workTeacherTasks(): string {
        return "Getting to director tasks"
    }
}
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

