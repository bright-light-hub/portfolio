# Abhishek — Developer Portfolio

A modern, responsive personal portfolio website built to showcase my work, technical skills, education, experience, certifications, and contact information.

The portfolio is designed with a clean, professional visual style with premium geometric elements and glass-inspired UI details. It is intended to present my profile clearly to recruiters, interviewers, and potential collaborators.

## Live Website

**Portfolio:** https://portfolio-nine-alpha-pgbpmeucdh.vercel.app/

> The current deployment URL is a test Vercel URL and may be replaced with a custom domain later.

---

## Overview

This portfolio brings my professional profile and development work into one place.

It includes:

- Hero section with profile introduction
- About section
- Technical skills
- Project showcase
- Project image previews and modal galleries
- Projects without screenshots using CSS-based visual previews
- Experience
- Education
- Certifications
- Certificate preview
- Contact form powered by Formspree
- Resume access
- GitHub and LinkedIn links
- Responsive navigation
- Mobile-friendly layouts
- SEO and Open Graph metadata
- Custom favicon
- Social sharing preview image

---

## Features

### 1. Professional Hero Section

The landing section immediately communicates:

- Name
- Professional role
- Short introduction
- Primary calls to action
- Social/profile links
- Professional portrait
- Premium geometric visual background

### 2. About

A concise introduction describing my background, interests, and development focus.

### 3. Technical Skills

Skills are organized to make the technical stack easy to scan during a recruiter or interviewer review.

The portfolio can showcase technologies such as:

- Python
- Django
- FastAPI
- REST APIs
- JavaScript
- React
- HTML
- CSS
- Node.js
- MongoDB
- MySQL
- Git & GitHub
- Data Science / Machine Learning tools

### 4. Projects

Projects are displayed using reusable project cards.

The project system supports both:

- Projects with real screenshots
- Projects without screenshots using CSS-generated visual previews

Each project can contain:

- Project title
- Category
- Description
- Technologies
- Highlights
- GitHub link
- Live demo link
- Project screenshots

#### Project Preview Modal

Clicking a project opens a detailed modal.

For projects with screenshots, the modal can display multiple images.

For projects without screenshots, the modal displays a professional placeholder preview instead of failing.

### 5. Certifications

Certificates are displayed in premium glass-style cards.

Each certification can include:

- Certificate title
- Issuing organization
- Completion date
- Skills
- Certificate ID
- Verification link
- Certificate PDF preview

### 6. Contact Form

The contact form uses **Formspree** so visitors can send messages without requiring a custom backend.

The form supports:

- Name
- Email
- Subject
- Message
- Validation feedback
- Submission state
- Success message

### 7. Responsive Design

The interface is designed for:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile screens

Special attention has been given to:

- Navigation
- Hero layout
- Project cards
- Project modals
- Certificate modals
- Contact form
- Footer
- Horizontal overflow prevention

### 8. Accessibility

The project includes basic accessibility improvements such as:

- Meaningful image alt text
- Keyboard-accessible interactive elements
- Visible `:focus-visible` states
- Escape-key support for modals
- Reduced-motion support
- Semantic navigation and sections

---

## Tech Stack

### Frontend

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### UI / Interaction

- **Framer Motion** — animations and reveal effects
- **Lucide React** — interface icons
- Custom CSS — layouts, responsive design, glass effects, geometric visuals, modals

### Services

- **Formspree** — contact form submission
- **Vercel** — deployment and hosting
- **GitHub** — source control and repository hosting

---

## Project Structure

```text
portfolio/
│
├── public/
│   ├── certificates/
│   │   └── fastapi-rest-apis.pdf
│   │
│   ├── favicon.svg
│   ├── og-image.png
│   └── resume.pdf
│
├── src/
│   │
│   ├── assets/
│   │   ├── hero-person.png
│   │   └── projects/
│   │       ├── ai-navigator-home.png
│   │       ├── ai-navigator-dashboard.png
│   │       ├── samadhan-thumbnail.png
│   │       ├── short-news-thumbnail.png
│   │       └── retail-analysis-thumbnail.png
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx
│   │   └── Skills.jsx
│   │
│   ├── data/
│   │   ├── certifications.js
│   │   ├── profile.js
│   │   └── projects.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

> The exact component/data filenames may change as the portfolio evolves.

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

Check your versions:

```bash
node -v
npm -v
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/bright-light-hub/portfolio.git
```

Move into the project:

```bash
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173/
```

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Customization

Most personal information is centralized in the data files.

### Profile

Update:

```text
src/data/profile.js
```

Use it for:

- Name
- Role
- Email
- Social links
- Resume link
- Other profile information

### Projects

Update:

```text
src/data/projects.js
```

Each project can define its:

- Title
- Category
- Description
- Technologies
- Highlights
- Screenshots
- GitHub URL
- Live demo URL
- Visual class

Example:

```jsx
{
  id: 1,
  title: "Project Name",
  category: "Web Application",
  type: "Full-Stack",

  description: "Project description.",

  technologies: [
    "Python",
    "Django",
    "React"
  ],

  highlights: [
    "Feature one",
    "Feature two"
  ],

  images: [
    {
      src: projectImage,
      alt: "Project screenshot"
    }
  ],

  github: "https://github.com/YOUR_USERNAME/project",
  liveDemo: "https://example.com",

  featured: true
}
```

For a project without a screenshot, the project can use a CSS visual class instead.

### Certifications

Update:

```text
src/data/certifications.js
```

Add:

- Certificate title
- Issuer
- Date
- Skills
- Certificate ID
- PDF
- Verification URL

---

## Contact Form

The contact form is connected through Formspree.

To configure it:

1. Create a form in Formspree.
2. Copy the Form ID.
3. Add the Form ID to `Contact.jsx`.
4. Configure the destination email in Formspree.
5. Test the form locally.
6. Test it again after deployment.

Do not place private API keys, passwords, or other secrets in frontend source code.

---

## Deployment

The portfolio is deployed using Vercel.

Typical deployment workflow:

```text
Local development
       ↓
git add .
       ↓
git commit
       ↓
git push
       ↓
GitHub
       ↓
Vercel
       ↓
Production deployment
```

Vercel can automatically redeploy the project whenever a new commit is pushed to the connected GitHub repository.

---

## SEO & Social Sharing

The project includes metadata for:

- Page title
- Meta description
- Author
- Robots
- Open Graph
- Twitter/X card
- Theme color
- Canonical URL
- Favicon

The social preview image is:

```text
public/og-image.png
```

The recommended Open Graph image size is:

```text
1200 × 630 px
```

When changing the production domain, update the canonical and Open Graph URLs in:

```text
index.html
```

---

## Performance

The production build has been tested successfully with Vite.

Build command:

```bash
npm run build
```

The portfolio uses optimized project thumbnails and a production Vite bundle.

For future optimization, larger images can be further compressed or converted to modern formats such as WebP/AVIF if needed.

---

## Accessibility

The portfolio includes:

- Keyboard navigation
- Focus-visible styling
- Descriptive image alt text
- Escape-key modal closing
- Reduced-motion support
- Responsive layouts
- Semantic HTML elements where appropriate

Accessibility should continue to be reviewed as new components are added.

---

## Future Improvements

Possible future enhancements include:

- Custom domain
- Improved project case-study pages
- More certificate entries
- Blog / technical articles
- Dark/light theme option
- Advanced analytics
- Automated sitemap generation
- Improved image optimization
- Backend-powered contact form
- Project filtering by technology/category

These features are intentionally not required for the current portfolio version.

---

## License

This portfolio is a personal project.

The source code can be used as a reference for learning and inspiration, but personal content, photographs, certificates, resume files, project screenshots, and other proprietary assets should not be reused without permission.

---

## Author

**Abhishek**

Python & Full-Stack Developer

Interested in building practical web applications, learning modern technologies, and solving real-world problems through software.

- Portfolio: https://portfolio-nine-alpha-pgbpmeucdh.vercel.app/
- GitHub: `https://github.com/bright-light-hub`
- LinkedIn: `https://www.linkedin.com/in/k63abhishek/`
- Email: `brightlight052023@gmail.com`


