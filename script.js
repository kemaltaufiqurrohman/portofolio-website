// ====== PROJECT DATA ======
const projects = {
    project1: {
        title: "Website Tugas",
        description: "Website sederhana menggunakan HTML, CSS, dan JS. Dibuat untuk latihan praktikum.",
        link: "https://github.com/username/project1"
    },
    project2: {
        title: "Mini Game",
        description: "Game kecil berbasis JavaScript, interaktif dan menyenangkan untuk dimainkan.",
        link: "https://github.com/username/project2"
    },
    project3: {
        title: "Desain UI",
        description: "Kumpulan desain UI yang saya buat menggunakan Figma sebagai latihan.",
        link: "https://figma.com/file/your-figma-link"
    }
};

// ====== MODAL FUNCTION ======
function openModal(projectId) {
    const modal = document.getElementById("modal");
    const data = projects[projectId];

    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-description").textContent = data.description;
    document.getElementById("modal-link").href = data.link;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};

// ====== SCROLL FUNCTION ======
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ====== THEME TOGGLE ======
function toggleTheme() {
    document.body.classList.toggle("dark");
}
