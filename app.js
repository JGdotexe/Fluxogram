const allSubjectCheckbox = document.querySelectorAll(".checkbox");
const checkAllPeriod = document.querySelectorAll(".check_all");
const allSubject = document.querySelectorAll(".subject");

// Algoritmo para clicar numa matéria e mostrar suas relações
allSubject.forEach((element) => {
    element.addEventListener("click", () => {
        document.querySelectorAll(".active").forEach((oldActiveElement) => {
            oldActiveElement.classList.remove("active");
        });
        document.querySelectorAll(".required").forEach((oldRequiredElement) => {
            oldRequiredElement.classList.remove("required");
        });
        document.querySelectorAll(".unlocks").forEach((oldUnlockElement) => {
            oldUnlockElement.classList.remove("unlocks");
        });

        element.classList.add("active");

        document.querySelectorAll(".subject").forEach((relationElement) => {
            if (courses[element.id].required) {
                if (courses[element.id].required.includes(relationElement.id)) {
                    relationElement.classList.add("required");
                }
            }
            if (courses[element.id].unlocks) {
                if (courses[element.id].unlocks.includes(relationElement.id)) {
                    relationElement.classList.add("unlocks");
                }
            }
        });
    });
});

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
