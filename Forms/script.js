
// Select the input element with id "firstname" #first excercise
const firstInput = document.getElementById("firstname");

// Select the span element with id "display-firstname"
const displayFirstName = document.getElementById('display-firstname');

// Add an event listener for the keyup event to the input element
firstInput.addEventListener("keyup", function (event) {
    // Get the value of the input
    const inputText = event.target.value;
    // Assign the input value to the text content of the span element
     displayFirstName.textContent = inputText;

});

// 2 excercise

const secondInput = document.getElementById("age");

const sectionHard = document.getElementById("a-hard-truth");

secondInput.addEventListener("keyup",function (event) {
    let copy = secondInput.value;
    if (copy < 18) {
        sectionHard.style.visibility = "hidden";
    } else {
        sectionHard.style.visibility = "visible";
}
});

//3 Excercise
const password = document.querySelector("#pwd");
const confirmPassword = document.querySelector('#pwd-confirm')

password.addEventListener("keyup",validatePassword);
confirmPassword.addEventListener("keyup",validatePassword);

function validatePassword() {
    let pass = password.value;
    let confirmPassw = confirmPassword.value;

if (pass.length < 6  || pass !== confirmPassw) {
    password.style.border = "2px solid red";
    confirmPassword.style.border  ="2px solid red";
    } else {
        password.style.border = "2px solid #ccc";
        confirmPassw.style.border = "2px solid #ccc";
}
};
//4 Excercise
const darkMode = document.getElementById("toggle-darkmode");

darkMode.addEventListener("change",(event)=> {
    const selectedOption = event.target.value;

    if (selectedOption === "dark") {
        document.body.style.background =  "#000000";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "black";
    }


});

