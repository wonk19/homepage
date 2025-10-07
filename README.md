# Research Lab Homepage

A modern, responsive website for a research laboratory, built with React and Vite.

## Features

- **Modern Design**: Clean and professional interface with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages**:
  - Home: Lab introduction and latest news
  - People: Team members and alumni
  - Research: Ongoing and past projects
  - Publications: Academic publications with filtering
  - Teaching: Courses and lecture materials
  - Resources: Datasets, software, and facilities
  - News & Events: Latest updates and upcoming events
  - Gallery: Photo gallery with category filtering
  - Contact: Contact information and location

## Technology Stack

- **React 18**: Modern UI library
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
# Preview production build
npm run preview
```

## Deployment

This project is configured to deploy automatically to GitHub Pages when you push to the main branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" under "Code and automation"
3. Set Source to "GitHub Actions"
4. Push your code to the main branch
5. The site will be automatically built and deployed

The site will be available at: `https://[username].github.io/homepage/`

## Customization

### Update Content

Edit the content in the page components located in `src/pages/`:
- `Home.jsx` - Homepage content and news
- `People.jsx` - Team member information
- `Research.jsx` - Research projects
- `Publications.jsx` - Publication list
- And others...

### Update Styling

Modify the CSS files in `src/pages/` and `src/components/` to customize the appearance.

Global styles and CSS variables are in:
- `src/index.css` - Global styles
- `src/App.css` - App-level styles

### Update Site Configuration

- Base URL: Edit `base` in `vite.config.js`
- Site title: Edit `index.html`
- Lab name: Edit navigation in `src/components/Navigation.jsx`

## License

MIT License - feel free to use this template for your own research lab website.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
