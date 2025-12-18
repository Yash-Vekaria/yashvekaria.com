# Website Setup Instructions

## Overview
Your new professional website has been created with a clean, modern design featuring a cobalt blue theme. The website includes all the pages you requested and follows the design patterns from the reference websites while maintaining a unique identity.

## Files Created

### Core Files
- `index.html` - Homepage with hero section, updates, and selected publications
- `publications.html` - Publications page with boxed styling
- `service.html` - Service page with structured sections
- `recognition.html` - Recognition page with awards, fellowships, and media coverage
- `impact.html` - Impact page (broader impact, outreach, applied work)
- `students.html` - Students page with mentorship information
- `teaching.html` - Teaching page with experience and philosophy
- `styles.css` - Complete CSS with cobalt blue theme and interactions
- `favicon.svg` - YV favicon with rounded square border

### Assets
- `ucdavis-logo.svg` - UC Davis logo for header
- `profile-photo.svg` - Placeholder profile photo with YV initials
- `techcrunch-logo.svg` - TechCrunch logo for media coverage
- `wired-logo.svg` - Wired logo for media coverage
- `ieee-logo.svg` - IEEE logo for media coverage

### Configuration
- `CNAME` - Custom domain configuration
- `README.md` - Comprehensive documentation
- `SETUP_INSTRUCTIONS.md` - This file

## Next Steps

### 1. Create New Repository
1. Go to GitHub and create a new **private** repository named `yashvekaria.com`
2. Upload all the files from the `/Users/yvekaria/Documents/MyWebsite/` directory
3. Commit and push the files

### 2. Set Up Custom Domain
1. In your repository, go to **Settings** → **Pages**
2. Under "Source", select "Deploy from a branch" → main branch
3. Under "Custom domain", enter `yashvekaria.com`
4. Check "Enforce HTTPS"
5. Save the settings

### 3. Configure DNS
Contact your domain registrar and add these DNS records:

**A Records:**
```
yashvekaria.com → 185.199.108.153
yashvekaria.com → 185.199.109.153
yashvekaria.com → 185.199.110.153
yashvekaria.com → 185.199.111.153
```

**CNAME Record:**
```
www.yashvekaria.com → yash-vekaria.github.io
```

### 4. Set Up Redirect (Optional)
To redirect visitors from `yash-vekaria.github.io` to `yashvekaria.com`, configure the redirect at the DNS/hosting layer (e.g., GitHub Pages "Enforce HTTPS" + custom domain). No client-side JavaScript is necessary.

### 5. Customize Content
1. Replace `profile-photo.svg` with your actual photo
2. Update all placeholder content with your real information
3. Replace `#` links with actual URLs
4. Update social media links
5. Add real publication PDFs, videos, and other resources

## Design Features Implemented

### ✅ Homepage
- Hero section with professional layout
- Structured "Recent Updates" section
- "Selected Publications" section with boxed styling
- Research interests cards
- UC Davis logo in header

### ✅ Publications Page
- Boxed styling similar to ruipan.xyz
- Organized by year
- Links for PDF, Abstract, Video, Code, Dataset, BibTeX
- Professional layout with hover effects

### ✅ Service Page
- Program Committees
- Artifact Evaluation Committees
- Invited Reviewer
- Organizing Committees
- Other Service
- Boxed award badges with hyperlinks

### ✅ Recognition Page
- Awards section with structured entries
- Fellowships section
- Media Coverage with outlet logos and hyperlinks
- Professional styling throughout

### ✅ Talks Page
- Invited Talks
- Conference Presentations
- Seminars and Workshops
- Links for slides, videos, papers

### ✅ Students Page
- PhD Students section
- Undergraduate Students section
- Research opportunities section
- Structured student information

### ✅ Teaching Page
- Teaching philosophy
- Current and past teaching
- Teaching awards
- Course materials

## Color Scheme
- Primary Blue: #0047AB (Cobalt Blue)
- Secondary Blue: #1E3A8A
- Light Blue: #3B82F6
- Accent Blue: #60A5FA
- Very Light Blue: #EBF8FF

## Responsive Design
- Mobile-first approach
- Responsive navigation
- Flexible grid layouts
- Touch-friendly interactions

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance
- Update publications regularly
- Keep "Recent Updates" current
- Maintain student information
- Check and update all links
- Add new talks and service activities

## Contact
For questions about the website setup or customization, refer to the README.md file or contact the developer.

---

**Note**: This website is ready to deploy. Simply follow the setup instructions above to get your professional website live at yashvekaria.com!
