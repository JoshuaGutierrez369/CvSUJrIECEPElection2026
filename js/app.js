(function () {
  "use strict";

  const grid = document.getElementById("candidate-grid");
  const filterBar = document.getElementById("filter-bar");
  const searchInput = document.getElementById("search-input");
  const modal = document.getElementById("candidate-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body");
  const resultCount = document.getElementById("result-count");

  let activeCategory = "all";
  let searchQuery = "";

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function renderPlatformContent(candidate) {
    let html = "";

    if (candidate.platformText) {
      return candidate.platformText
        .split("\n\n")
        .map(function (p) {
          return "<p>" + escapeHtml(p) + "</p>";
        })
        .join("");
    }

    if (candidate.platformTagline) {
      html += '<p class="platform-tagline">' + escapeHtml(candidate.platformTagline) + "</p>";
    }

    if (candidate.platformSections) {
      candidate.platformSections.forEach(function (section) {
        html += '<div class="platform-section">';
        html += "<h4>" + escapeHtml(section.title) + "</h4><ul>";
        section.items.forEach(function (item) {
          html += "<li><strong>" + escapeHtml(item.title) + "</strong>";
          if (item.description) {
            html += "<span>" + escapeHtml(item.description) + "</span>";
          }
          html += "</li>";
        });
        html += "</ul></div>";
      });
      return html;
    }

    if (candidate.platformItems) {
      html += "<ul class=" + '"platform-list">';
      candidate.platformItems.forEach(function (item, index) {
        if (typeof item === "string") {
          html += "<li><span>" + escapeHtml(item) + "</span></li>";
          return;
        }

        html += "<li>";
        html += "<strong>" + escapeHtml(item.title) + "</strong>";
        if (item.description) {
          html += "<span>" + escapeHtml(item.description) + "</span>";
        }
        if (item.subItems) {
          html += "<ul class=" + '"platform-sublist">';
          item.subItems.forEach(function (sub) {
            html += "<li>" + escapeHtml(sub) + "</li>";
          });
          html += "</ul>";
        }
        html += "</li>";
      });
      html += "</ul>";
    }

    return html || "<p>Platform details coming soon.</p>";
  }

  function getFilteredCandidates() {
    return CANDIDATES.filter(function (candidate) {
      const matchesCategory = activeCategory === "all" || candidate.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        candidate.name.toLowerCase().includes(query) ||
        candidate.position.toLowerCase().includes(query) ||
        candidate.motto.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).sort(function (a, b) {
      return a.order - b.order;
    });
  }

  function renderFilters() {
    filterBar.innerHTML = CANDIDATE_CATEGORIES.map(function (cat) {
      const active = cat.id === activeCategory ? " is-active" : "";
      return (
        '<button type="button" class="filter-btn' +
        active +
        '" data-category="' +
        cat.id +
        '">' +
        escapeHtml(cat.label) +
        "</button>"
      );
    }).join("");

    filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeCategory = btn.dataset.category;
        renderFilters();
        renderGrid();
      });
    });
  }

  function renderGrid() {
    const list = getFilteredCandidates();
    resultCount.textContent = list.length + " candidate" + (list.length === 1 ? "" : "s");

    if (!list.length) {
      grid.innerHTML = '<div class="empty-state"><p>No candidates match your search.</p></div>';
      return;
    }

    grid.innerHTML = list
      .map(function (candidate) {
        return (
          '<article class="candidate-card" tabindex="0" role="button" data-id="' +
          candidate.id +
          '" aria-label="View platform of ' +
          escapeHtml(candidate.name) +
          '">' +
          '<div class="candidate-card__image-wrap">' +
          '<img src="' +
          candidate.image +
          '" alt="' +
          escapeHtml(candidate.name) +
          " running for " +
          escapeHtml(candidate.position) +
          '" loading="lazy" />' +
          '<span class="candidate-card__badge">Official Candidate</span>' +
          "</div>" +
          '<div class="candidate-card__body">' +
          '<p class="candidate-card__position">' +
          escapeHtml(candidate.position) +
          "</p>" +
          '<h3 class="candidate-card__name">' +
          escapeHtml(candidate.name) +
          "</h3>" +
          '<p class="candidate-card__motto">' +
          escapeHtml(candidate.motto) +
          "</p>" +
          '<span class="candidate-card__cta">View Platform</span>' +
          "</div></article>"
        );
      })
      .join("");

    grid.querySelectorAll(".candidate-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openModal(card.dataset.id);
      });
      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  function openModal(id) {
    const candidate = CANDIDATES.find(function (c) {
      return c.id === id;
    });
    if (!candidate) return;

    modalBody.innerHTML =
      '<div class="modal-hero">' +
      '<img src="' +
      candidate.image +
      '" alt="' +
      escapeHtml(candidate.name) +
      '" />' +
      "</div>" +
      '<div class="modal-content">' +
      '<p class="modal-position">' +
      escapeHtml(candidate.position) +
      "</p>" +
      "<h2>" +
      escapeHtml(candidate.name) +
      "</h2>" +
      '<blockquote class="modal-motto">' +
      escapeHtml(candidate.motto) +
      "</blockquote>" +
      '<div class="modal-platforms">' +
      "<h3>Platforms</h3>" +
      renderPlatformContent(candidate) +
      "</div></div>";

    modal.hidden = false;
    modalBackdrop.hidden = false;
    document.body.classList.add("modal-open");
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    modalBackdrop.hidden = true;
    document.body.classList.remove("modal-open");
    modalBody.innerHTML = "";
  }

  searchInput.addEventListener("input", function (event) {
    searchQuery = event.target.value;
    renderGrid();
  });

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  renderFilters();
  renderGrid();
})();
