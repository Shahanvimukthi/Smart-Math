# Smart Math

A bilingual Grade 10–11 maths learning website built with plain HTML, CSS, and JavaScript.

## Phase 2 folder structure

```text
Smart-Math/
├── index.html                 # Home page and featured courses
├── pages/
│   ├── syllabus.html          # Course syllabus and learning units
│   └── basics.html            # Starter lessons, quiz, and cylinder model
└── assets/
    ├── css/
    │   └── style.css          # Shared responsive styles
    └── js/
        ├── app.js             # Navigation and Sinhala/English toggle
        └── basics.js          # Quiz and interactive cylinder
```

## Run the site

The site has no build step or npm dependencies. Because the pages load JavaScript, open the project through a local web server rather than opening the HTML files directly.

### Option 1: Python

1. Open a terminal in the project folder (the folder containing `index.html`).
2. Run:

   ```powershell
   py -m http.server 8000
   ```

   If `py` is not available, use `python -m http.server 8000`.
3. Open <http://localhost:8000> in your browser.
4. Press `Ctrl+C` in the terminal to stop the server.

### Option 2: Visual Studio Code

Install the **Live Server** extension, open `index.html`, then select **Go Live** in the status bar.

Bootstrap Icons are loaded from a CDN, so an internet connection is needed for the icons. The rest of the site runs locally.

## Phase 2 features

- Responsive landing page inspired by the supplied reference.
- English/Sinhala language toggle, with the selection remembered in the browser.
- Syllabus page with the first three learning units.
- Basics lessons with an interactive knowledge-check quiz.
- CSS 3D cylinder with rotation and radius/height controls for exploring volume.
