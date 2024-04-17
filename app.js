/* Constants (HTML elements) */
const checkAllPeriod = document.querySelectorAll(".check_semester");
const allSubject = document.querySelectorAll(".subject");
const allInfoButton = document.querySelectorAll(".info_button");
const sidebar = document.getElementById("sidebar");


// Array of courses already taken
let progressHistory = [];


/* Functions */
function hideSidebar() {
    sidebar.classList.add("hidden");
}

function hideExploration() {
    allSubject.forEach((subject) => {
        subject.classList.remove("active", "unlocks", "required");
    });
}

function updateCheckSemester(subject) {
    const periodContainer = subject.parentElement;
    const subjects = periodContainer.querySelectorAll(".subject");

    let allChecked = Array.from(subjects).every((e) => {
        return e.classList.contains("finished");
    });

    periodContainer.querySelector(".check_semester").checked = allChecked;
}


/* PROGRESS MODE */

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
            progressHistory.splice(progressHistory.indexOf(subject.id), 1)
            localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
        } else {
            subject.classList.add("finished");
            progressHistory.push(subject.id);
            localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
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
                if (!subject.classList.contains("finished")) {
                    subject.classList.add("finished");
                    progressHistory.push(subject.id);
                    localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
                }
            } else {
                subject.classList.remove("finished");
                progressHistory.splice(progressHistory.indexOf(subject.id), 1)
                localStorage.setItem("progressHistory", JSON.stringify(progressHistory));
            }
            unlockSubjects(subject);
        });
    });
});

// Verifica se todas as matérias do período estão finalizadas, e marca o check_semester se for, ou desmarca se não
allSubject.forEach((subject) => {
    // subject.addEventListener("click", () => {
    subject.addEventListener("click", () => {
        updateCheckSemester(subject);
    });
});


/* EXPLORATION MODE */

allSubject.forEach((subject) => {
    subject.addEventListener("mouseover", function (event) {
        // Remove as classes de todos os elementos
        allSubject.forEach((otherSubject) => {
            otherSubject.classList.remove("active", "unlocks", "required");
        });

        // Adiciona as classes apenas à disciplina clicada
        subject.classList.add("active", "unlocks", "required");

        // Adiciona as classes relacionadas
        allSubject.forEach((relationElement) => {
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


/* SIDEBAR */

allInfoButton.forEach((infoButton) => {
    infoButton.addEventListener("click", function () {
        const subject = courses[infoButton.parentElement.id];
        sidebar.classList.remove("hidden");

        sidebar.innerHTML = `
            <p type="button" id="closeSidebarButton">X</p>
            <h2>${subject.name}</h2>
            <p>Período: ${subject.period}</p>
            <p>Código: ${subject.code}</p>
            <p>Tipo: ${subject.type}</p>
            	
            <ul>    
                ${ 
                    subject.required
                        ? `<h4> Pré-requisitos: </h4>` +
                          subject.required
                              .map((required) => {
                                  return `<li>${courses[required].name}</li>`;
                              })
                              .join("")
                        : ``
                }
            </ul>
            
            <ul>
                ${
                    subject.unlocks
                        ? `<h4> Desbloqueia: </h4>` +
                          subject.unlocks
                              .map((unlock) => {
                                  return `<li>${courses[unlock].name}</li>`;
                              })
                              .join("")
                        : ``
                }
            </ul>
        `;

        document
            .getElementById("closeSidebarButton")
            .addEventListener("click", hideSidebar);
        event.stopPropagation();
    });
});

// Event listener to hide the sidebar when clicking outside
document.body.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target)) {
        hideSidebar();
        hideExploration()
    }
});


/* INITIALIZATION */

// Load progress history from local storage
if (localStorage.getItem("progressHistory")) {
    progressHistory = JSON.parse(localStorage.getItem("progressHistory"));
    progressHistory.forEach((subjectid) => {
        let subject = document.getElementById(subjectid);
        subject.classList.add("finished");
        unlockSubjects(subject)
        updateCheckSemester(subject)
    });
}
