# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **personal portfolio website** for Desared Osmanllari (Data Scientist), built as a static single-page application using the HTML5 UP Miniport template. The site is hosted on GitHub Pages at desared.com.

**Technology Stack:**
- HTML5 with semantic markup
- CSS3 compiled from SASS/SCSS
- jQuery for smooth scrolling and UI interactions
- Font Awesome for icons
- No build tools or package managers required

## Development Commands

### CSS/SASS Development

The project uses SASS for CSS preprocessing. To compile SASS to CSS:

```bash
# Watch and auto-compile SASS (requires sass CLI tool installed)
sass --watch assets/sass/main.scss:assets/css/main.css

# Single compilation
sass assets/sass/main.scss assets/css/main.css
```

Note: SASS is not currently installed in this environment. Install it with:
```bash
npm install -g sass
# or
brew install sass/sass/sass  # macOS
```

### Local Development

Since this is a static site, simply open [index.html](index.html) in a browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Then visit http://localhost:8000
```

### Deployment

Changes pushed to the `master` branch are automatically deployed to GitHub Pages at desared.com.

## Architecture

### Page Structure

The site is a single-page application with scroll-to-anchor navigation. [index.html](index.html) contains all content organized into sections:

1. **Navigation** (`#nav`) - Fixed top navigation with smooth scrolling
2. **Hero/Home** (`#top`) - Welcome section with profile image and CTA
3. **Professional Profile** (`#profile`) - 3-column grid showcasing expertise
4. **Portfolio** (`#portfolio`) - 6-column project grid with external links
5. **Skills** (`#skills`) - Technical stack and certifications
6. **Contact** (`#contact`) - Embedded Google Form and social links

### Responsive Design

The site uses SASS-defined breakpoints (defined in [assets/sass/main.scss](assets/sass/main.scss)):

- **xlarge**: 1281px - 1680px
- **large**: 981px - 1280px
- **medium**: 737px - 980px
- **small**: ≤ 736px (mobile)

Grid classes: `col-4`, `col-6-medium`, `col-12-small` etc. adjust layouts per breakpoint.

### JavaScript Architecture

**Main entry point:** [assets/js/main.js](assets/js/main.js)

Key dependencies:
- `jquery.min.js` - DOM manipulation
- `jquery.scrolly.min.js` - Smooth scroll-to-anchor
- `browser.min.js` - Browser/device detection
- `breakpoints.min.js` - Responsive breakpoint management
- `util.js` - Custom jQuery plugins (navList, panel, placeholder, prioritize)

Functionality includes:
- Preload animation removal on page load
- Smooth scrolling navigation with offset for fixed nav height
- Scroll-to-top button (custom implementation in [index.html](index.html):310-360)

### SASS Organization

**Main file:** [assets/sass/main.scss](assets/sass/main.scss)

SASS modules in `assets/sass/libs/`:
- `_vars.scss` - CSS custom properties and variables
- `_functions.scss` - SASS helper functions
- `_mixins.scss` - Reusable SASS mixins
- `_vendor.scss` - Vendor prefix handling
- `_breakpoints.scss` - Media query breakpoint definitions
- `_html-grid.scss` - Grid system implementation

The compiled output is [assets/css/main.css](assets/css/main.css) (2,445 lines).

## Important Implementation Details

### Contact Form
The contact form is an **embedded Google Form iframe**, not a backend form handler. To update the form:
1. Edit the Google Form at the source
2. Update the iframe src in [index.html](index.html) (search for "docs.google.com/forms")
3. Adjust responsive iframe heights in the `<style>` block ([index.html](index.html):325-345)

### Scroll-to-Top Button
Custom JavaScript implementation in [index.html](index.html):310-360. Shows when scrolled >20px from top, smoothly scrolls back to top on click.

### Social Media Links
Located in the contact section footer ([index.html](index.html):285-290). Currently includes:
- LinkedIn (linkedin.com/in/desared-osmanllari)
- Xing (xing.com/profile/Desared_Osmanllari)
- GitHub (github.com/desared)
- Twitter (twitter.com/desared)

### Project Showcase
Portfolio items link to external GitHub repos and projects. Images are stored in `images/pic01.jpg` through `images/pic06.png`.

## File Editing Guidelines

### When Updating Styles
1. **Always edit SASS files** in `assets/sass/`, never edit `assets/css/main.css` directly
2. Compile SASS after changes: `sass assets/sass/main.scss assets/css/main.css`
3. Follow existing SASS structure (variables in `_vars.scss`, mixins in `_mixins.scss`)
4. Use the established breakpoint mixins for responsive changes

### When Updating Content
1. Edit [index.html](index.html) directly - it's the only HTML file
2. Maintain semantic HTML5 structure (articles, sections, headers)
3. Follow the existing grid class pattern for layout
4. Update meta tags if changing page title/description

### When Adding Images
1. Place images in the `images/` directory
2. Optimize images before adding (site loads quickly)
3. Update references in [index.html](index.html)
4. Use descriptive filenames

## Template Attribution

Based on **Miniport by HTML5 UP** (html5up.net) under CCA 3.0 license. Original template credits in [README.txt](README.txt) and [LICENSE.txt](LICENSE.txt).
