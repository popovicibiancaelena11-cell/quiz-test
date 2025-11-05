let score = 0;

function showQuiz() {
  document.getElementById("quiz-section").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("quiz-section").offsetTop,
    behavior: "smooth"
  });
}

function addScore(points, btn) {
  score += points;
  const parent = btn.parentElement;
  const buttons = parent.querySelectorAll('button');
  buttons.forEach(b => b.disabled = true);
}

function showResult() {
  let text = "";
  if (score <= 1) {
    text = "🍏 Consumi puțin zahăr — foarte bine!";
  } else if (score <= 3) {
    text = "⚖️ Consumi moderat zahăr — fii atent!";
  } else {
    text = "🍬 Consumi prea mult zahăr — atenție!";
  }

  document.getElementById("result").textContent = text;
}
