document.querySelectorAll(".subject").forEach(element => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".active").forEach((oldActiveElement) => {
            oldActiveElement.classList.remove("active")
        })
        document.querySelectorAll(".required").forEach((oldRequiredElement) => {
            oldRequiredElement.classList.remove("required")
        })
        document.querySelectorAll(".unlocks").forEach((oldUnlockElement) => {
            oldUnlockElement.classList.remove("unlocks")
        })

        element.classList.add("active")


        document.querySelectorAll(".subject").forEach(relationElement => {
            if (courses[element.id].required) {
                if (courses[element.id].required.includes(relationElement.id)) {
                    relationElement.classList.add("required")
                }
            }
            if (courses[element.id].unlocks) {
                if (courses[element.id].unlocks.includes(relationElement.id)) {
                    relationElement.classList.add("unlocks")
                }
            }
        })
    })
})

document.querySelectorAll(".subject").forEach(element => {
    element.addEventListener("change", () => {
        if (element.querySelector('input[type="checkbox"]').checked) {
            element.classList.add("finished")

            document.querySelectorAll(".subject").forEach(unlockElement => {
                if (courses[element.id].unlocks.includes(unlockElement.id)) {
                    unlockElement.classList.add("unlocked")
                }
            })
        } else {
            element.classList.remove("finished")
            document.querySelectorAll(".subject").forEach(unlockElement => {
                    unlockElement.classList.remove("unlocked")
            })
            
        }
    })
})