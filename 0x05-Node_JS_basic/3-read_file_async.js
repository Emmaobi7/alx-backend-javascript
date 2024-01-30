const fs = require('fs');

function countStudents(path) {
  return new Promise(((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }
      const msgList = [];
      let msg;
      const content = data.split('\n');
      let students = content.filter((item) => item);
      students = students.map((item) => item.split(','));
      const nStudents = students.length ? students.length - 1 : 0;
      msg = `Number of students: ${nStudents}`;
      console.log(msg);
      msgList.push(msg);
      const dept = {};
      for (const i in students) {
        if (i !== 0) {
          if (!dept[students[i][3]]) dept[students[i][3]] = [];
          dept[students[i][3]].push(students[i][0]);
        }
      }
      delete dept.subject;
      for (const key of Object.keys(dept)) {
        msg = `Number of students in ${key}: ${dept[key].length}. List: ${dept[key].join(', ')}`;
        console.log(msg);
        msgList.push(msg);
      }
      resolve(msg);
    });
  }));
}
module.exports = countStudents;
