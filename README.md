# Nicolás Amado — Professional JavaScript Portfolio

This is a polished, modern, responsive portfolio built with:

- Semantic HTML
- Modern CSS
- Professional vanilla JavaScript
- Dynamic rendering from structured data
- No React dependency
- No database required
- Render-ready

## Why this version is safer

The previous React version failed because JSX required a complete React/Vite configuration. This version avoids that entire class of errors by using clean JavaScript modules and direct DOM rendering.

It still includes dynamic JavaScript features:

- Dynamic experience rendering
- Project filters
- Skill search
- Command palette with `Ctrl + K`
- Active navigation highlighting
- Scroll progress bar
- Cursor spotlight effect
- Reveal animations
- Copy-email interaction
- Self-check in the console

## Run locally with Vite

```bash
npm install
npm run dev
```

Open the local URL, usually:

```txt
http://localhost:5173
```

## Run without Vite

You can also open `index.html` directly in the browser because the project uses relative paths.

For a better local server experience, you can use:

```bash
npx serve .
```

## Deploy to Render

### Recommended Render setup

Use **Static Site**.

1. Upload this folder to GitHub.
2. Go to Render.
3. Click **New +**.
4. Select **Static Site**.
5. Connect the GitHub repository.
6. Use:

```txt
Build Command: npm install && npm run build
Publish Directory: dist
```

### Alternative without build

Because this portfolio is static, you can also deploy without a build step:

```txt
Build Command: 
Publish Directory: .
```

But the Vite build option is cleaner for production.

## Do you need MongoDB?

No. This portfolio does not need MongoDB.

A database is only useful if you want:

- A contact form that stores submissions
- A blog
- Admin panel to edit content
- Project CMS
- Login/authentication
- Analytics stored server-side

For a professional portfolio, a static deployment is faster, safer and more reliable.

## How to edit your information

All portfolio data is inside:

```txt
script.js
```

Look for the `portfolio` object at the top of the file.

You can edit:

- Experience
- Projects
- Skills
- Education
- Metrics
- Contact information
