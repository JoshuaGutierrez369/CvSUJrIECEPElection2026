/* ============================================================
 *  CvSU Jr. IECEP Election Returns — AY 2026-2027
 *  Final, verified, and canvassed count.
 *  Derived from TALLY-JIECEP-2026-2027 (2).pdf (page 9 / FINAL).
 * ============================================================ */

const ELECTION_RESULTS = {
  ay: "2026-2027",
  tagline: "Sharks in Action, Leaders with Purpose.",
  totals: {
    eligibleVoters: 196,   // 238 enrolled, less sections 5-1 (23) and 5-2 (19)
    votesCast: 105,        // FINAL canvassed count
    turnoutPct: 53.6,
    contestedRaces: 2,
    totalSeats: 27,
    multiSeatUnits: 1
  },

  // Turnout per BSECE section (5-1 and 5-2 excluded from the pool)
  sectionTurnout: [
    { section: "1-1", voted: 29, enrolled: 40 },
    { section: "1-2", voted: 13, enrolled: 38 },
    { section: "2-1", voted: 12, enrolled: 17 },
    { section: "2-2", voted: 18, enrolled: 24 },
    { section: "3-1", voted: 16, enrolled: 24 },
    { section: "3-2", voted: 10, enrolled: 23 },
    { section: "4-1", voted:  1, enrolled: 13 },
    { section: "4-2", voted:  5, enrolled: 17 }
  ],

  /* Each winner carries a `candidateId` that links back to CANDIDATES[]
   * so a user can click through to read the full platform in the modal.
   *
   * raceType:
   *   "contested"  -> genuine head-to-head; loser shown as runner-up
   *   "uncontested"-> single candidate; won by default
   *   "multi"      -> all candidates elected (no elimination)
   */
  officers: [
    // ---- EXECUTIVE OFFICE ----
    { tier: "Executive Office", position: "President", name: "Francine S. Sorongon", candidateId: "francine-sorongon", votes: 104, pct: 0.9905, abstain: 1,  raceType: "uncontested" },
    { tier: "Executive Office", position: "Vice President for Internal Affairs", name: "Dray Turry L. Santos", candidateId: "dray-santos", votes: 100, pct: 0.9524, abstain: 5,  raceType: "uncontested" },
    { tier: "Executive Office", position: "Vice President for External Affairs", name: "Anjho T. Bitago", candidateId: "anjho-bitago", votes: 81, pct: 0.7714, abstain: 24, raceType: "uncontested" },

    { tier: "Executive Office", position: "Vice President for Technical Operations",
      raceType: "contested", abstain: 7,
      candidates: [
        { name: "Dave Matthew N. Lumagui", candidateId: "dave-lumagui", votes: 64, pct: 0.6095, status: "winner" },
        { name: "Janna A. Landicho",       candidateId: "janna-landicho", votes: 34, pct: 0.3238, status: "runnerup" }
      ]
    },

    { tier: "Executive Office", position: "Vice President for Partnerships and Sponsorships", name: "Janna Fe C. Gloriani", candidateId: "janna-gloriani", votes: 98, pct: 0.9333, abstain: 7,  raceType: "uncontested" },

    { tier: "Executive Office", position: "Vice President for Documentation & Records",
      raceType: "contested", abstain: 5,
      candidates: [
        { name: "Jemaelah P. Concepcion",            candidateId: "jemaelah-concepcion", votes: 55, pct: 0.5238, status: "winner" },
        { name: "Johnreign Jayden P. Ancheta",        candidateId: "johnreign-ancheta",   votes: 45, pct: 0.4286, status: "runnerup" }
      ]
    },

    { tier: "Executive Office", position: "Vice President for Finance and Marketing", name: "Aliyah Sophia D. Pagara", candidateId: "aliyah-pagara", votes: 101, pct: 0.9619, abstain: 4, raceType: "uncontested" },
    { tier: "Executive Office", position: "Secretary", name: "Ellyssa Terence L. Vidal", candidateId: "ellyssa-vidal", votes: 95, pct: 0.9048, abstain: 10, raceType: "uncontested" },
    { tier: "Executive Office", position: "Assistant Secretary", name: "Russell Johnsdher Glorioso", candidateId: "russell-glorioso", votes: 97, pct: 0.9238, abstain: 8, raceType: "uncontested" },

    // ---- OFFICE OF COMMUNICATION AND CONTENT CREATION ----
    { tier: "Office of Communication and Content Creation", position: "Technical Creatives", name: "Racklen B. Añago", candidateId: "racklen-anago", votes: 100, pct: 0.9524, abstain: 5,  raceType: "uncontested" },
    { tier: "Office of Communication and Content Creation", position: "PIO for Internal Affairs", name: "Junix Saab S. Maya", candidateId: "junix-maya", votes: 99, pct: 0.9429, abstain: 6,  raceType: "uncontested" },
    { tier: "Office of Communication and Content Creation", position: "PIO for External Affairs", name: "Sharri Alanis L. Reola", candidateId: "sharri-reola", votes: 99, pct: 0.9429, abstain: 6,  raceType: "uncontested" },
    { tier: "Office of Communication and Content Creation", position: "Gender and Development Representative", name: "Andrea Gail M. Loreto", candidateId: "andrea-loreto", votes: 99, pct: 0.9429, abstain: 6, raceType: "uncontested" },

    // ---- EVENTS DOCUMENTATION UNIT (multi-seat: all elected) ----
    { tier: "Events Documentation Unit", position: "Events Documentation Unit",
      raceType: "multi", abstain: null,
      note: "All candidates elected — no elimination.",
      candidates: [
        { name: "Mariel Nicole C. Tamayo",       candidateId: "mariel-tamayo",       votes: 79, pct: 0.7524 },
        { name: "Ahron Tristan B. Telmo",         candidateId: "ahron-telmo",         votes: 72, pct: 0.6857 },
        { name: "Dallin Russel C. Velasco",       candidateId: "dallin-velasco",      votes: 60, pct: 0.5714 },
        { name: "Mary Katrice Anne R. Panganiban", candidateId: "mary-panganiban",    votes: 57, pct: 0.5429 }
      ]
    },

    // ---- OFFICE OF FINANCE ----
    { tier: "Office of Finance", position: "Assistant Vice President for Finance and Marketing", name: "Gabriel Reinharth R. Velasco", candidateId: "gabriel-velasco", votes: 100, pct: 0.9524, abstain: 5, raceType: "uncontested" },
    { tier: "Office of Finance", position: "Auditor", name: "Alezzandra Nicole Y. Legaspi", candidateId: "alezzandra-legaspi", votes: 100, pct: 0.9524, abstain: 5, raceType: "uncontested" },
    { tier: "Office of Finance", position: "Business Manager", name: "Naomie Danielle L. Largado", candidateId: "naomie-largado", votes: 102, pct: 0.9714, abstain: 3, raceType: "uncontested" },
    { tier: "Office of Finance", position: "Logistics Director", name: "Melcha Marie T. Gayoma", candidateId: "melcha-gayoma", votes: 94, pct: 0.8952, abstain: 11, raceType: "uncontested" },

    // ---- OFFICE OF SPONSORSHIPS AND PARTNERSHIPS ----
    { tier: "Office of Sponsorships and Partnerships", position: "Sponsorship and Funding Officer", name: "Dominic G. Basco", candidateId: "dominic-basco", votes: 98, pct: 0.9333, abstain: 7, raceType: "uncontested" },
    { tier: "Office of Sponsorships and Partnerships", position: "Partnership Maintenance and Liaison Officer", name: "Anthony Luis S. Baigan", candidateId: "anthony-baigan", votes: 96, pct: 0.9143, abstain: 9, raceType: "uncontested" },
    { tier: "Office of Sponsorships and Partnerships", position: "OSP Creative Director", name: "John Kale F. Cañeza", candidateId: "john-caneza", votes: 96, pct: 0.9143, abstain: 9, raceType: "uncontested" }
  ],

  // Ordered tiers for display grouping
  tierOrder: [
    "Executive Office",
    "Office of Communication and Content Creation",
    "Events Documentation Unit",
    "Office of Finance",
    "Office of Sponsorships and Partnerships"
  ]
};

// expose for non-module script
window.ELECTION_RESULTS = ELECTION_RESULTS;
