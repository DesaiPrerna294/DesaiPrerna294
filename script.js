* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #081120;
  --bg-soft: #0f1b2d;
  --panel: rgba(17, 26, 41, 0.9);
  --panel-2: #111f2f;
  --text: #ecf3ff;
  --muted: #a7b6ce;
  --primary: #4cc9f0;
  --secondary: #7b61ff;
  --accent: #8ef0c2;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(76, 201, 240, 0.15), transparent 30%),
    radial-gradient(circle at top right, rgba(123, 97, 255, 0.18), transparent 30%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: var(--primary);
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.narrow {
  width: min(820px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(8, 17, 32, 0.7);
  border-bottom: 1px solid var(--border);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--muted);
  font-size: 0.96rem;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.hero {
  padding: 96px 0 74px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.95fr;
  gap: 38px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

.hero h1 {
  font-size: clamp(2.8rem, 6vw, 4.4rem);
  line-height: 1.08;
  margin-bottom: 18px;
  letter-spacing: -0.06em;
}

.intro {
  font-size: 1.06rem;
  color: var(--muted);
  max-width: 680px;
}

.cta-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 0.9rem 1.4rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #06111e;
  box-shadow: var(--shadow);
}

.btn.secondary {
  border: 1px solid var(--border);
  color: var(--text);
  background: rgba(255, 255, 255, 0.02);
}

.mini-stats {
  list-style: none;
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.mini-stats li {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 16px;
}

.mini-stats strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 4px;
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.84rem;
}

.hero-card {
  background: linear-gradient(180deg, rgba(17, 26, 41, 0.9), rgba(12, 20, 32, 0.9));
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 26px;
}

.card-top {
  color: var(--muted);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 14px rgba(142, 240, 194, 0.9);
}

.profile-box {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 26px;
  margin-bottom: 22px;
}

.avatar {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #06111e;
  font-weight: 800;
  font-size: 1.45rem;
}

.profile-box h3 {
  font-size: 1.35rem;
}

.profile-box p {
  color: var(--muted);
}

.info-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.info-list p {
  color: var(--muted);
  font-size: 0.96rem;
}

.section {
  padding: 88px 0;
}

.section.alt {
  background: rgba(11, 18, 28, 0.75);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.2;
}

.narrow p {
  color: var(--muted);
  font-size: 1.02rem;
  margin-bottom: 14px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.skill-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 86px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 16px;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-3px);
  border-color: rgba(76, 201, 240, 0.4);
}

.timeline {
  display: grid;
  gap: 24px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px 20px;
}

.date {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.9rem;
  padding-top: 4px;
}

.content h3 {
  margin-bottom: 6px;
}

.company {
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 12px;
}

.content ul,
.project-card ul {
  margin-left: 20px;
  color: var(--muted);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px 22px;
  box-shadow: var(--shadow);
}

.project-badge {
  display: inline-block;
  background: rgba(76, 201, 240, 0.12);
  color: var(--primary);
  border: 1px solid rgba(76, 201, 240, 0.28);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 7px 12px;
  margin-bottom: 18px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-card h3 {
  margin-bottom: 10px;
  font-size: 1.42rem;
}

.project-card p {
  color: var(--muted);
  margin-bottom: 14px;
}

.project-card ul {
  margin-bottom: 18px;
}

.project-card a {
  font-weight: 700;
}

.education-box {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  padding: 28px 22px;
}

.education-box h3 {
  margin-bottom: 8px;
}

.education-box p {
  color: var(--muted);
}

.contact-box {
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 22px;
}

.contact-links a {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(9, 14, 24, 0.9);
}

.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  gap: 12px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-grid,
  .timeline-item {
    grid-template-columns: 1fr;
  }

  .mini-stats {
    grid-template-columns: 1fr;
  }

  .footer-row {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 18px 0;
  }
}












































