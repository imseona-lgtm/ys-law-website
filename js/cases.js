const CATEGORY_LABELS = {
  arrest: '고소・수사',
  money: '금전피해',
  realestate: '부동산・임대차',
  family: '이혼・상속',
  contract: '계약・사업',
  defamation: '명예・사생활',
  admin: '행정・기타',
};

const finderIntro = document.getElementById('finderIntro');
const situationGrid = document.getElementById('situationGrid');
const resultsView = document.getElementById('resultsView');
const caseList = document.getElementById('caseList');
const tabBar = document.getElementById('tabBar');

function renderCases(filterKey) {
  caseList.innerHTML = '';
  const filtered = filterKey === 'all' ? CASES : CASES.filter((c) => c.tags.includes(filterKey));

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'case-empty';
    empty.textContent = '아직 등록된 사례가 없습니다. 준비 중입니다.';
    caseList.appendChild(empty);
    return;
  }

  filtered.forEach((c) => {
    const card = document.createElement(c.url ? 'a' : 'div');
    card.className = 'case-card';
    if (c.url) card.href = c.url;
    card.innerHTML = `
      <img class="case-thumb" src="${c.image}" alt="" aria-hidden="true">
      <div class="case-body">
        <span class="case-tag-pill">${CATEGORY_LABELS[c.category]}</span>
        <h3 class="case-title">${c.title}</h3>
        <p class="case-desc">${c.desc}</p>
      </div>
    `;
    caseList.appendChild(card);
  });
}

function setActiveTab(key) {
  const validKey = tabBar.querySelector(`.tab[data-tab="${key}"]`) ? key : 'all';
  tabBar.querySelectorAll('.tab').forEach((t) => {
    t.classList.toggle('is-active', t.dataset.tab === validKey);
  });
  renderCases(validKey);
}

function showPicker() {
  finderIntro.hidden = false;
  situationGrid.hidden = false;
  resultsView.hidden = true;
}

function showResults(tag) {
  finderIntro.hidden = true;
  situationGrid.hidden = true;
  resultsView.hidden = false;
  setActiveTab(tag || 'all');
}

function syncFromHash() {
  const tag = window.location.hash.slice(1);
  if (tag) {
    showResults(tag);
  } else {
    showPicker();
  }
}

tabBar.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => setActiveTab(tab.dataset.tab));
});

window.addEventListener('hashchange', syncFromHash);
syncFromHash();
