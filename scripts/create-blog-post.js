#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

// Ensure the blog directory exists
if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Function to convert title to slug
function titleToSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
}

// Function to create a new blog post
async function createBlogPost() {
    console.log('📝 Create a new blog post\n');

    const title = await askQuestion('Title: ');
    const slug = titleToSlug(title);
    const excerpt = await askQuestion('Excerpt: ');
    const author = await askQuestion('Author: ');
    const category = await askQuestion('Category: ');

    // Get today's date in YYYY-MM-DD format
    const date = new Date().toISOString().split('T')[0];

    // Create the blog post content
    const content = `---
title: "${title}"
excerpt: "${excerpt}"
date: "${date}"
author: "${author}"
category: "${category}"
coverImage: "/images/blog/${slug}.jpg"
---

# ${title}

Write your blog post content here using Markdown.

## Section 1

Your content goes here...

## Section 2

More content...

`;

    // Write the file
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    fs.writeFileSync(filePath, content);

    console.log(`\n✅ Blog post created successfully at ${filePath}`);
    console.log(`\n💡 Don't forget to add a cover image at public/images/blog/${slug}.jpg`);

    rl.close();
}

// Helper function to ask questions
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Run the script
createBlogPost().catch(err => {
    console.error('Error creating blog post:', err);
    process.exit(1);
}); 