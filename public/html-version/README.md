# DESHON DEVSOL Website - HTML/CSS/JavaScript Version

This is a standalone HTML, CSS, and JavaScript version of the DESHON DEVSOL training organization website.

## 📁 Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive functionality and animations
- `README.md` - This file

## 🚀 How to Use

### Option 1: Open Directly
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Server (Recommended)
For best results, serve the files using a local web server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Using Node.js:**
```bash
npx http-server

# Then open the provided URL
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

## ✨ Features

### Sections
- ✅ Header Navigation (Fixed, Responsive)
- ✅ Hero Section with Statistics
- ✅ About Section (Mission, Vision, Teaching Approach)
- ✅ Courses Section (DevOps & Data Science Tracks)
- ✅ Communication & Soft Skills Section
- ✅ Contact Form with Enrollment
- ✅ Footer with Quick Links & Social Media

### Functionality
- ✅ Smooth scroll navigation
- ✅ Mobile-responsive menu
- ✅ Expandable course details
- ✅ Working contact form (with success message)
- ✅ Scroll animations
- ✅ Hover effects throughout
- ✅ Form validation

### Design
- ✅ Blue and white color theme
- ✅ Modern Inter font family
- ✅ Professional tech-oriented look
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Smooth animations and transitions

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css` (line 17-30):
```css
:root {
    --primary-blue: #2563eb;
    --secondary-blue: #60a5fa;
    /* ... more colors */
}
```

### Content
Edit text directly in `index.html` or course data in `script.js`:
```javascript
const devOpsCourses = [
    // Edit course information here
];
```

### Images
Replace the hero image URL in `index.html` (line 64) with your own image.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **No frameworks required** - Pure HTML/CSS/JavaScript
- **No build process** - Works out of the box
- **No dependencies** - All code is self-contained
- **SEO-friendly** - Semantic HTML structure
- **Accessible** - Proper ARIA labels and semantic elements

## 📝 Notes

1. The contact form currently shows a success message but doesn't send data anywhere. To make it functional:
   - Add a backend API endpoint
   - Update the form submission in `script.js` to send data via AJAX/fetch

2. To use Google Fonts offline:
   - Download the Inter font family
   - Add font files to your project
   - Update the `@import` in `styles.css`

3. For production deployment:
   - Minify CSS and JavaScript files
   - Optimize images
   - Add proper meta tags for SEO
   - Set up analytics tracking

## 🌐 Deployment

You can deploy this website to any static hosting service:

- **GitHub Pages** - Free, easy to use
- **Netlify** - Drag and drop deployment
- **Vercel** - Simple static hosting
- **Traditional Web Hosting** - Upload via FTP

## 📞 Support

For questions or issues with this template, refer to the documentation or modify the code as needed for your specific requirements.

## 📄 License

This template is provided as-is for DESHON DEVSOL. Feel free to customize it for your needs.

---

**Created for:** DESHON DEVSOL Training Organization  
**Version:** 1.0.0  
**Last Updated:** 2025
