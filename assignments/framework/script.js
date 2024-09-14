const pancake = [
  {
    id: 1,
    name: 'Pancake 1',
    grade: 1,
    description: 'First pancake',
    attendance: true,
  },
  {
    id: 2,
    name: 'Pancake 2',
    grade: 2,
    description: 'Second pancake',
    attendance: true,
  },
  {
    id: 3,
    name: 'Pancake 3',
    grade: 3,
    description: 'Third pancake',
    attendance: true,
  },
  {
    id: 4,
    name: 'Pancake 4',
    grade: 4,
    description: 'Fourth pancake',
    attendance: true,
  },
  {
    id: 5,
    name: 'Pancake 5',
    grade: 5,
    description: 'Fifth pancake',
    attendance: true,
  },
];

// lesson function
const lesson = (pancake) => {
  pancake.forEach((item) => {
    if (item.attendance === false) {
      console.log(`${item.name} is absent.`);
    } else {
      console.log(`${item.name} is present.`);
    }
  });
};

lesson(pancake);

// Updated pete function
const pete = (pancake) => {
  pancake.forEach((item) => {
    const hito = Math.floor(item.grade * 3);

    // Check attendance and return a message
    const result = item.attendance ? 'pass' : 'fail';

    console.log(
      `For ${item.name}: Grade * 3 is ${hito}, Attendance: ${result}`,
    );
  });
};

// Call the pete function
pete(pancake);

console.log('Hello Class');
