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

const printTeacher: printTeacherFunction = (firstName: string, lastName:string): string => {
  return `${firstName[0]}. ${lastName}`;
};


interface StudentClassConstructor {
  new(firstName: string, lastName:string): StudentClassInterface;
}


interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
 firstName: string;
 lastName: string;
 constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName
  }

  workOnHomework() {
    return 'Currently working';
    }

 displayName() {
    return this.firstName;
  }
}
