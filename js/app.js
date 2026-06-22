(function () {
  "use strict";

  /* ============================================================
   *  DOM REFERENCES
   * ============================================================ */
  const grid = document.getElementById("candidate-grid");
  const filterBar = document.getElementById("filter-bar");
  const searchInput = document.getElementById("search-input");
  const modal = document.getElementById("candidate-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body");
  const resultCount = document.getElementById("result-count");

  // view-switcher buttons
  const viewNavButtons = document.querySelectorAll(".view-nav__btn");
  const viewResults = document.getElementById("view-results");
  const viewCandidates = document.getElementById("view-candidates");

  // results containers
  const resultsStats = document.getElementById("results-stats");
  const turnoutChart = document.getElementById("turnout-chart");
  const resultsOfficers = document.getElementById("results-officers");
  const votesCastPlaceholder = document.getElementById("votes-cast-placeholder");

  /* ============================================================
   *  STATE
   * ============================================================ */
  let activeCategory = "all";
  let searchQuery = "";
  let activeView = "results"; // "results" | "candidates"

  /* ============================================================
   *  UTILITIES
   * ============================================================ */
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function formatPct(p) {
    return (p * 100).toFixed(1) + "%";
  }

  function findCandidateById(id) {
    return CANDIDATES.find(function (c) {
      return c.id === id;
    });
  }

  /* ============================================================
   *  VIEW SWITCHING
   * ============================================================ */
  function switchView(view) {
    activeView = view;

    viewNavButtons.forEach(function (btn) {
      const isActive = btn.dataset.view === view;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    if (view === "results") {
      viewResults.classList.add("view--active");
      viewResults.removeAttribute("hidden");
      viewCandidates.classList.remove("view--active");
      viewCandidates.setAttribute("hidden", "");
    } else {
      viewCandidates.classList.add("view--active");
      viewCandidates.removeAttribute("hidden");
      viewResults.classList.remove("view--active");
      viewResults.setAttribute("hidden", "");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  viewNavButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      switchView(btn.dataset.view);
    });
  });

  /* ============================================================
   *  CANDIDATE MODAL (shared by both views)
   * ============================================================ */
  function renderCredentials(candidate) {
    const items = CANDIDATE_CREDENTIALS[candidate.id];
    if (!items || !items.length) {
      return "";
    }

    return (
      '<div class="modal-credentials">' +
      "<h3>Leadership Credentials</h3>" +
      '<ul class="credentials-list">' +
      items
        .map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        })
        .join("") +
      "</ul></div>"
    );
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
        html += "<h4>" + escapeHtml(section.title) + "</h4>";
        html += '<ul class="platform-list">';
        section.items.forEach(function (item) {
          html += "<li><strong>" + escapeHtml(item.title) + "</strong>";
          if (item.description) {
            html += '<span class="platform-desc">' + escapeHtml(item.description) + "</span>";
          }
          html += "</li>";
        });
        html += "</ul></div>";
      });
      return html;
    }

    if (candidate.platformItems) {
      html += '<ul class="platform-list">';
      candidate.platformItems.forEach(function (item) {
        if (typeof item === "string") {
          html += "<li><span>" + escapeHtml(item) + "</span></li>";
          return;
        }

        html += "<li>";
        html += "<strong>" + escapeHtml(item.title) + "</strong>";
        if (item.description) {
          html += '<span class="platform-desc">' + escapeHtml(item.description) + "</span>";
        }
        if (item.subItems) {
          html += '<ul class="platform-sublist">';
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

  function openModal(id) {
    const candidate = findCandidateById(id);
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
      renderCredentials(candidate) +
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

  /* ============================================================
   *  CANDIDATES VIEW (filtering + grid) — original behaviour
   * ============================================================ */
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
      const officeClass = cat.id === "all" ? "" : " filter-btn--office";
      const title = cat.description ? ' title="' + escapeHtml(cat.description) + '"' : "";
      const desc = cat.description
        ? '<span class="filter-btn__desc">' + escapeHtml(cat.description) + "</span>"
        : "";

      return (
        '<button type="button" class="filter-btn' +
        officeClass +
        active +
        '" data-category="' +
        cat.id +
        '"' +
        title +
        ">" +
        '<span class="filter-btn__code">' +
        escapeHtml(cat.label) +
        "</span>" +
        desc +
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

  /* ============================================================
   *  RESULTS VIEW RENDERING
   * ============================================================ */
  function renderResultsStats() {
    const t = ELECTION_RESULTS.totals;
    const cards = [
      { value: t.votesCast, label: "Votes Cast (Final)" },
      { value: t.eligibleVoters, label: "Eligible Voters" },
      { value: formatPct(t.turnoutPct / 100), label: "Overall Turnout" },
      { value: t.totalSeats, label: "Seats Filled" },
      { value: t.contestedRaces, label: "Contested Races" }
    ];

    resultsStats.innerHTML = cards
      .map(function (c) {
        return (
          '<div class="stat-card">' +
          '<div class="stat-card__value">' +
          escapeHtml(String(c.value)) +
          "</div>" +
          '<p class="stat-card__label">' +
          escapeHtml(c.label) +
          "</p>" +
          "</div>"
        );
      })
      .join("");

    if (votesCastPlaceholder) {
      votesCastPlaceholder.textContent = String(t.votesCast);
    }
  }

  function renderTurnoutChart() {
    const rows = ELECTION_RESULTS.sectionTurnout.slice().sort(function (a, b) {
      return b.voted / b.enrolled - a.voted / a.enrolled;
    });

    turnoutChart.innerHTML =
      rows
        .map(function (s) {
          const pct = s.voted / s.enrolled;
          const lowClass = pct < 0.3 ? " turnout-row__fill--low" : "";
          return (
            '<div class="turnout-row">' +
            '<span class="turnout-row__section">Sec ' +
            escapeHtml(s.section) +
            "</span>" +
            '<div class="turnout-row__track">' +
            '<div class="turnout-row__fill' +
            lowClass +
            '" style="width:' +
            (pct * 100).toFixed(1) +
            '%"></div>' +
            "</div>" +
            '<span class="turnout-row__pct">' +
            s.voted +
            "/" +
            s.enrolled +
            " · " +
            formatPct(pct) +
            "</span>" +
            "</div>"
          );
        })
        .join("") +
      '<div class="turnout-legend">' +
      '<span><i style="background:linear-gradient(90deg,#ffb300,#e65100)"></i> Healthy turnout</span>' +
      '<span><i style="background:linear-gradient(90deg,#ff8a80,#c62828)"></i> Below 30%</span>' +
      "</div>";
  }

  // builds a clickable winner card that opens the platform modal
  function winnerCard(position, c, raceType) {
    const contestedCls = raceType === "contested" ? " winner-card--contested" : "";
    const badge =
      raceType === "contested"
        ? '<span class="winner-card__badge winner-card__badge--contested">Contested</span>'
        : raceType === "multi"
          ? '<span class="winner-card__badge winner-card__badge--multi">Multi-Seat</span>'
          : '<span class="winner-card__badge">Elected</span>';

    return (
      '<article class="winner-card' +
      contestedCls +
      '" tabindex="0" role="button" data-candidate-id="' +
      escapeHtml(c.candidateId) +
      '" aria-label="View platform of ' +
      escapeHtml(c.name) +
      '">' +
      badge +
      '<p class="winner-card__position">' +
      escapeHtml(position) +
      "</p>" +
      '<h3 class="winner-card__name">' +
      escapeHtml(c.name) +
      "</h3>" +
      '<div class="winner-card__row">' +
      '<span class="winner-card__votes">' +
      c.votes +
      " votes</span>" +
      '<span class="winner-card__pct">' +
      formatPct(c.pct) +
      "</span>" +
      "</div>" +
      '<span class="winner-card__cta">View Platform &rsaquo;</span>' +
      "</article>"
    );
  }

  function renderOfficers() {
    const html = ELECTION_RESULTS.tierOrder.map(function (tierName) {
      const seats = ELECTION_RESULTS.officers.filter(function (o) {
        return o.tier === tierName;
      });
      if (!seats.length) return "";

      const seatsHtml = seats
        .map(function (seat) {
          if (seat.raceType === "contested") {
            const winner = seat.candidates.find(function (c) {
              return c.status === "winner";
            });
            const runner = seat.candidates.find(function (c) {
              return c.status === "runnerup";
            });

            let card = winner ? winnerCard(seat.position, winner, "contested") : "";
            if (card && runner) {
              const runnerRow =
                '<div class="runnerup-row"><span class="runnerup-row__name">Runner-up: ' +
                escapeHtml(runner.name) +
                '</span><button type="button" class="runnerup-row__pct" data-candidate-id="' +
                escapeHtml(runner.candidateId) +
                '">' +
                runner.votes +
                " votes · " +
                formatPct(runner.pct) +
                "</button></div>";
              card = card.replace("</article>", runnerRow + "</article>");
            }
            return card;
          }

          if (seat.raceType === "multi") {
            const roster = seat.candidates
              .map(function (c) {
                return (
                  '<div class="multi-roster__member">' +
                  '<button type="button" class="multi-roster__name" data-candidate-id="' +
                  escapeHtml(c.candidateId) +
                  '">' +
                  escapeHtml(c.name) +
                  "</button>" +
                  '<span class="multi-roster__pct">' +
                  c.votes +
                  " · " +
                  formatPct(c.pct) +
                  "</span>" +
                  "</div>"
                );
              })
              .join("");

            return (
              '<article class="winner-card winner-card--multi">' +
              '<span class="winner-card__badge winner-card__badge--multi">Multi-Seat Unit</span>' +
              '<p class="winner-card__position">' +
              escapeHtml(seat.position) +
              "</p>" +
              '<div class="multi-roster">' +
              roster +
              "</div>" +
              '<p class="multi-note">' +
              escapeHtml(seat.note || "") +
              "</p>" +
              "</article>"
            );
          }

          // uncontested
          return winnerCard(seat.position, seat, "uncontested");
        })
        .join("");

      return (
        '<div class="officer-tier">' +
        '<h3 class="officer-tier__title">' +
        escapeHtml(tierName) +
        "</h3>" +
        '<div class="winners-grid">' +
        seatsHtml +
        "</div>" +
        "</div>"
      );
    }).join("");

    resultsOfficers.innerHTML = html;

    // wire up every clickable element (cards + inline runner-up / multi buttons)
    const clickables = resultsOfficers.querySelectorAll("[data-candidate-id]");
    clickables.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        openModal(el.dataset.candidateId);
      });
      if (el.tagName === "ARTICLE") {
        el.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openModal(el.dataset.candidateId);
          }
        });
      }
    });
  }

  /* ============================================================
   *  GLOBAL EVENT WIRING
   * ============================================================ */
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

  /* ============================================================
   *  INITIAL RENDER
   * ============================================================ */
  renderResultsStats();
  renderTurnoutChart();
  renderOfficers();

  renderFilters();
  renderGrid();

  switchView("results");
})();
