const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirement with corresponding
// regular expression and index of requirement list item

const requirements = [
    { regex: /.{8,}/, index: 0}, // Minimum 8 Charaxters
    { regex: /[0-9]/, index: 1}, // At least 1 Number
    { regex: /[a-z]/, index: 2}, // Atleast 1 Lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3},  // Atleast one special character
    { regex: /[A-Z]/, index: 4}, // Atleast 1 Uppercase letter
]

passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
        // check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // updating icon of requirement item if requirement matched or not
        if(isValid){
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else{
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () =>{
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Updating the eye icon class based on the password input type
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
});
