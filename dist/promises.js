const promiseThemes = {
  "Faithfulness": { icon: "anchor", color: "#f0b43c" },
  "Presence": { icon: "pin", color: "#5cb3ff" },
  "Prayer": { icon: "hands", color: "#c792ea" },
  "Guidance": { icon: "compass", color: "#50c878" },
  "Peace and Rest": { icon: "moon", color: "#84d2f6" },
  "Strength and Courage": { icon: "mountain", color: "#ffb347" },
  "Provision and Care": { icon: "basket", color: "#8fd175" },
  "Protection and Deliverance": { icon: "shield", color: "#65a8ff" },
  "Forgiveness and Cleansing": { icon: "drop", color: "#71d4d4" },
  "Salvation and Grace": { icon: "cross", color: "#ffd166" },
  "Healing and Restoration": { icon: "spark", color: "#ff8fa3" },
  "Hope and Future": { icon: "sunrise", color: "#f6c85f" },
  "Love and Mercy": { icon: "heart", color: "#ff7a90" },
  "New Life and the Spirit": { icon: "flame", color: "#ffa45b" },
  "Joy and Comfort": { icon: "sun", color: "#ffe066" },
  "Eternal Life and Kingdom": { icon: "crown", color: "#d9b45f" },
  "Calling and Fruitfulness": { icon: "tree", color: "#79c267" }
};

const iconPaths = {
  anchor: '<path d="M12 3v18"/><path d="M8 7h8"/><path d="M5 12a7 7 0 0 0 14 0"/><path d="M3 14l2-2 2 2"/><path d="M17 14l2-2 2 2"/>',
  pin: '<path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  hands: '<path d="M8 12V5.5a2 2 0 0 1 4 0V13"/><path d="M12 13V4.5a2 2 0 0 1 4 0V14"/><path d="M7 12l-1.7 1.7a3 3 0 0 0 0 4.2L8.4 21H16a4 4 0 0 0 4-4v-4"/><path d="M5 14l4 4"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5 5-2.2z"/>',
  moon: '<path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5z"/>',
  mountain: '<path d="M3 20h18L14 7l-4 7-2-3-5 9z"/><path d="M14 7l-2.4 4H16"/>',
  basket: '<path d="M5 10h14l-1.4 9H6.4L5 10z"/><path d="M8 10l4-6 4 6"/><path d="M9 14h6"/><path d="M9 17h6"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3z"/><path d="M9 12l2 2 4-5"/>',
  drop: '<path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z"/><path d="M9 15a3 3 0 0 0 5 2.2"/>',
  cross: '<path d="M12 3v18"/><path d="M6.5 8.5h11"/>',
  spark: '<path d="M12 3l1.8 5.1L19 10l-5.2 1.9L12 17l-1.8-5.1L5 10l5.2-1.9L12 3z"/><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15z"/>',
  sunrise: '<path d="M4 18h16"/><path d="M7 15a5 5 0 0 1 10 0"/><path d="M12 4v4"/><path d="M4.9 7.9l2.8 2.8"/><path d="M19.1 7.9l-2.8 2.8"/>',
  heart: '<path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1z"/>',
  flame: '<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6.5-5-9-.5 2-1.5 3.3-3 4.5C9.3 11.9 8 13.3 8 16a4 4 0 0 0 8 0c0-1.9-1.1-3-2.2-4.3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.9 4.9l2.1 2.1"/><path d="M17 17l2.1 2.1"/><path d="M19.1 4.9L17 7"/><path d="M7 17l-2.1 2.1"/>',
  crown: '<path d="M4 18h16"/><path d="M5 18l1.5-10 4 4 1.5-6 1.5 6 4-4L19 18"/><path d="M7 21h10"/>',
  tree: '<path d="M12 21v-7"/><path d="M7 14a5 5 0 0 1 10 0"/><path d="M5 11a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11"/><path d="M9 21h6"/>'
};

const promises = window.goodNewsPromises || [];
const grid = document.getElementById("promisesGrid");
const searchInput = document.getElementById("promiseSearch");
const countLabel = document.getElementById("promiseCount");
const emptyMessage = document.getElementById("promiseEmpty");
const themeStrip = document.getElementById("themeStrip");

function iconMarkup(theme) {
  const meta = promiseThemes[theme] || promiseThemes.Faithfulness;
  return `<span class="theme-icon" style="--theme-color: ${meta.color}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${iconPaths[meta.icon]}</svg></span>`;
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function promiseMatches(item, rawQuery) {
  if (!rawQuery) return true;
  const exactQuery = rawQuery.toLowerCase().trim();
  if (exactQuery.includes(":")) {
    return item.reference.toLowerCase().includes(exactQuery);
  }
  const query = normalize(rawQuery);
  const searchable = normalize(`${item.day} ${item.theme} ${item.reference}`);
  return query.split(" ").every(part => searchable.includes(part));
}

function renderThemeStrip() {
  const themes = [...new Set(promises.map(item => item.theme))];
  themeStrip.replaceChildren(...themes.map(theme => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-filter";
    button.innerHTML = `${iconMarkup(theme)}<span>${theme}</span>`;
    button.addEventListener("click", () => {
      searchInput.value = theme;
      renderPromises();
      searchInput.focus();
    });
    return button;
  }));
}

function renderPromises() {
  const query = searchInput.value.trim();
  const filtered = promises.filter(item => promiseMatches(item, query));
  countLabel.textContent = `${filtered.length} ${filtered.length === 1 ? "promise" : "promises"}`;
  emptyMessage.hidden = filtered.length > 0;

  grid.replaceChildren(...filtered.map(item => {
    const card = document.createElement("a");
    card.className = "promise-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.innerHTML = `
      <div class="promise-card-top">
        ${iconMarkup(item.theme)}
        <span class="promise-day">Day ${String(item.day).padStart(3, "0")}</span>
      </div>
      <h3>${item.reference}</h3>
      <p>${item.theme}</p>
      <span class="promise-source">Read in GNT</span>
    `;
    return card;
  }));
}

searchInput.addEventListener("input", renderPromises);
renderThemeStrip();
renderPromises();
