const allSubjectCheckbox = document.querySelectorAll(".checkbox");
const checkAllPeriod = document.querySelectorAll(".check_all");
const allSubject = document.querySelectorAll(".subject");

// Algoritmo para marcar uma matéria concluída e mostrar quais estão disponíveis após ela
// Código ainda em desenvolvimento

function unlockSubjects(checkbox) {
    const subject = checkbox.parentElement;
    if (courses[subject.id].unlocks) {
        courses[subject.id].unlocks.forEach((unlock) => {
            let unlockSubject = document.getElementById(unlock);
            let allRequired = courses[unlock].required.every((required) => {
                return document
                    .getElementById(required)
                    .querySelector(".checkbox").checked;
            });
            if (allRequired) {
                unlockSubject.classList.add("unlocked");
            } else {
                unlockSubject.classList.remove("unlocked");
            }
        });
    }
}

allSubjectCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkbox.parentElement.classList.add("finished");
        } else {
            checkbox.parentElement.classList.remove("finished");
        }
        unlockSubjects(checkbox);
    });
});

// Algoritmo para marcar todas as matérias de um período
checkAllPeriod.forEach(function (checkAllCheckbox) {
    checkAllCheckbox.addEventListener("change", function () {
        const periodContainer = checkAllCheckbox.parentElement.parentElement;
        const subjectCheckboxes = periodContainer.querySelectorAll(".checkbox");

        subjectCheckboxes.forEach(function (subjectCheckbox) {
            subjectCheckbox.checked = checkAllCheckbox.checked;
            const subject = subjectCheckbox.parentElement;

            if (subjectCheckbox.checked) {
                subject.classList.add("finished");
            } else {
                subject.classList.remove("finished");
            }
            unlockSubjects(subjectCheckbox);
        });
    });
});

// Verifica se todas as matérias do período estão marcadas, e marca o check_all se for, ou desmarca se não
allSubjectCheckbox.forEach((element) => {
    element.addEventListener("change", () => {
        const periodContainer = element.parentElement.parentElement;
        const subjectCheckboxes = periodContainer.querySelectorAll(".checkbox");

        let allChecked = Array.from(subjectCheckboxes).every((checkbox) => {
            return checkbox.checked;
        });

        periodContainer.querySelector(".check_all").checked = allChecked;
    });
});

//Nova Função Exploration Mode
// Adiciona o listener de clique para cada disciplina
allSubject.forEach((subject) => {
    subject.addEventListener('click', function(event) {
        // Remove as classes de todos os elementos
        allSubject.forEach((otherSubject) => {
            otherSubject.classList.remove("active", "unlocks", "required");
        });

        // Adiciona as classes apenas à disciplina clicada
        subject.classList.add("active", "unlocks", "required");

        // Adiciona as classes relacionadas
        document.querySelectorAll(".subject").forEach((relationElement) => {
            if (courses[subject.id].required && courses[subject.id].required.includes(relationElement.id)) {
                relationElement.classList.add("required");
            }
            if (courses[subject.id].unlocks && courses[subject.id].unlocks.includes(relationElement.id)) {
                relationElement.classList.add("unlocks");
            }
        });

        // Impede a propagação do clique para o body
        event.stopPropagation();
    });
});
// Adiciona o listener de clique para o body
document.body.addEventListener('click', function() {
    // Remove as classes de todos os elementos
    allSubject.forEach((subject) => {
        subject.classList.remove("active", "unlocks", "required");
    });
});
