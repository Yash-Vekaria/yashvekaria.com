# Yash Vekaria's Personal Website

A professional academic website built entirely with performant HTML and CSS, featuring a clean design with a cobalt blue theme.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean, modern design inspired by leading academic websites
- **Cobalt Blue Theme**: Consistent color scheme throughout the site
- **Comprehensive Sections**: Home, Publications, Service, Recognition, Talks, Students, Teaching
- **Polished Interactions**: Pure-CSS hover effects, smooth transitions, and disclosure patterns
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

1. **Home**: Hero section, recent updates, selected publications, and research interests
2. **Publications**: Comprehensive list of research publications with boxed styling
3. **Service**: Academic service including program committees, reviews, and awards
4. **Recognition**: Awards, fellowships, and media coverage
5. **Talks**: Invited talks, conference presentations, and seminars
6. **Students**: Research mentorship and student supervision
7. **Teaching**: Teaching experience, philosophy, and course materials

## Setup Instructions

### 1. Custom Domain Setup

To use the custom domain `yashvekaria.com`:

#### DNS Configuration
Add the following DNS records to your domain registrar:

**A Records** (point to GitHub Pages):
```
yashvekaria.com → 185.199.108.153
yashvekaria.com → 185.199.109.153
yashvekaria.com → 185.199.110.153
yashvekaria.com → 185.199.111.153
```

**CNAME Record** (for www subdomain):
```
www.yashvekaria.com → yash-vekaria.github.io
```

#### GitHub Repository Setup
1. Create a new private repository named `yashvekaria.com`
2. Upload all website files to this repository
3. Go to repository Settings → Pages
4. Set source to "Deploy from a branch" → main branch
5. Under "Custom domain", enter `yashvekaria.com`
6. Enable "Enforce HTTPS"

#### Redirect Setup
To redirect `yash-vekaria.github.io` to `yashvekaria.com`:

1. In your new repository, create a `CNAME` file containing:
   ```
   yashvekaria.com
   ```

2. Configure your DNS/hosting provider (or GitHub Pages) to enforce HTTPS and automatically redirect the apex domain to the canonical `www` or vice versa. No client-side scripts are required.

### 2. File Structure

```
yashvekaria.com/
├── index.html              # Homepage
├── publications.html       # Publications page
├── service.html           # Service page
├── recognition.html       # Recognition page
├── talks.html            # Talks page
├── students.html         # Students page
├── teaching.html         # Teaching page
├── styles.css            # Main stylesheet
├── favicon.svg           # Website favicon
├── ucdavis-logo.svg      # UC Davis logo
├── profile-photo.jpg     # Profile photo
└── README.md             # This file
```

### 3. Customization

#### Update Personal Information
- Edit `index.html` to update your bio, research interests, and contact information
- Replace `profile-photo.jpg` with your actual photo
- Update publication information in `publications.html`
- Modify service, recognition, talks, students, and teaching information in respective files

#### Update Links
- Replace placeholder links (`#`) with actual URLs
- Update social media links in the header and footer
- Add actual PDF links, video links, and other resources

#### Styling
- Modify `styles.css` to adjust colors, fonts, or layout
- The cobalt blue theme can be customized by changing CSS variables in `:root`

### 4. Adding Content

#### Publications
Add new publications in `publications.html` following this structure:
```html
<div class="publication-item">
    <div class="publication-content">
        <h3 class="publication-title">Your Paper Title</h3>
        <div class="publication-authors">Author Names</div>
        <div class="publication-venue">Conference/Journal Name</div>
        <div class="publication-abstract">Abstract text...</div>
    </div>
    <div class="publication-links">
        <a href="paper.pdf" class="pub-link pdf">PDF</a>
        <a href="abstract.html" class="pub-link abstract">Abstract</a>
    </div>
</div>
```

#### Updates
Add new updates in the "Recent Updates" section of `index.html`:
```html
<div class="update-item">
    <div class="update-date">Month Year</div>
    <div class="update-content">
        <strong>Update Title</strong> - Update description
    </div>
</div>
```

### 5. Deployment

1. Push all files to your GitHub repository
2. GitHub Pages will automatically build and deploy your site
3. Your site will be available at `https://yashvekaria.com`
4. The old site at `yash-vekaria.github.io` will redirect to the new domain

### 6. Maintenance

- Regularly update publications, talks, and other content
- Keep the "Recent Updates" section current
- Update student information as needed
- Maintain links and ensure all resources are accessible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website template is provided for personal use. Please customize it according to your needs and maintain appropriate attribution.

## Contact

For questions about this website setup, contact: yvekaria@ucdavis.edu
