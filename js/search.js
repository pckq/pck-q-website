const publications = [
  {
    title:
      'Kongmanee, Jaturong "Parallel Affinity Propagation Clustering in Identifying Sub-Network Biomarker Genes of Lung Cancer." In Proceedings of the 7th International Conference on Computational Systems-Biology and Bioinformatics, pp. 19-23. 2016.',
  },
  {
    title:
      'Thanyathorn Thanapattheerakul "Parallel Affinity Propagation Clustering in Identifying Sub-Network Biomarker Genes of Lung Cancer." In Proceedings of the 7th International Conference on Computational Systems-Biology and Bioinformatics, pp. 19-23. 2016.',
  },
  {
    title:
      'Jonathan H. Chan. "Parallel Affinity Propagation Clustering in Identifying Sub-Network Biomarker Genes of Lung Cancer." In Proceedings of the 7th International Conference on Computational Systems-Biology and Bioinformatics, pp. 19-23. 2016.',
  },
];

function findMatches(wordToMatch, publications) {
  return publications.filter((item) => {
    const regex = new RegExp(wordToMatch, "gi");
    return item.title.match(regex);
  });
}

function displayMatches(e) {
  if (e.which === 13 || e.key == "Enter" || e.code == "Enter") {
    e.preventDefault();
    return false;
  }

  const matchedArray = findMatches(this.value, publications);

  const html = matchedArray
    .map((item) => {
      const regex = new RegExp(this.value, "gi");
      const serachResult = item.title.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
        <li>
        <h4 class="about-school-detail" style="text-align: justify;">${serachResult}</h4>
        </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function showList() {
  const html = publications
    .map((item) => {
      return `
        <li>
        <h4 class="about-school-detail" style="text-align: justify;">${item.title}</h4>
        </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const serachInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

serachInput.addEventListener("change", displayMatches);
serachInput.addEventListener("keyup", displayMatches);
// showList();
