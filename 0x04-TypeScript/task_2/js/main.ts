interface DirectorInterface {
  workFromHome(): string;
  getToWork?(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
    }

   getToWork() {
     return 'Getting a coffee break';
     }

    workDirectorTasks () {
      return 'Getting to director tasks';
      }

}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home'
    }

   getCoffeeBreak() {
     return 'Cannot have a break'
     }

    workTeacherTasks() {
     return 'Getting to work'
     }

}


function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
    } else {
      return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee(`$500`));


function isDirector(employee: (Teacher | Director)): employee is Director {
  return employee instanceof Director;
}


function executeWork(employee: (Teacher | Director)): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
    } else {
      return employee.workTeacherTasks();
    }

}


type Subjects = ("Math" | "History");
function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case 'Math':
    return "Teaching Math"
    break;

    case 'History':
    return "Teaching History"
    break;
  } 
}

teachClass('Math');

