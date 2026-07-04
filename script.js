const votos = {
  t1: { like: 0, dislike: 0 },
  t2: { like: 0, dislike: 0 },
  t3: { like: 0, dislike: 0 }
};

function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function like(id) {
  votos[id].like++;
  atualizarRanking();
}

function dislike(id) {
  votos[id].dislike++;
  atualizarRanking();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function atualizarRanking() {
  const ranking = Object.entries(votos)
    .map(([id, v]) => ({
      id,
      score: v.like - v.dislike
    }))
    .sort((a, b) => b.score - a.score);

  const nomes = {
    t1: "Jar Jar Binks Sith secreto",
    t2: "Palpatine controlou tudo",
    t3: "Anakin e o destino sombrio"
  };

  let html = "";
  ranking.forEach((r, i) => {
    html += `<p><b>Top ${i + 1}</b> - ${nomes[r.id]} (score: ${r.score})</p>`;
  });

  document.getElementById("rankingBox").innerHTML = html;
}

atualizarRanking();
