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

//transforma essa função de cima numa função de verdade poha, bagulho estranho, ainda por cima eu poderia usar ela na função que eu tava tentando fazer aqui embaixo, mas eu n sei como, se der pra fazer perdoe minha ignorância

const checkAllCeckboxes = document.querySelectorAll('.check_all');

checkAllCeckboxes.forEach(function(checkAllCeckboxes){
    checkAllCeckboxes.addEventListener('change', function() {
        const periodContainer = checkAllCeckboxes.parentElement.parentElement;
        const subjectCheckboxes = periodContainer.querySelectorAll('.checkbox');

        subjectCheckboxes.forEach(function(checkbox){
        checkbox.checked = checkAllCeckboxes.checked;
       }) 
    })
})