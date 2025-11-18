# Influence Imagine - Website

A modern, responsive website for Influence Imagine - a creative design and marketing agency.

## Features

- **Modern Design**: Inspired by Plutenium design with black/white color scheme
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **5 Main Pages**: Home, Services, About Us, Portfolio, and Contact
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **Contact Form**: Lead generation form on contact page
- **Social Media Links**: Instagram and Facebook integration

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Footer.jsx       # Footer with links and contact info
│   └── WhatsAppButton.jsx  # Floating WhatsApp button
├── pages/
│   ├── Home.jsx         # Home page with hero and services
│   ├── Services.jsx     # All services listing
│   ├── About.jsx        # About us with vision, mission, values
│   ├── Portfolio.jsx    # Portfolio with Instagram link
│   └── Contact.jsx      # Contact form and information
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Color Scheme

- **Black Background**: Header, Hero Section, Trust Belt, Footer
- **White Background**: Body content, Services, About, Portfolio
- **Primary Color**: Gold (#DEAB33) for CTAs and accents

## Notes

- Replace placeholder images with actual photos (team photo, activity photos, client logos)
- Update client logos in the Trust Belt section
- Form submission handler needs backend integration

