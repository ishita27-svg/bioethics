// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let el of revealElements) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  }
});

// Interactive Quiz (for quiz.html)
function startQuiz() {
  let score = 0;
  const answers = {
    q1: 'b',
    q2: 'c',
    q3: 'a',
    q4: 'a'
  };
  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) score++;
  }
  alert(`You scored ${score} / ${Object.keys(answers).length}`);
}
const pages = [
    "index.html",
    "what-is-cyber-ethics.html",
    "types-of-cyber-crimes.html",
    "cyber-laws-india.html",
    "cyberbullying-awareness.html",
    "digital-footprint.html",
    "ethical-use.html",
    "online-safety-tips.html",
    "case-studies.html",
    "about.html",
    "quiz.html"
];

const current = window.location.pathname.split("/").pop();
const index = pages.indexOf(current);

const prev = document.getElementById("prevPage");
const next = document.getElementById("nextPage");

// Previous Page
if (index > 0) {
    prev.href = pages[index - 1];
} else {
    prev.style.display = "none";  // hide on first page
}

// Next Page
if (index < pages.length - 1) {
    next.href = pages[index + 1];
} else {
    next.style.display = "none";  // hide on last page
}
