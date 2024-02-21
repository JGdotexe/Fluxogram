// Algoritmo para clicar numa matéria e mostrar suas relações
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

// Algoritmo para marcar uma matéria concluída e mostrar quais estão disponíveis após ela
// Código completamente errado, garbage, fazer do zero (deixei só para referencia de como usar algumas funções do JS)
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

// Algoritmo para marcar todas as matérias de um período
// Existem alguns detalhes que precisam ser resolvidos:
// - Se marcar o checkAll, e depois desmarcar apenas uma matéria (coisa que os usuários vão fazer para ganhar tempo), o botão checkAll ainda continua marcado, mas ele deveria ser desmarcado (porém sem tirar o check das outras matérias)
// - Se o usuário marcar todas as matérias manualmente, o botão checkAll deveria se marcar sozinho, essa é a mais trabalhosa e não é tão necessária, se quiser ignorar ela pode
const checkAllCheckboxes = document.querySelectorAll('.check_all');
const subjects = document.querySelectorAll('.subject');
const checkboxes = document.querySelectorAll('.checkbox');

checkAllCheckboxes.forEach(function(checkAllCheckbox) {
    checkAllCheckbox.addEventListener('change', function() {
        const periodContainer = checkAllCheckbox.parentElement.parentElement;
        const periodSubjects = periodContainer.querySelectorAll('.subjects');
        const subjectCheckboxes = periodContainer.querySelectorAll('.checkbox');

        subjectCheckboxes.forEach(function(subjectCheckbox) {
            subjectCheckbox.checked = checkAllCheckbox.checked;
        });
/*         const checkboxes = document.querySelectorAll('.period .checkbox');

            checkboxes.forEach(checkbox =>{
                const parentPeriodId = checkbox.closest('.period').id;
            }) */
            
        subjectCheckboxes.forEach(function(subjectCheckbox) {
            const parentElement = subjectCheckbox.parentElement;
            
            if (subjectCheckbox.checked) {
                parentElement.classList.add('finished');
            } else {
                    parentElement.classList.remove('finished');
            }
            
            subjects.forEach(function(unlockElement) {
                if (courses[subjectCheckbox.id].unlocks.includes(unlockElement.id)) {
                    unlockElement.classList.add("unlocked");
                } else {
                    unlockElement.classList.remove("unlocked");
                }
            });
        })
    });
});