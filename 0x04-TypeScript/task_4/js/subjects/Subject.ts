namespace Subjects {
  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
