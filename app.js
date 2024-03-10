// Progress Mode
// const allSubjectCheckbox = document.querySelectorAll(".checkbox");
const checkAllPeriod = document.querySelectorAll(".check_all");
const allSubject = document.querySelectorAll(".subject");

function unlockSubjects(subject) {
    if (courses[subject.id].unlocks) {
        courses[subject.id].unlocks.forEach((unlock) => {
            let unlockSubject = document.getElementById(unlock);
            let allRequired = courses[unlock].required.every((required) => {
                return document
                    .getElementById(required)
                    .classList.contains("finished");
            });
            if (allRequired) {
                unlockSubject.classList.add("unlocked");
            } else {
                unlockSubject.classList.remove("unlocked");
            }
        });
    }
}

allSubject.forEach((subject) => {
    subject.addEventListener("click", () => {
        if (subject.classList.contains("finished")) {
            subject.classList.remove("finished");
        } else {
            subject.classList.add("finished");
        }
        unlockSubjects(subject);
    });
});

// marcar todas as matérias de um período
checkAllPeriod.forEach(function (checkAllCheckbox) {
    checkAllCheckbox.addEventListener("change", function () {
        const periodContainer = checkAllCheckbox.parentElement.parentElement;
        const subjects = periodContainer.querySelectorAll(".subject");

        subjects.forEach(function (subject) {
            if (checkAllCheckbox.checked) {
                subject.classList.add("finished");
            } else {
                subject.classList.remove("finished");
            }
            unlockSubjects(subject);
        });
    });
});

// Verifica se todas as matérias do período estão finalizadas, e marca o check_all se for, ou desmarca se não
allSubject.forEach((subject) => {
    subject.addEventListener("click", () => {
        const periodContainer = subject.parentElement;
        const subjects = periodContainer.querySelectorAll(".subject");

        let allChecked = Array.from(subjects).every((e) => {
            return e.classList.contains("finished");
        });

        periodContainer.querySelector(".check_all").checked = allChecked;
    });
});

//Exploration Mode
allSubject.forEach((subject) => {
    subject.addEventListener("mouseover", function (event) {
        // Remove as classes de todos os elementos
        allSubject.forEach((otherSubject) => {
            otherSubject.classList.remove("active", "unlocks", "required");
        });

        // Adiciona as classes apenas à disciplina clicada
        subject.classList.add("active", "unlocks", "required");

        // Adiciona as classes relacionadas
        document.querySelectorAll(".subject").forEach((relationElement) => {
            if (
                courses[subject.id].required &&
                courses[subject.id].required.includes(relationElement.id)
            ) {
                relationElement.classList.add("required");
            }
            if (
                courses[subject.id].unlocks &&
                courses[subject.id].unlocks.includes(relationElement.id)
            ) {
                relationElement.classList.add("unlocks");
            }
        });

        // Impede a propagação do clique para o body
        event.stopPropagation();
    });
});
// Adiciona o listener de clique para o body
document.body.addEventListener("mouseover", function () {
    // Remove as classes de todos os elementos
    allSubject.forEach((subject) => {
        subject.classList.remove("active", "unlocks", "required");
    });
});
