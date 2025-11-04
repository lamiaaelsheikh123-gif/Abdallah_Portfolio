// إنشاء خلفية برمجية متحركة
function createCodeBackground() {
  const codeBackground = document.getElementById("codeBackground");
  const codeLines = [
    "function welcome() {",
    " console.log('Welcome to my portfolio!');",
    "}",
    "const developer = {",
    " name: 'Abdallah Samir',",
    " skills: ['Python', 'C++', 'JavaScript', 'AI', 'Embedded Systems']",
    "};",
    "class Project {",
    " constructor(name) {",
    " this.name = name;",
    " }",
    "}",
    "document.addEventListener('DOMContentLoaded', welcome);",
    "let portfolio = new Project('Personal Website');",
    "if (userVisit) {",
    " showWelcomeMessage();",
    "}",
    "const tools = ['Arduino', 'Python', 'C++', 'JavaScript', 'HTML', 'CSS'];",
    "for (let i = 0; i < tools.length; i++) {",
    " console.log(Tool: ${tools[i]});",
    "}",
  ];

  codeLines.forEach((line, index) => {
    const codeLine = document.createElement("div");
    codeLine.className = "code-line";
    codeLine.textContent = line;
    codeLine.style.left = Math.random() * 100 + "vw";
    codeLine.style.animationDelay = index * 0.5 + "s";
    codeBackground.appendChild(codeLine);
  });
}

// تبديل وضع الظلام/الفاتح
function setupThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // التحقق من التفضيل المحفوظ
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      localStorage.setItem("darkMode", "disabled");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

// إعداد نافذة المشاريع
function setupProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeModal = document.getElementById("closeModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const projectButtons = document.querySelectorAll(".view-project");

  // فتح النافذة عند النقر على أي زر View Project
  projectButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.textContent = this.getAttribute("data-title");
      modalDescription.textContent = this.getAttribute("data-description");
      modalLink.href = this.getAttribute("data-link");
      modal.style.display = "flex";
    });
  });

  // إغلاق النافذة
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // إغلاق النافذة عند النقر خارج المحتوى
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// تهيئة جميع التأثيرات عند تحميل الصفحة
window.addEventListener("load", function () {
  createCodeBackground();
  setupThemeToggle();
  setupProjectModal();
});
