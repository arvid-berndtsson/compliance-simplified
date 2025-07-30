# Compliance Simplified – Website Outline

*(An easy introduction to ISO27001 and SOC 2 track)*

---

## 0. Vision & Audience

- **Goal**: A jargon-free, practitioner-oriented site that demystifies ISO/IEC 27001:2022 (incl. 2024 amendment) and SOC 2 Trust Services Criteria (TSC 2017 rev. 2022).
- **Primary users**: Tech founders, early-stage CISOs, sysadmins, and developers who need quick, actionable guidance without consultant fees.
- **Tone**: "Explain like I'm five, but keep it professional." Short sentences, visual summaries, plenty of checklists.

---

## 1. Site Architecture (Top-Level Navigation)

| Order | Page | Purpose |
|-------|------|---------|
| 1 | Home | 60-second pitch, why compliance matters, CTA to start "7-step quick guide." |
| 2 | Basics | "What is ISO 27001?", key terms (ISMS, Annex A), revision timeline (2005 → 2013 → 2022 → 2024 Amd 1). Similar tab for SOC 2. |
| 3 | Step-by-Step Guide | 7 pages (one per phase):<br>1. Buy-in,<br>2. Scope,<br>3. Risk assessment,<br>4. Controls,<br>5. Policies,<br>6. Internal audit & Mgt review,<br>7. Certification. Each page ends with downloadable checklist. |
| 4 | Controls Explorer | Interactive table of Annex A controls (ISO) or TSC points of focus (SOC 2). Filters by domain, tag, difficulty. |
| 5 | Gap Self-Assessment | Browser-side quiz (localStorage only) that outputs pass/fail + a CSV. |
| 6 | Templates & Docs | MIT-licensed policy templates, risk register, Statement of Applicability (Excel & CSV). |
| 7 | Tools | Curated list of open-source helpers (Velociraptor, DefectDojo, RiskRegister.io). |
| 8 | FAQ | Common newbie questions ("Do I need a consultant?" "How long does cert take?"). |
| 9 | Glossary | Hover-over definitions used site-wide. |
| 10 | Blog / Updates | Short posts on new amendments (e.g., ISO 27001 Climate Action Amd 2024) & AICPA guidance. |
| 11 | About & Contribute | GitHub repo link, license (CC BY-SA 4.0), coffee-button donations. |

---

## 2. Content Deep-Dive

### 2.1 "Basics" Page Cheat-Sheet

#### ISO 27001:2022 key changes
- Annex A reduced from 114 → 93 controls, grouped into 4 domains.
- 11 new controls (e.g., threat intelligence, cloud services).
- 2024 Amd 1 adds climate action requirement.

#### SOC 2 Trust Services Criteria
- 5 criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy).
- 2022 update: refined points-of-focus; no new criteria.
- **Certification vs. Attestation banner**: ISO 27001 = cert by accredited body; SOC 2 = CPA attestation.

### 2.2 "Step-by-Step" Pages Outline (ISO Track)

| Step | Expected Output | Time-Saver Tip |
|------|----------------|----------------|
| 1. Executive Buy-in | One-pager justification | Use our 2-slide deck template |
| 2. Scope | Boundaries doc | Copy/paste example for SaaS |
| 3. Risk Assessment | Filled risk register | Map to OWASP categories |
| 4. Select Controls | Statement of Applicability | Interactive Annex A picker |
| 5. Policies | 12 core policies | MIT license templates |
| 6. Internal Audit | Audit report & CAPA | Trello board template |
| 7. Certification Audit | Stage 1 + 2 readiness checklist | Auditor Q cheat-sheet |

*Mirror a condensed 5-step flow for SOC 2.*

### 2.3 Interactive Components
- **Controls Explorer**: Built with React + searchable JSON of controls.
- **Gap Self-Assessment**: 30 yes/no questions → compliance score (traffic-light gauge).
- **Template Downloads**: Via GitHub Releases; optional newsletter signup gate.

### 2.4 Visual Elements
- **Infographics**: Controls mapping ISO → SOC 2 crossover (SVG).
- **Roadmap timeline**: 0-12-month ISO implementation.
- **Badge generator**: "ISO27001prep in progress" PNG users can embed.

---

## 3. Technical Stack

- **Static Site Generator**: Docusaurus v3 (MDX, React, search built-in), hosted on GitHub Pages + Cloudflare.
- **Styling**: TailwindCSS + daisyUI components.
- **CI/CD**: GitHub Actions → Automated deploy on main branch.
- **Analytics**: Plausible (privacy-first, EU servers).
- **Donation Widget**: BuyMeACoffee.

---

## 4. Content Governance

- **License**: Site text under CC BY-SA 4.0; code under MIT.
- **Contribution Guide**: CONTRIBUTING.md with style guide (≤14-word sentences, Oxford commas, ASCII diagrams allowed).
- **Versioning**: `/iso-27001-2013` archived section remains for historic reference.

---

## 5. Launch Milestones (Draft)

| Date (Estimate) | Target |
|-----------------|--------|
| T0 (Today) | Repo scaffolding, domain purchase, home page MVP |
| +2 weeks | Basics pages (ISO & SOC) live, Controls Explorer v0.1 |
| +1 month | Step-by-Step ISO guide complete with templates |
| +2 months | SOC 2 guide + interactive gap tool |
| +3 months | Community launch (r/cybersecurity post, HackerNews show) |

---

## 6. Next Steps / Open Questions

1. **Branding**: Decide on logo & color palette.
2. **Template licenses**: Pick original vs. adapted resources.
3. **Community features**: Forum, Matrix chat, or GitHub Discussions?
4. **Legal disclaimer**: Need a lawyer review? (We can start with a generic disclaimer.)
5. **Translation roadmap**: Localize into Swedish, Spanish?

---

## 7. Resource References

- [ISO/IEC 27001:2022 update overview](https://protiviti.com)
- [ISO/IEC 27001:2022 Amendment 1 (2024)](https://iso.org)
- [AICPA SOC 2 Trust Services Criteria (with 2022 points-of-focus)](https://aicpa-cima.com)
