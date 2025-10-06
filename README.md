<<<<<<< HEAD
# BachEnd Team Portfolio

A modern, responsive team portfolio website built with React.js, Vite, and Bootstrap 5. Features a multi-page application with React Router, Framer Motion animations, and a beautiful gradient theme showcasing the BachEnd development team's journey and projects.

## 🚀 Features

- **Team-Focused Design**: Showcases team members, collaboration, and shared achievements
- **React Router**: Multi-page navigation with smooth transitions between routes
- **Framer Motion**: Beautiful animations and page transitions throughout the site
- **Gradient Theme**: Purple-blue gradient theme with yellow accents (#6A1B9A to #3949AB)
- **Custom Typography**: Playfair Display for headings, Roboto for body text
- **Project Showcase**: Individual project pages with detailed team contributions
- **Team Members**: Dedicated team member cards with skills and social links
- **Journey Timeline**: Visual representation of team milestones and growth
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Performance**: Lazy loading, optimized images, and minimal bundle size

## 🛠️ Technologies Used

- **Frontend**: React 18, Vite
- **Styling**: Bootstrap 5, Custom CSS with gradient themes
- **Routing**: React Router DOM for multi-page navigation
- **Animations**: Framer Motion for smooth transitions and interactions
- **Icons**: Font Awesome
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bachend/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Netlify, Vercel, or any static hosting service.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   └── ContactForm.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Privacy.jsx
│   ├── data/               # Static data
│   │   └── projects.json
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles
│   └── App.css             # App-specific styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Hero section, bio, and skills
- `src/pages/About.jsx` - Personal details, experience, and education
- `src/pages/Contact.jsx` - Contact information and social links

### 2. Projects
Edit `src/data/projects.json` to add your projects:
```json
{
  "id": 1,
  "title": "Your Project Title",
  "shortDescription": "Brief project description",
  "description": "Detailed project description",
  "image": "project-image-url",
  "thumbnail": "project-thumbnail-url",
  "technologies": ["React", "Node.js", "MongoDB"],
  "category": "Web Application",
  "status": "Completed",
  "duration": "3 months",
  "featured": true
}
```

### 3. Styling
- Modify `src/index.css` for global styles
- Update CSS custom properties for theme colors
- Add custom Bootstrap variables if needed

### 4. Images
Replace placeholder images:
- Hero section: Update the hero image URL
- About section: Add your profile photo
- Projects: Add actual project screenshots

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain (optional)

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific settings:
```env
VITE_APP_TITLE=My Portfolio
VITE_APP_DESCRIPTION=Full-Stack Developer Portfolio
VITE_APP_URL=https://yourportfolio.com
```

### Contact Form Backend
The contact form currently logs submissions to the console. To make it functional:

1. **Netlify Forms**: Add `netlify` attribute to form
2. **EmailJS**: Integrate EmailJS service
3. **Custom Backend**: Connect to your API endpoint

Example EmailJS integration:
```bash
npm install @emailjs/browser
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: > 992px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Alt text for images
- Focus management
- Color contrast compliance
- Screen reader compatibility

## 🚀 Performance Optimizations

- Lazy loading for images
- Code splitting with React.lazy
- Optimized bundle size (< 1MB)
- Compressed images
- Minimal dependencies
- Efficient re-renders

## 📊 SEO Features

- Meta tags and Open Graph
- Structured data
- Sitemap generation
- Fast loading times
- Mobile-friendly design
- Semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help customizing the portfolio:

1. Check the [Issues](https://github.com/bach-end/portfolio/issues) page
2. Create a new issue with detailed description
3. Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [Bootstrap](https://getbootstrap.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Font Awesome](https://fontawesome.com/) - Icons
- [Unsplash](https://unsplash.com/) - Stock images

---

**Made with ❤️ by [BachEnd Team](https://github.com/bach-end)**
=======
# Portfolio
This is the portfolio website of our team.
>>>>>>> 9211ab7f53605f43b46f357ab233202c3ab7b462
