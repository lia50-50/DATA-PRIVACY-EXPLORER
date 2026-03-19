/* ===== Privacy Law Timeline — All Interactivity ===== */

// ── Milestone Data ──
const milestones = [
  {
    year: 1890,
    title: '"The Right to Privacy"',
    scope: "Global / USA",
    flag: "🌍",
    bullets: [
      "Written by Samuel Warren & Louis Brandeis; published in the Harvard Law Review.",
      "Argued that the common law should recognize a \"right to be let alone.\"",
      "A reaction to late 19th-century \"yellow journalism\" and new technologies like photography."
    ],
    whyMatters: "It is widely considered the first legal argument and the foundation for a standalone right to privacy in the modern world.",
    funFact: "The article was reportedly sparked by Samuel Warren's annoyance at the sensationalist coverage of his daughter's wedding in Boston newspapers.",
    realWorld: "It shifted the legal focus from physical trespassing to \"mental peace,\" leading to the creation of \"privacy torts\" — like suing for the disclosure of embarrassing private facts.",
    quiz: {
      question: "What changed after this landmark article?",
      options: [
        "Newspapers were permanently banned from covering weddings.",
        "Legal focus shifted from physical trespassing to mental peace, creating \"privacy torts.\"",
        "All personal photographs became illegal.",
        "The Harvard Law Review was shut down."
      ],
      answer: 1,
      explanation: "The article led to the creation of privacy torts, establishing legal remedies for invasions of personal privacy beyond physical trespassing."
    },
    link: "https://www.cs.cornell.edu/~shmat/courses/cs5436/warren-brandeis.pdf"
  },
  {
    year: 1948,
    title: "Universal Declaration of Human Rights",
    scope: "Global",
    flag: "🌍",
    bullets: [
      "Adopted by the United Nations after World War II.",
      "Article 12 states that no one shall be subjected to arbitrary interference with privacy, family, or correspondence.",
      "Established privacy as a fundamental human right globally."
    ],
    whyMatters: "Established privacy as a fundamental human right globally, setting the standard for all nations.",
    funFact: "Many national constitutions and privacy laws around the world directly reference this declaration in their preambles.",
    realWorld: "Countries began including privacy protections in their constitutions and national laws as a direct result of this declaration.",
    quiz: {
      question: "What was the primary impact of the UDHR on privacy?",
      options: [
        "It only applied to European countries.",
        "It made social media illegal.",
        "Countries began including privacy protections in constitutions and national laws.",
        "It banned international communication."
      ],
      answer: 2,
      explanation: "The UDHR inspired nations worldwide to incorporate privacy protections into their own constitutions and domestic legislation."
    },
    link: "https://www.un.org/en/about-us/universal-declaration-of-human-rights"
  },
  {
    year: 1965,
    title: "Anti-Wiretapping Act (RA 4200)",
    scope: "Philippines",
    flag: "🇵🇭",
    bullets: [
      "Prohibits the recording of private conversations without authorization.",
      "Covers the use of dictaphones, walkie-talkies, or similar listening devices.",
      "Makes any evidence obtained this way inadmissible in any judicial proceeding."
    ],
    whyMatters: "It established early statutory protection for communication in the Philippines, long before the digital age.",
    funFact: "This law was central to the \"Hello Garci\" scandal of 2005, where wiretapped recordings of a president were leaked, sparking a national crisis.",
    realWorld: "The \"Hello Garci\" scandal tested the limits of this law when wiretapped phone calls between President Arroyo and a COMELEC official surfaced publicly.",
    quiz: {
      question: "What makes the Anti-Wiretapping Act historically significant in the Philippines?",
      options: [
        "It was the first law to regulate social media in Asia.",
        "It established early statutory protection for communication long before the digital age.",
        "It allowed the government to monitor all phone calls freely.",
        "It only applied to walkie-talkie communications."
      ],
      answer: 1,
      explanation: "RA 4200 was a forward-thinking piece of legislation that protected communication privacy decades before digital technology became widespread."
    },
    link: "https://www.officialgazette.gov.ph/1965/06/19/republic-act-no-4200/"
  },
  {
    year: 1970,
    title: "Hesse Data Protection Act",
    scope: "Global / Germany",
    flag: "🌍",
    bullets: [
      "The world's first data protection law, enacted by the German state of Hesse.",
      "Regulated automated personal data processing by the government.",
      "Created the first-ever Data Protection Commissioner."
    ],
    whyMatters: "Hesse changed the game by recognizing that data itself is part of your identity. It proved that as technology evolves, legal protections must evolve with it.",
    funFact: "Germany's drive for data protection was fueled by historical trauma from the Nazi and Stasi eras — when the state had absolute knowledge of every citizen's movements, beliefs, and relationships.",
    realWorld: "It birthed the Independent Supervisory Authority (ISA) model — instead of suing the government yourself, a dedicated office monitors behavior and issues fines on your behalf, like the NPC in the Philippines.",
    quiz: {
      question: "Why was Germany particularly motivated to create data protection laws?",
      options: [
        "Because they wanted to attract tourists.",
        "Because of historical trauma from the Nazi and Stasi eras, where the state abused citizen data.",
        "Because they wanted to compete with the United States.",
        "Because of a court ruling from France."
      ],
      answer: 1,
      explanation: "Germany's experience with totalitarian regimes taught them that unchecked government access to citizen data can destroy democracy."
    },
    link: "https://en.wikipedia.org/wiki/Bundesdatenschutzgesetz"
  },
  {
    year: 1980,
    title: "OECD Privacy Guidelines",
    scope: "Global",
    flag: "🌍",
    bullets: [
      "A set of non-binding principles for the protection of privacy and transborder data flows.",
      "Introduced the Fair Information Practice Principles (FIPPs).",
      "Sought to balance privacy with the free flow of information for global trade."
    ],
    whyMatters: "These guidelines are the \"DNA\" of almost every privacy law written in the last 40 years.",
    funFact: "The OECD Guidelines coined concepts like \"Collection Limitation\" and \"Purpose Specification\" that are now standard in every privacy law worldwide.",
    realWorld: "It standardized concepts like Collection Limitation and Security Safeguards, allowing different countries to talk to each other about data safely and enabling international trade.",
    quiz: {
      question: "Why are the OECD Privacy Guidelines called the 'DNA' of modern privacy laws?",
      options: [
        "They are legally binding in all countries.",
        "They introduced foundational concepts used in almost every privacy law written since.",
        "They were written by biologists.",
        "They only apply to OECD member countries."
      ],
      answer: 1,
      explanation: "The Fair Information Practice Principles introduced by the OECD became the blueprint that nearly all subsequent privacy legislation was built upon."
    },
    link: "https://www.oecd.org/internet/ieconomy/oecdguidelinesontheprotectionofprivacyandtransborderflowsofpersonaldata.htm"
  },
  {
    year: 1987,
    title: "Philippine Constitution (Art. III, §3)",
    scope: "Philippines",
    flag: "🇵🇭",
    bullets: [
      "States that the privacy of communication and correspondence shall be inviolable.",
      "Grants protection against unreasonable searches and seizures (Section 2).",
      "Establishes that illegally obtained evidence is \"fruit of the poisonous tree.\""
    ],
    whyMatters: "It elevated privacy to a fundamental human right in the Philippines, making it a constitutional mandate that cannot be easily overturned.",
    funFact: "The \"fruit of the poisonous tree\" doctrine means that if the original evidence was illegally obtained, everything derived from it is also tainted and inadmissible.",
    realWorld: "This provision provides a constitutional shield that citizens can use to challenge government overreach in court, protecting against warrantless surveillance.",
    quiz: {
      question: "What does the 'fruit of the poisonous tree' doctrine mean in Philippine law?",
      options: [
        "Poisoned fruits cannot be sold in markets.",
        "If original evidence was illegally obtained, everything derived from it is also inadmissible.",
        "Only government officials can present evidence in court.",
        "Trees near government buildings are protected by law."
      ],
      answer: 1,
      explanation: "This doctrine ensures that law enforcement cannot benefit from illegally obtained evidence, protecting citizens from unconstitutional surveillance."
    },
    link: "https://www.officialgazette.gov.ph/constitutions/the-1987-constitution-of-the-republic-of-the-philippines/"
  },
  {
    year: 1995,
    title: "EU Data Protection Directive (95/46/EC)",
    scope: "Global",
    flag: "🌍",
    bullets: [
      "A binding law that forced all EU member states to harmonize their privacy rules.",
      "Restricted the transfer of data to countries without \"adequate\" protection.",
      "Coined the term \"Processing of Personal Data.\""
    ],
    whyMatters: "It forced the rest of the world — including the US and Asia — to upgrade their laws just to keep doing business with Europe.",
    funFact: "This directive actually coined the now-ubiquitous term \"Processing of Personal Data\" that appears in every modern privacy regulation.",
    realWorld: "Data privacy moved from being a niche legal issue to a critical business requirement. Companies worldwide had to invest in compliance just to access the EU market.",
    quiz: {
      question: "How did the EU Data Protection Directive impact countries outside Europe?",
      options: [
        "It had no impact outside Europe.",
        "It forced non-EU countries to upgrade their privacy laws to keep doing business with Europe.",
        "It banned all data transfers outside Europe permanently.",
        "It only applied to paper records."
      ],
      answer: 1,
      explanation: "The adequacy requirement meant that non-EU countries had to demonstrate equivalent privacy protections to maintain trade relationships with Europe."
    },
    link: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A31995L0046"
  },
  {
    year: 2012,
    title: "Data Privacy Act of 2012 (RA 10173)",
    scope: "Philippines",
    flag: "🇵🇭",
    bullets: [
      "The first comprehensive data protection law in the Philippines.",
      "Created the National Privacy Commission (NPC).",
      "Mandated 72-hour breach notifications and the appointment of Data Protection Officers."
    ],
    whyMatters: "It aligned the Philippines with international standards, crucial for maintaining the trust of the BPO (Business Process Outsourcing) industry — the country's economic lifeline.",
    funFact: "The NPC used this law to investigate the 2016 \"Comeleak\" — when the entire COMELEC voter database was hacked and leaked online, exposing millions of Filipino voters' personal data.",
    realWorld: "Companies in the Philippines can now be fined millions of pesos and their executives jailed for negligence regarding user data protection.",
    quiz: {
      question: "Why was RA 10173 particularly important for the Philippine economy?",
      options: [
        "It banned all foreign companies from operating in the Philippines.",
        "It aligned the Philippines with international standards, crucial for the BPO industry.",
        "It only protected government employees' data.",
        "It required all data to be stored on paper."
      ],
      answer: 1,
      explanation: "The Philippines' massive BPO industry, which handles sensitive data from international clients, needed this law to maintain global trust and competitiveness."
    },
    link: "https://privacy.gov.ph/data-privacy-act/"
  },
  {
    year: 2018,
    title: 'General Data Protection Regulation (GDPR)',
    scope: "Global",
    flag: "🌍",
    bullets: [
      "Replaced the 1995 Directive with much stricter rules and massive fines.",
      "Introduced the \"Right to be Forgotten\" and \"Data Portability.\"",
      "Applies to any company globally if they handle data of EU residents."
    ],
    whyMatters: "It shifted the power dynamic back to the individual, forcing tech giants like Google and Meta to be more transparent about how they use personal data.",
    funFact: "The maximum fine under GDPR is €20 million or 4% of global annual turnover, whichever is higher — making non-compliance extremely expensive for large corporations.",
    realWorld: "It triggered the \"Brussels Effect,\" where global companies adopt the strictest (EU) rules for everyone to simplify operations, raising the privacy standard worldwide.",
    quiz: {
      question: "What is the 'Brussels Effect' mentioned in relation to GDPR?",
      options: [
        "A new type of data encryption developed in Brussels.",
        "Global companies adopt the strictest EU rules for all users to simplify their operations.",
        "Only Belgian companies are affected by GDPR.",
        "Brussels became the world capital of cybersecurity."
      ],
      answer: 1,
      explanation: "Rather than maintaining different privacy standards for different regions, many companies apply GDPR's strict rules globally, effectively raising privacy standards everywhere."
    },
    link: "https://gdpr.eu/"
  }
];

// ── Future Predictions ──
const predictions = [
  {
    icon: "🤖",
    title: 'The "AI Privacy" Wave (2026–2030)',
    text: "Current laws were written for databases; future laws will be written for Large Language Models. We will likely see regulations requiring \"Algorithmic Transparency\" — forcing companies to explain how an AI made a decision about you (e.g., why you were denied a loan)."
  },
  {
    icon: "🧬",
    title: "Biometric Sovereignty",
    text: "As facial recognition and palm-vein scanning become commonplace, laws will evolve to treat biological data with higher sanctity than digital data. You can change a password, but you cannot change your iris."
  },
  {
    icon: "🌐",
    title: "Data Localization vs. Globalism",
    text: "Expect a \"splinternet\" where countries like China, India, and possibly the EU demand that data about their citizens stays physically within their borders, making the global web more fragmented."
  },
  {
    icon: "🔮",
    title: "Protection for Emerging Technologies",
    text: "New laws may address privacy risks in IoT, smart cities, the Metaverse, virtual reality, and AI-generated data. Regulators may impose higher fines and mandatory breach reporting for these new frontiers."
  },
  {
    icon: "🧠",
    title: 'The "Right to Unlearn" (Machine Unlearning)',
    text: "If you ask a company to delete your data, they remove it from their database — but if that data trained an AI model, your \"essence\" remains in the model's weights. Future laws will mandate Machine Unlearning, forcing companies to prove they have excised a specific user's influence from a model without retraining from scratch."
  },
  {
    icon: "📱",
    title: "SIM-Linked Digital Personas",
    text: "A global push — particularly in emerging tech hubs like the Philippines and India — aims to link social media accounts to government-verified SIM identities to curb troll farms and deepfake scams. Platforms will be legally required to anchor accounts to a legal identity, with a \"break-glass\" protocol to link handles to a physical person during criminal investigations."
  }
];


// ── DOM References ──
const welcomeSection    = document.getElementById("welcome");
const timelineSection   = document.getElementById("timeline-section");
const predictionsSection= document.getElementById("predictions");
const timelineTrack     = document.getElementById("timeline-track");
const predGrid          = document.getElementById("predictions-grid");
const modalOverlay      = document.getElementById("modal-overlay");
const modalTitle        = document.getElementById("modal-title");
const modalBody         = document.getElementById("modal-body");
const modalCloseBtn     = document.getElementById("modal-close");
const btnExplore        = document.getElementById("btn-explore");
const navEl             = document.querySelector(".top-nav");
const navBtns           = document.querySelectorAll(".nav-links button");
const scrollLeftBtn     = document.getElementById("scroll-left");
const scrollRightBtn    = document.getElementById("scroll-right");

// ── State ──
let currentSection = "welcome";

// ============================
// RENDER
// ============================

function renderTimeline() {
  milestones.forEach((m, i) => {
    const card = document.createElement("div");
    card.className = `milestone-card animate-in delay-${(i % 4) + 1}`;
    card.innerHTML = `
      <span class="card-year">${m.year}</span>
      <span class="card-flag">${m.flag}  ${m.scope}</span>
      <h3 class="card-title">${m.title}</h3>
      <ul class="card-bullets">
        ${m.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
      <div class="card-tooltip">
        🛡️ Why this law matters
        <span class="tip-text">${m.whyMatters}</span>
      </div>
      <div class="card-icons">
        <button class="icon-btn" onclick="openModal('funfact',${i})" aria-label="Fun Fact">
          <span class="emoji">💡</span> Fun Fact
        </button>
        <button class="icon-btn" onclick="openModal('realworld',${i})" aria-label="Real-World Example">
          <span class="emoji">🌐</span> Example
        </button>
        <button class="icon-btn" onclick="openModal('quiz',${i})" aria-label="Quiz">
          <span class="emoji">❓</span> Quiz
        </button>
      </div>
      <a class="see-more" href="${m.link}" target="_blank" rel="noopener noreferrer">see more… 🔗</a>
    `;
    timelineTrack.appendChild(card);
  });
}

function renderPredictions() {
  predictions.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = `pred-card animate-in delay-${(i % 4) + 1}`;
    card.innerHTML = `
      <div class="pred-icon">${p.icon}</div>
      <h3 class="pred-title">${p.title}</h3>
      <p class="pred-text">${p.text}</p>
    `;
    predGrid.appendChild(card);
  });
}

// ============================
// NAVIGATION
// ============================

function showSection(name) {
  currentSection = name;
  [welcomeSection, timelineSection, predictionsSection].forEach(s => s.classList.add("hidden"));
  navEl.classList.toggle("nav-hidden", name === "welcome");

  if (name === "welcome") {
    welcomeSection.classList.remove("hidden");
  } else if (name === "timeline") {
    timelineSection.classList.remove("hidden");
  } else if (name === "predictions") {
    predictionsSection.classList.remove("hidden");
  }

  navBtns.forEach(b => b.classList.toggle("active", b.dataset.section === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

btnExplore.addEventListener("click", () => showSection("timeline"));
navBtns.forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.section));
});
document.querySelector(".nav-brand").addEventListener("click", () => showSection("welcome"));

// ============================
// SCROLL CONTROLS
// ============================

scrollLeftBtn.addEventListener("click", () => {
  timelineTrack.scrollBy({ left: -370, behavior: "smooth" });
});
scrollRightBtn.addEventListener("click", () => {
  timelineTrack.scrollBy({ left: 370, behavior: "smooth" });
});

// Mouse-wheel → horizontal scroll on timeline
timelineTrack.addEventListener("wheel", (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    timelineTrack.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
  }
}, { passive: false });

// ============================
// MODAL SYSTEM
// ============================

function openModal(type, index) {
  const m = milestones[index];
  let title = "";
  let body  = "";

  if (type === "funfact") {
    title = `💡 Fun Fact — ${m.year}`;
    body = `<p><strong>${m.title}</strong></p><p>${m.funFact}</p>`;
  } else if (type === "realworld") {
    title = `🌐 Real-World Example — ${m.year}`;
    body = `<p><strong>${m.title}</strong></p><p>${m.realWorld}</p>`;
  } else if (type === "quiz") {
    title = `❓ Quiz — ${m.year}`;
    const optionsHTML = m.quiz.options.map((opt, oi) =>
      `<button class="quiz-opt" data-index="${oi}" data-correct="${m.quiz.answer}" onclick="handleQuiz(this, ${m.quiz.answer}, '${escapeForAttr(m.quiz.explanation)}')">${opt}</button>`
    ).join("");
    body = `<p><strong>${m.quiz.question}</strong></p><div class="quiz-options">${optionsHTML}</div><div id="quiz-fb"></div>`;
  }

  modalTitle.textContent = title;
  modalBody.innerHTML = body;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ============================
// QUIZ HANDLER
// ============================

function handleQuiz(btn, correctIdx, explanation) {
  const parent = btn.parentElement;
  const allBtns = parent.querySelectorAll(".quiz-opt");
  const clickedIdx = parseInt(btn.dataset.index);

  allBtns.forEach((b, i) => {
    b.disabled = true;
    if (i === correctIdx) b.classList.add("correct");
    else if (i === clickedIdx && clickedIdx !== correctIdx) b.classList.add("wrong");
  });

  const fb = document.getElementById("quiz-fb");
  const isCorrect = clickedIdx === correctIdx;
  fb.className = `quiz-feedback ${isCorrect ? "correct-fb" : "wrong-fb"}`;
  fb.innerHTML = isCorrect
    ? `✅ <strong>Correct!</strong> ${explanation}`
    : `❌ <strong>Not quite.</strong> ${explanation}`;
}

function escapeForAttr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

// ============================
// PARTICLES (background eye-candy)
// ============================

function createParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
      ctx.fill();
    });
    // Draw faint lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168,85,247,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============================
// INIT
// ============================

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderPredictions();
  showSection("welcome");
  createParticles();
});
