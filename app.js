// Add event listener to every subject

document.querySelectorAll(".subject").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".active").forEach((oldActiveElement) => {
            oldActiveElement.classList.remove("active")
        })
        document.querySelectorAll(".required").forEach((oldActiveElement) => {
            oldActiveElement.classList.remove("required")
        })
        document.querySelectorAll(".unlock").forEach((oldActiveElement) => {
            oldActiveElement.classList.remove("unlock")
        })
        element.classList.add("active")
        document.querySelectorAll(".subject").forEach(requiredElement => {
            if (courses[element.id].required.includes(requiredElement.id)) {
                requiredElement.classList.add("required")
            }
        })
        document.querySelectorAll(".subject").forEach(unlockElement => {
            if (courses[element.id].unlock.includes(unlockElement.id)) {
                unlockElement.classList.add("unlock")
            }
        })
    })
})

console.log(courses)


// add class active do the clicked subject
// remove class active from the other subjects
// add required class to the subjects that are in the requried of the json courses
// add unlock class to the subjects that are in the unlock of the json courses