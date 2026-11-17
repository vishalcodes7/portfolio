# 🛡️ Cybersecurity Portfolio Website

A clean, dark-themed personal portfolio website built for cybersecurity students and professionals. No frameworks, no build tools — just HTML, CSS, and vanilla JavaScript.

**Open `index.html` in your browser. That's it. It works.**

---

## 📁 Project Structure

```
portfolio/
├── index.html                          ← Main website file
├── css/
│   └── style.css                       ← All styles (dark theme, neon accent)
├── js/
│   └── main.js                         ← All interactivity (no libraries)
├── assets/
│   ├── images/
│   │   └── profile-placeholder.svg     ← Replace with your photo
│   ├── certificates/
│   │   └── .gitkeep                    ← Add certificate images here
│   └── resume/
│       └── .gitkeep                    ← Add your resume PDF here
└── README.md                           ← You are here
```

---

## 🚀 Quick Start (3 Steps)

1. **Download** this folder (or clone the repository)
2. **Open** `index.html` in any web browser — it works immediately, no server needed
3. **Customize** your content using the guide below

---

## ✏️ How to Customize

Every piece of placeholder content is marked with `<!-- REPLACE -->` in the HTML. Use your text editor's **Find** feature (Ctrl+F or Cmd+F) and search for `REPLACE` to jump through all the spots you need to edit.

### Quick Reference Table

| What to Change | Where to Edit | What to Look For |
|---|---|---|
| **Your name** | `index.html` | Search for `<!-- REPLACE -->` — appears in hero, nav logo, footer, and meta tags |
| **Role / title** | `index.html` → Hero section | `<p class="hero-role">` |
| **Tagline** | `index.html` → Hero section | `<p class="hero-tagline">` |
| **Profile photo** | Replace `assets/images/profile-placeholder.svg` with your photo (e.g., `profile.jpg`), then update the `<img src="...">` in the Hero section |
| **About me text** | `index.html` → About section | The `<p>` tags inside `about-text` |
| **Areas of interest** | `index.html` → About section | `<span class="interest-tag">` elements — add or remove as needed |
| **Technical skills** | `index.html` → Skills section | Each `<div class="skill-card">` — edit the name, icon, and `data-level` (0–100) |
| **Tools** | `index.html` → Skills section (second group) | Same structure as technical skills |
| **Projects** | `index.html` → Projects section | Each `<div class="project-card">` — edit title, description, tags, `data-*` attributes, and GitHub link |
| **Certifications** | `index.html` → Certifications section | Each `<div class="cert-card">` — edit name, issuer, and date |
| **Resume** | Add your PDF as `assets/resume/resume.pdf` | The download button links to this path automatically |
| **Contact form email** | `index.html` → Contact section | Change `your-email@example.com` in the `<form action="...">` URL |
| **Social links** | `index.html` → Contact section & Footer | Update all `href` values for LinkedIn, GitHub, email, etc. |
| **Accent color** | `css/style.css` → Line 12 | Change `--accent: #00f0ff;` to any color you like |
| **Page title** | `index.html` → `<title>` tag | First line inside `<head>` |

### How to Add a New Project Card

1. Copy an existing `<div class="project-card">...</div>` block
2. Paste it inside the `<div class="projects-grid">` container
3. Update the title, description, tags, `data-*` attributes, and GitHub link
4. Save and refresh your browser

### How to Add a New Certification

1. Copy an existing `<div class="cert-card">...</div>` block
2. Paste it inside the `<div class="certs-grid">` container
3. Update the certification name, issuer, and date
4. (Optional) Add a certificate image to `assets/certificates/` and link it

### How to Change the Accent Color

Open `css/style.css` and find the `:root` section at the top. Change these values:

```css
--accent: #00f0ff;                        /* Main accent color */
--accent-glow: rgba(0, 240, 255, 0.3);   /* Glow effect (use same color with transparency) */
--accent-dim: rgba(0, 240, 255, 0.1);    /* Subtle background tint */
```

**Popular color ideas:**
- 🟢 Green (Matrix): `#00ff41`
- 🟣 Purple: `#b829ff`
- 🔴 Red: `#ff2d55`
- 🟡 Gold: `#ffd700`
- 🔵 Electric Blue (default): `#00f0ff`

---

## 🌐 How to Deploy on Netlify (Free)

1. Go to [netlify.com](https://www.netlify.com) and **sign up** for a free account
2. From your dashboard, click **"Add new site"** → **"Deploy manually"**
3. **Drag and drop** your entire `portfolio/` folder into the upload area
4. Wait a few seconds — your site is live! 🎉
5. Netlify gives you a URL like `https://random-name.netlify.app`
6. *(Optional)* Go to **Site settings** → **Domain management** to set a custom domain name

### Updating Your Site on Netlify

Whenever you make changes:
1. Go to your site's dashboard on Netlify
2. Click **"Deploys"** → **"Drag and drop"** your updated folder
3. Changes are live in seconds

---

## 📦 How to Deploy on GitHub Pages (Alternative)

1. **Create** a new repository on [github.com](https://github.com)
2. **Upload** all files from the `portfolio/` folder to the repository
3. Go to **Settings** → **Pages**
4. Under "Source", select **main branch** and click **Save**
5. Your site will be live at `https://yourusername.github.io/repository-name`

> **Tip:** Name your repository `yourusername.github.io` and your site will be at `https://yourusername.github.io` (no repo name in the URL).

---

## 🎓 Tips for Students

### Resume Tips
- Use **strong action verbs**: Built, Investigated, Analyzed, Configured, Deployed, Secured, Monitored, Documented, Automated, Detected
- **Quantify** where possible: "Analyzed 500+ security logs daily", "Reduced false positives by 30%"
- Keep it to **1 page** if you have less than 5 years of experience
- Save as **PDF** (not Word) to preserve formatting

### Photo Tips
- Use a **professional headshot** with a neutral or dark background
- **Crop to square** (the CSS will make it circular)
- Recommended size: **400×400 pixels** minimum
- Formats: `.jpg`, `.png`, or `.webp`

### Project Tips
- **Link to GitHub repos** — recruiters want to see your code and documentation
- Even **lab exercises count** as projects — frame them professionally
- Write a good **README** for each project repo — it's the first thing people see
- Include **screenshots** or diagrams in your project READMEs

### General Tips
- **Keep it updated** — add new certs, projects, and skills as you learn
- **Test on mobile** — many recruiters view portfolios on their phone
- **Proofread** — typos in a security portfolio don't inspire confidence
- **Share the link** on your LinkedIn, resume, email signature, and GitHub profile

---

## 🔧 Technical Details

- **No frameworks or libraries** — pure HTML5, CSS3, and vanilla JavaScript
- **No build step** — works by opening `index.html` directly in a browser
- **Responsive design** — looks great on mobile, tablet, and desktop
- **CSS custom properties** — easy theme customization via variables in `:root`
- **Intersection Observer API** — performant scroll-triggered animations
- **Formsubmit.co** — free contact form backend (no server needed)
- **WCAG AA** — designed with accessible color contrast and semantic HTML

---

## 📄 License

This template is free to use for personal portfolios. Customize it, make it yours, and land that cybersecurity role! 🚀
