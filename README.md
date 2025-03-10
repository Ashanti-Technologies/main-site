# Ashanti Technologies Website

A modern, professional, and responsive website for Ashanti Technologies LTD, an IT solutions company based in Amrahia, Greater Accra.

## Features

- **Modern Design**: Clean, tech-focused design with a color scheme of blue, white, and black
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with SEO best practices in mind
- **Fast Performance**: Optimized for quick load times
- **Multiple Pages**: Home, About Us, Services, Contact, and Blog sections
- **Markdown Blog**: Blog system that uses Markdown files for content

## Pages

- **Home**: Features a captivating hero section, about section, services overview, and call-to-action
- **About Us**: Company information, mission, vision, values, and location details
- **Services**: Detailed information about the four core services:
  - Software Development & IT Solutions
  - Hardware & Networking Services
  - Cloud Computing & Data Solutions
  - IT Consulting & Digital Transformation
- **Contact**: Contact form, company address, phone number, email, and Google Maps embed
- **Blog**: Tech-related articles and company updates written in Markdown

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, consistent icons
- **Markdown**: Blog content written in Markdown
- **Remark**: Markdown processing

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ashanti-tech-website.git
   cd ashanti-tech-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Blog System

The website includes a blog system that uses Markdown files for content. Blog posts are stored in the `src/content/blog` directory.

### Creating a New Blog Post

You can create a new blog post using the provided script:

```bash
pnpm new-blog
```

This will prompt you for the blog post details and create a new Markdown file in the `src/content/blog` directory.

### Blog Post Format

Blog posts use frontmatter for metadata:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your blog post"
date: "2023-04-15"
author: "Your Name"
category: "Category Name"
coverImage: "/images/blog/your-image.jpg"
---

# Your Blog Post Title

Your content goes here...
```

### Adding Images

Blog post images should be placed in the `public/images/blog` directory. The cover image path in the frontmatter should be relative to the `public` directory.

## Building for Production

```bash
pnpm build
```

## Running Production Build

```bash
pnpm start
```

## Contact Information

- **Company**: Ashanti Technologies LTD
- **Location**: Amrahia, Greater Accra, Ghana
- **Digital Address**: GM-241-4206
- **Phone**: +233 559 627 280
- **Email**: admin@ashantitech.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.
