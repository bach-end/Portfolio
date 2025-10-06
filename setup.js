#!/usr/bin/env node

/**
 * Portfolio Setup Script
 * 
 * This script helps you quickly customize the portfolio with your information.
 * Run: node setup.js
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    key: 'name',
    question: 'What is your full name? ',
    default: 'Your Name'
  },
  {
    key: 'title',
    question: 'What is your professional title? ',
    default: 'Full-Stack Developer & Designer'
  },
  {
    key: 'email',
    question: 'What is your email address? ',
    default: 'your.email@example.com'
  },
  {
    key: 'phone',
    question: 'What is your phone number? ',
    default: '+1 (555) 123-4567'
  },
  {
    key: 'location',
    question: 'Where are you located? ',
    default: 'San Francisco, CA'
  },
  {
    key: 'github',
    question: 'What is your GitHub username? ',
    default: 'yourusername'
  },
  {
    key: 'linkedin',
    question: 'What is your LinkedIn username? ',
    default: 'yourusername'
  },
  {
    key: 'twitter',
    question: 'What is your Twitter username? ',
    default: 'yourusername'
  }
];

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question.question, (answer) => {
      resolve(answer.trim() || question.default);
    });
  });
}

async function setupPortfolio() {
  console.log('🎨 Welcome to the Portfolio Setup!\n');
  console.log('This script will help you customize the portfolio with your information.\n');

  const answers = {};
  
  for (const question of questions) {
    answers[question.key] = await askQuestion(question);
  }

  console.log('\n📝 Updating files with your information...\n');

  // Update Home.jsx
  const homePath = path.join(__dirname, 'src', 'pages', 'Home.jsx');
  let homeContent = fs.readFileSync(homePath, 'utf8');
  
  homeContent = homeContent.replace(/Your Name/g, answers.name);
  homeContent = homeContent.replace(/Full-Stack Developer & Designer/g, answers.title);
  
  fs.writeFileSync(homePath, homeContent);
  console.log('✅ Updated Home.jsx');

  // Update About.jsx
  const aboutPath = path.join(__dirname, 'src', 'pages', 'About.jsx');
  let aboutContent = fs.readFileSync(aboutPath, 'utf8');
  
  aboutContent = aboutContent.replace(/yourusername/g, answers.github);
  
  fs.writeFileSync(aboutPath, aboutContent);
  console.log('✅ Updated About.jsx');

  // Update Contact.jsx
  const contactPath = path.join(__dirname, 'src', 'pages', 'Contact.jsx');
  let contactContent = fs.readFileSync(contactPath, 'utf8');
  
  contactContent = contactContent.replace(/your.email@example.com/g, answers.email);
  contactContent = contactContent.replace(/\+1 \(555\) 123-4567/g, answers.phone);
  contactContent = contactContent.replace(/San Francisco, CA/g, answers.location);
  contactContent = contactContent.replace(/yourusername/g, answers.github);
  
  fs.writeFileSync(contactPath, contactContent);
  console.log('✅ Updated Contact.jsx');

  // Update Footer.jsx
  const footerPath = path.join(__dirname, 'src', 'components', 'Footer.jsx');
  let footerContent = fs.readFileSync(footerPath, 'utf8');
  
  footerContent = footerContent.replace(/yourusername/g, answers.github);
  footerContent = footerContent.replace(/your.email@example.com/g, answers.email);
  
  fs.writeFileSync(footerPath, footerContent);
  console.log('✅ Updated Footer.jsx');

  // Update Privacy.jsx
  const privacyPath = path.join(__dirname, 'src', 'pages', 'Privacy.jsx');
  let privacyContent = fs.readFileSync(privacyPath, 'utf8');
  
  privacyContent = privacyContent.replace(/your.email@example.com/g, answers.email);
  privacyContent = privacyContent.replace(/San Francisco, CA/g, answers.location);
  
  fs.writeFileSync(privacyPath, privacyContent);
  console.log('✅ Updated Privacy.jsx');

  // Update index.html
  const indexPath = path.join(__dirname, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  indexContent = indexContent.replace(/Your Name/g, answers.name);
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.html');

  console.log('\n🎉 Setup complete! Your portfolio has been customized with your information.');
  console.log('\n📋 Next steps:');
  console.log('1. Run "npm install" to install dependencies');
  console.log('2. Run "npm run dev" to start the development server');
  console.log('3. Update src/data/projects.json with your projects');
  console.log('4. Replace placeholder images with your own');
  console.log('5. Customize the styling in src/index.css if needed');
  console.log('\n🚀 Happy coding!');

  rl.close();
}

setupPortfolio().catch(console.error);
