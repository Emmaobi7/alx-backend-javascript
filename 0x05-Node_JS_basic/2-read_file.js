const fs = require('fs');

function countStudents(path) {
  let count = 0;
  const nameList = [];
  const nameList2 = [];
  let cs = 0;

  try {
    let dataAll = fs.readFileSync(path, 'utf-8').split('\n');
    dataAll = dataAll.slice(1, dataAll.length - 1);
    dataAll.forEach((data) => {
      count += 1;
      const d = data.slice(-2);
      let f;
      if (d === 'CS') {
        cs += 1;
        [f] = data.split(',');
        nameList.push(f);
      } else {
        [f] = data.split(',');
        nameList2.push(f);
      }
    });
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${cs}. List: ${nameList}`);
    console.log(`Number of students in SWE: ${Number(count - cs)}. List: ${nameList2}`);
  } catch (error) {
    throw new Error('Cannot load database');
  }
}

module.exports = countStudents;
