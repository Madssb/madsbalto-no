// age.js
const birthDate = new Date("2001-06-25");

function calculateAge() {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
        now.getMonth() > birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }
    return age;
}

function updateAgeElement() {
    const el = document.getElementById("myage");
    if (el) {
        el.textContent = calculateAge();
    }
}

document.addEventListener("DOMContentLoaded", updateAgeElement);