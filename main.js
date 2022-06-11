// get the DOM elements
const studentForm = document.getElementById('studentForm');
const studentContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

//create an empty array to store the students

const students = JSON.parse(localStorage.getItem('students')) || [];

//create a function that will push student into the array created

const addStudent = ( name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });

    localStorage.setItem('students', JSON.stringify(students))

    return { name, age, roll}
}

//create a functio that will create students on the DOM

const createStudentElement = ({ name, age, roll}) => {
    //create student data
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    //add text to the created element
    studentName.innerText = `Student Name: ${name}`;
    studentAge.innerText = `Student Age: ${age}`;    
    studentRoll.innerText = `Roll Number: ${roll}`;

    // append the create data to student div
    studentDiv.append(studentName, studentAge, studentRoll);
    studentContainer.appendChild(studentDiv);

    studentContainer.style.display = students.length === 0 ? 'none' : 'flex'
}

studentContainer.style.display = students.length === 0 ? 'none' : 'flex'

students.forEach(createStudentElement);

// select the form for submission

studentForm.addEventListener('submit', (e) => {
    // to prevent the default submission of form element
    e.preventDefault()

    // 
    const newStudent = addStudent(
        nameInput.value,
        ageInput.value, 
        rollInput.value     
    )
    // pass the input value to the addStudent function to push the values into the student array
    // and to return the value into the createStudentElement
    createStudentElement(newStudent);

    nameInput.value = '';
    ageInput.value = '';
    rollInput.value = '';
});