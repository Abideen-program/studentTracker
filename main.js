// get the DOM elements
const studentForm = document.getElementById('studentForm');
const studentContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll']

//create an empty array to store the students

const students = [];

//create a function that will push student into the array created

const addStudent = ( name, age, roll) => {
    students.push({
        name,
        age,
        roll
    })

    return { name, age, roll}
}

//create a functio that will create students on the DOM

const createStudentElement = () => {
    //create student data
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    //add text to the created element
    studentName.innerText = `Student Name: ${name}`;
    studentAge.innerText = `Student Name: ${age}`;    
    studentRoll.innerText = `Student Name: ${roll}`;

    // append the create data to student div
    studentDiv.append(studentName, studentAge, studentRoll);
    studentContainer.appendChild(studentDiv);
}